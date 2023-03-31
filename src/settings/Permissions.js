import React from 'react';
import Nav from '../Nav';
import toast from 'toasted-notes'; 
import 'toasted-notes/src/styles.css';
import { CircleLoader } from 'react-spinners';
import { css } from '@emotion/core';
import { Link,  withRouter } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { getPermissions, assignPermissionsToRole,getSelectedPermissions } from '../store/actions/settingActions';


let letters = RegExp(/^[a-zA-Z\s]*$/);
const loaderCss = css`
margin: 150px auto 10px auto;
border-color:white;
`

class Permissions extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            pageCount: 1,
            currentPage: 1,
            loading: false,
            permissions: [],
            initialPermission: 0,
            status : null
            
        }
    }

     async componentDidMount() {

        await this.props.getPermissions();
        let name = this.props.match.params.name
         await this.props.getSelectedPermissions(name)
    }

    handleUpdate = (event, permit) => {
       
        let permissions = this.state.permissions;

        permissions.push({
             "id":  permit.id 
        });
       
         this.setState({
             status : !this.state.status,
             permissions: permissions,
         });
        
        permit.access = permit.access == 1 ? permit.access = undefined : permit.access =1
        
    }
  
    handleSelected = (permit, status) => {
        const { selectedpermission, permissions } = this.props;
    }
    

    handleBack = (event) => {
        event.preventDefault();
        this.props.history.push('/roles');
       
    }

    handleSubmit = async (event) => {
        const id = this.props.match.params.id;
        
        event.preventDefault();
        const data = {
            permissions: this.state.permissions,
        }
       
       
        this.setState({
            loading: true
        });
              
        await this.props.assignPermissionsToRole(data, id).then(
            datum =>{
            if (datum.message == 'permission added to role') {
                toast.notify('Permission set')
        }
            else {
                toast.notify('permission not set')
                }
            } 
        );
       
        this.setState({
            loading: false,
    
        });
    }
    handlePageClick = (event) => {
        const token = localStorage.getItem('token');
        const page = (event.selected) + 1;
         
            const response = fetch( `http://hotelanywhere.ng/background/api/permissions?page=${page}`, {
                method: 'GET',
            headers: {
                'Authorization':`Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                
            })
                .then(response => {
                  return  response.json();
                })
                .then(data => {
                    this.props.updatedVerification(data);
                   
                })
                .catch((error) => {
                    console.error('Error:', error);
                  });
        }     
    
    render() {
        const { permissions, selectedpermission, merge } = this.props;
        
        const pageCount =  permissions !== null && Math.ceil(permissions.total / permissions.per_page);
    
        return (
            <div className="home-page">
                <Nav />
                <div className="table-cont2">
                
                    <div className='wrap'>
                    <button type="button" className="back-btn" onClick={this.handleBack}><i class="fas fa-arrow-left"></i>Back</button>
                  <button onClick={this.handleSubmit} className="save-permission">Save permission<i class="fas fa-plus"></i></button>
                        
                     <button className="return-button" onClick={this.handleReturn}><i class="fas fa-chevron-left"></i>Return</button>
                       
                        </div>
                <table>
                        <thead>
                            <tr>
                                <th>S/N</th>
                                <th>Permissions</th>
                                <th>Assign</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                //  permissions !== null && permissions.data !== null && permissions.data.map((permit, x)
                           merge !== null && merge.map((permit, x) =>
                           
                               <tr>
                                   <td>{x+1}</td>
                                   <td className='eyes'>{permit.name}</td>
                                   <td> 
                                       <form>
                                           <label className="check-container">
                                               {
                                                 
                                                permit.access == 1 && <i class="far fa-check-square" onClick={(e) => {
                                                    this.handleUpdate(e, permit);
                                                }} ></i>
                                               }
                                               {
                                              
                                                permit.access == undefined && <i class="far fa-circle" onClick={(e) => {
                                                    this.handleUpdate(e, permit);
                                                }} ></i>
                                               }
                                              
                                                   </label>
                                       </form>
                                   </td>  
                              <td className='eyes'>{permit.created_at.split('T')[0]}</td>
                                </tr>
                                )}
                             </tbody>
                    </table>
                    <ReactPaginate
				  previousLabel={'<'}
                  nextLabel={'>'}
                  breakLabel={'...'}
                  breakClassName={'break-me'}
                 pageCount={pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                 onPageChange={this.handlePageClick}
                    breakClassName={'page-item'}
                    breakLinkClassName={'page-link'}
                    containerClassName={'pagination'}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    previousClassName={'page-item'}
                    previousLinkClassName={'page-link'}
                    nextClassName={'page-item'}
                    nextLinkClassName={'page-link'}
                    activeClassName={'active'}
				/>
              
                </div>
            </ div>         
        );
    }
}
const mapStateToProps = (state) => {

    return {
        permissions: state.settings.permissions,
        selectedpermission: state.settings.selectedpermission,
        merge: state.settings.merge,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
       
        getPermissions: (permissions) => dispatch(getPermissions(permissions)),
        assignPermissionsToRole: (arrayofPermissions, id) => dispatch(assignPermissionsToRole(arrayofPermissions, id)),
        getSelectedPermissions: (selectedpermission) => dispatch(getSelectedPermissions(selectedpermission))
       
    }
    
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Permissions));


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
import { createRole, getRoles  } from '../store/actions/settingActions';


let letters = RegExp(/^[a-zA-Z\s]*$/);
const loaderCss = css`
margin: 150px auto 10px auto;
border-color:white;
`

class Roles extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
           
            show: false,
            name: '',
            pageCount: 1,
            currentPage: 1,
            search: '',
            loading: false,
           
            errors:{},
        }
      
    }

    async componentDidMount() {
        await this.props.getRoles();
    }

    handleOpen = () => {
        this.setState({
            show: true,
        });
      
    }
    handleClose = () => {
        this.setState({
        show: false
})
    }

    handlePageClick = (event) => {
        const token = localStorage.getItem('token');
        const page = (event.selected) + 1;
         
            const response = fetch( `http://hotelanywhere.ng/background/api/roles?page=${page}`, {
                method: 'GET',
            headers: {
                'Authorization':`Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            })
                .then(response => {
                    console.log(response);
                  return  response.json();
                })
                .then(data => {
                    this.props.updatedVerification(data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                  });
        }     


    handleValidation() {
        
        let errors = {};
        let formIsValid = true;

        if(!this.state.name){
           formIsValid = false;
           errors['name'] = "Cannot be empty";
        }

       this.setState({errors: errors});
       return formIsValid;
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
   
        if (this.handleValidation()) {
            const data = {
                name: this.state.name,
               
            }
            this.setState({
                loading: true
            });
            
             this.props.createRole(data).then(datum => {
                this.setState({
                    loading: false,
                    name: '',
                    
                });
                 console.log(datum)
             
                
                 if (datum.message == "role added successfully") {

                    toast.notify('Role successfully created!');
                 }
                 else {
                    toast.notify('Role not created!');
                 }

                 this.handleClose();
             })
            .catch((error) => {
                console.error('Error:', error);
            });
  
        }
        
        else {
            console.error('Form inValid');
            }
    }

    handleChange = (event) => {
        event.preventDefault();
        const {name, value } = event.target;
        let errors = this.state.errors
        switch (name) {
            case 'name': errors.name= letters.test(value) && value.length > 0
                ? "" : "alphabets only"
                break;
        }
        this.setState({ errors, [name]: value });
    }

    render() {
        const { roles } = this.props;
        
        const pageCount =  roles !== null && Math.ceil(roles.total / roles.per_page);
    
        return (
            <div className="home-page">
                <Nav />
                <div className="table-cont2">
                <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            Role form
                            </Modal.Header>
                            <Modal.Body>
                        <form  className="condition-container">
                            <div className="verification-condition">
                           <div><label>Role name <span style={{color: "red"}}>*</span></label><br /></div> 
                                <div><input type="text" placeholder="role name"
                                name="name" onChange={this.handleChange}
                                    value={this.state.name} /></div>
                            </div>
                            <span style={{color: "red"}}>{this.state.errors["name"]}</span>

                        </form>
                 
                            </Modal.Body>
                            <Modal.Footer>
                         <button className="submit-condition"  onClick={this.handleSubmit}>Submit</button>
                       
                            </Modal.Footer>
                        </Modal>
                        <h2>Roles</h2>
                    <div className='wrap'>
                        <div></div>
                    <button type="button" className="add-employee" onClick={() =>this.handleOpen()}><Link>Create Role</Link></button>
                        {/* <form className="search-container">
                            <input type="text" placeholder="search...."
                             name="search" value={this.state.search}
                             onChange={this.handleChange}/>
                            <button ><i class="fas fa-search"></i></button>
                                </form>
                                <button className="return-button" onClick={this.handleReturn}><i class="fas fa-chevron-left"></i>Return</button> */}
                       
                        </div>
                <table>
                        <thead>
                            <tr>
                                <th>Role</th>
                                <th>Action</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                        {
                           roles !== null && roles.data !== null && roles.data.map((role) =>
                           
                                <tr>
                                   <td className='eyes'>{role.name}</td>
                             <td><button className="verification-action"><Link to={`/permission/${role.id}/${role.name}`}>Action</Link></button></td> 
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
console.log(state.settings.roles);
    return {
       roles: state.settings.roles,
      
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createRole: (role) => dispatch(createRole(role)),
        getRoles: (roles) => dispatch(getRoles(roles)),
    }
    
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Roles));


import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getEmployers, displayEmployer } from './store/actions/displayActions';
import { deleteEmployer } from './store/actions/deleteActions';
import Nav from './Nav';
import toast from 'toasted-notes'; 
import 'toasted-notes/src/styles.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import User from './User';


class Employers extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            previousemployer_id: "",
        }
       
    }
   async componentDidMount() {
         const data = this.props.id;
      
      await this.props.getEmployers(data)  
    }
    
    handleOpen = (employ) => {
        this.setState({
            show: true,
            previousemployer_id: employ.previousemployer_id,
        });
      
    }
    handleClose = () => {
        this.setState({
        show: false
})
    }

    handleDelete = async (id) => {
       
       await this.props.deleteEmployer(id).then(datum => {
        
           this.handleClose();
            toast.notify('Previous employer successfully deleted!');
                // this.props.history.push('/employerInfo')
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    
    render() {
        const { employer } = this.props;
    
        const data = this.props.id;
    
        return (

            <div className="table-cont">
                
                <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete criteria</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to permanently delete this previous employer?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={() => this.handleDelete(this.state.previousemployer_id)}>
            Delete
          </Button>
        </Modal.Footer>
                </Modal>
                
                                <table>
                                    <thead>
                                        <tr>
                                            {/*<th>Id</th>*/}
                                            <th>Employer Name</th>
                                            <th>StartMonth</th>
                                            <th>Start Year</th>
                                            <th>View</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                            {
                            employer != null && employer.map((employ) => 
                                    
                                    <tr key={employ.id}>
                                     
                                        <td>{employ.employer_name}</td>
                                        <td>{employ.startmonth}</td>
                                        <td>{employ.startyear}</td> 
                                        <td className="eyes"><Link to={`/employerInfo/${employ.previousemployer_id}`}><i class="far fa-eye eye"></i></Link></td>
                                        <td className="eyes"><Link><i onClick={() => this.handleOpen(employ)} class="fas fa-trash-alt"></i></Link></td>

                                     </tr>
                                )
                                 } 
                                        </tbody>
                                    </table>
                                    <div className="no-guarantor" style={{ display: employer == null || employer.length === 0 ? 'block' : 'none' }}>
                                <h6> Previous employer not available... </h6>
                            </div>

                </div>
                            
                    )
                }
            }
           
    const mapStateToProps = (state) => {
  
    return {
        employer: state.employer.employers,
        deleted: state.employer.oneemployer
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        deleteEmployer: (employer) => dispatch(deleteEmployer(employer)),
         displayEmployer: (employer) =>  dispatch(displayEmployer(employer)),
        getEmployers:(employers) => dispatch(getEmployers(employers))
    }
    
}   

export default connect(mapStateToProps, mapDispatchToProps)(Employers);
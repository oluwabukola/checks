import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getGuarantors, displayGuarantor } from './store/actions/displayActions';
import { deleteGuarantor } from './store/actions/deleteActions';
import toast from 'toasted-notes'; 
import 'toasted-notes/src/styles.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Nav from './Nav'



class Guarantors extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            guarantor_id: "",
        }
       
    }
   componentDidMount() {
        const data = this.props.id;
       this.props.getGuarantors(data);
    }
    handleOpen = (employ) => {
        this.setState({
            show: true,
            guarantor_id: employ.guarantor_id,
            
        });
    }
    handleClose = () => {
        this.setState({
        show: false
})
    }

    handleDelete = async (id) => {
       
    
        await this.props.deleteGuarantor(id).then(datum => {
            
            this.handleClose();
            toast.notify('Referee successfully deleted!');
            
                // this.props.history.push('/employerInfo')
            })
            .catch((error) => {
                console.error('Error:', error);
                
            });
    }
    
    render() {
        const {guarantors } = this.props;
     
        return (
       
            <div className="table-cont">
               
                <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete criteria</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to permanently delete this guarantor?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={() => this.handleDelete(this.state.guarantor_id)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
                                <table>
                                    <thead>
                                        <tr>
                                           {/* <th>Id</th>*/}
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                        <th>Relationship</th>
                                            <th>View</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                            {
                            guarantors != null && guarantors.map((employ) => 
                                    
                                    <tr key={employ.id}>
                                    {/*<td>{employ.rowIndex}</td>*/}
                                        <td>{employ.first_name}</td>
                                        <td>{employ.last_name}</td>
                                        <td>{employ.relationship}</td> 
                                        <td className="eyes"><Link to={`/guarantorInfo/${employ.guarantor_id}`}><i class="far fa-eye eye"></i></Link></td>
                                        <td className="eyes"><Link><i onClick={() => this.handleOpen(employ)}class="fas fa-trash-alt"></i></Link></td>

                                </tr>   
                                )
                                 } 
                                        </tbody>
                </table>

                <div className="no-guarantor" style={{ display: guarantors == null || guarantors.length === 0 ? 'block' : 'none' }}>
                                <h6>Guarantor not available... </h6>
                            </div>
                </div>
            //   </div>
                    )
                }
            }
           
const mapStateToProps = (state) => {
   
    return {
        guarantors: state.guarantor.guarantors,
        deleted: state.guarantor.oneguarantor,
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        // displayGuarantor: (guarantor) =>  dispatch(displayGuarantor(guarantor)),
        getGuarantors: (guarantors) => dispatch(getGuarantors(guarantors)),
        deleteGuarantor: (guarantor) => dispatch(deleteGuarantor(guarantor)),
        displayGuarantor: (guarantor) =>  dispatch(displayGuarantor(guarantor)),
        
    }
    
}   

export default connect(mapStateToProps, mapDispatchToProps)(Guarantors);
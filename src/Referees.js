import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getReferees } from './store/actions/displayActions';
import { deleteReferee} from './store/actions/deleteActions';
import toast from 'toasted-notes'; 
import 'toasted-notes/src/styles.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'


class Referees extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            referee_id: "",
        }
       
    }
   componentDidMount() {
        const data = this.props.id;
       this.props.getReferees(data);
    }
    handleOpen = (employ) => {
        this.setState({
            show: true,
            referee_id: employ.referee_id,
            
        });
      
    }
    handleClose = () => {
        this.setState({
        show: false
})
    }
    handleDelete = (id) => {
    
        this.props.deleteReferee(id).then(datum => {
           
            this.handleClose();
            toast.notify('Referee successfully deleted!');
            
            })
            .catch((error) => {
                console.error('Error:', error);
                
            });
    }
    
    render() {
        const {referees } = this.props;
      
        return (
            <div className="table-cont">
    
      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete criteria</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to permanently delete this referee?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={() => this.handleDelete(this.state.referee_id)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    
                                <table>
                                    <thead>
                                        <tr>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Email</th>
                                            <th>View</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                            {
                           referees != null && referees.map((employ) => 
                                    
                                    <tr key={employ.id}>
                                        <td>{employ.firstname}</td>
                                        <td>{employ.lastname}</td>
                                        <td>{employ.email}</td> 
                                   <td className="eyes"><Link to={`/refereeInfo/${employ.referee_id}`}><i class="far fa-eye eye"></i></Link></td>
                                    <td className='eyes'><Link><i onClick={() => this.handleOpen(employ)} class="fas fa-trash-alt"></i></Link></td>
                                     
                                </tr>   
                                )
                                 } 
                                        </tbody>
                </table>

                <div className="no-guarantor" style={{ display: referees == null || referees.length === 0 ? 'block' : 'none' }}>
                                <h6>Referee not available... </h6>
                            </div>
                            </div>     
                    )
                }
            }
           
    const mapStateToProps = (state) => {
       
    return {
        referees: state.referee.getReferees,
      
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
    
        getReferees: (referees) => dispatch(getReferees(referees)),
    deleteReferee: (referee) => dispatch(deleteReferee(referee)),
  
        
    }
    
}   

export default connect(mapStateToProps, mapDispatchToProps)(Referees);
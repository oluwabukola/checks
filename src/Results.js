import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getResults } from './store/actions/displayActions';
import { deleteResult } from './store/actions/deleteActions';
import toast from 'toasted-notes'; 
import 'toasted-notes/src/styles.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { Chart } from "react-google-charts";



class Results extends React.Component{
    constructor(props) {
        super(props);
       
        this.state = {
            show: false,
            result_id: "",
        }
    }
  async componentDidMount() {
        const data = this.props.id;
      
      await this.props.getResults(data);
    }

    handleOpen = (employ) => {
        this.setState({
            show: true,
            result_id: employ.result_id,
            
        });
    }
    handleClose = () => {
        this.setState({
        show: false
})
    }

    handleDelete = async (id) => {
   
    
        await this.props.deleteResult(id).then(datum => {
            
            this.handleClose();
          
            toast.notify('Result successfully deleted!');
            
                // this.props.history.push('/employerInfo')
            })
            .catch((error) => {
                console.error('Error:', error);
                
            });
    }
  
    
    
    render() {
        const {results} = this.props;
        
        return (
            <div className="table-cont">
                 <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete criteria</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to permanently delete this result?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={() => this.handleDelete(this.state.result_id)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
                                <table>
                                    <thead>
                                        <tr>
                                           {/* <th>Id</th>*/}
                                            <th>Institution</th>
                                        <th>Certificate Name</th>
                                            <th>Download</th>
                                            <th>View</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                            {
                            results != null && results.map((employ) => 
                                    
                        <tr key={employ.id}>
                         <td>{employ.institution}</td>
                         <td>{employ.CertificateName}</td>
                        <td className="download"><a target="_blank" download="name.jpg" href={`${employ.filepath}${employ.CertificateFile}`} ><i class="fas fa-cloud-download-alt" ></i></a></td> 
                                   
                         {/* <td className="download"><Link  to={`/${employ.filepath}${employ.CertificateFile}`} ><i class="fas fa-cloud-download-alt" ></i></Link></td> */}
                         <td className="eyes"><Link to={`/resultInfo/${employ.result_id}`}><i class="far fa-eye eye"></i></Link></td>
                         <td className='eyes'><Link><i onClick={() => this.handleOpen(employ)} class="fas fa-trash-alt"></i></Link></td>
                                 
                        </tr>   
                                )
                                 } 
                                        </tbody>
                </table>

                <div className="no-guarantor" style={{ display: results == null || results.length === 0 ? 'block' : 'none' }}>
                                <h6>Results not available... </h6>
                </div>
   
                            </div>     
                    )
                }
            }
           
    const mapStateToProps = (state) => {
 
    return {
        results: state.result.results,
        deleted: state.result.oneresult,
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
       
        getResults: (results) => dispatch(getResults(results)),
        deleteResult: (result) => dispatch(deleteResult(result)),
       
     
        
    }
}   

export default connect(mapStateToProps, mapDispatchToProps)(Results);
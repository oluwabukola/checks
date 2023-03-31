import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createdEmployee, updatedEmployee, searchBoxCandidate, updateCandidateSearch } from './store/actions/employeeActions';
import { deleteEmployee } from './store/actions/deleteActions';
import { displayEmployee } from './store/actions/displayActions';
import Nav from './Nav';
import toast from 'toasted-notes'; 
import 'toasted-notes/src/styles.css';
import ReactPaginate from 'react-paginate';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

let letters = RegExp(/^[A-Za-z]+$/);

class CreateEmployee extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            employee_id: "",
            search: '',
            completed: false,
            employed: "",
        }
    }
    
   componentDidMount() {
       this.props.createdEmployee();
       
    }

    handleSubmit = async(event) => {
        event.preventDefault();
        const { page } = this.props;
        let copiedPage = page;
        
        const data = {
            search: this.state.search,
        }
    
       await this.props.searchBoxCandidate(data).then(datum => {
           this.setState({
               loading: false,
           });
          
           copiedPage.data = datum.data;
        
           document.querySelector('.search-container').style.display = "none";
           document.querySelector('.return-button').style.display = "flex";

            return  this.props.updateCandidateSearch(copiedPage)
        //    if (datum.data.length == undefined) {
        //     toast.notify('Employee not found!');
        //    }
        
        })
            .catch((error) => {
                console.error('Error:', error);
            });
    
    }

    handleReturn = (event) => {
        event.preventDefault();
        this.props.createdEmployee();
        this.props.history.push('/createEmployee');
        document.querySelector('.search-container').style.display = "flex";
        document.querySelector('.return-button').style.display = "none";
        this.setState({
            search: "",
        })
    }

     handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
         switch (name) {
             case 'search': this.setState({
               search: letters.test(value) && value.length > 0 ? "" : 'minimum of 1 letters required'
            })
                break;
            // case 'search': this.state.search = letters.test(value) && value.length > 0
            //     ? "" : 'minimum of 1 letters required';
            //     break;
        }
        this.setState({ [name]: value });
    }
   
   
        handlePageClick = (event) => {
        
            const token = localStorage.getItem('token');
           
            const page = (event.selected) + 1;
        //    const response =
             fetch( `http://hotelanywhere.ng/background/api/employee?page=${page}`, {
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
                
                    this.props.updatedEmployee(data);
                  
                })
                .catch((error) => {
                    console.error('Error:', error);
                  });
    }
    
        handleOpen = (employ) => {
            this.setState({
                show: true,
                employee_id: employ.employee_id,
            });
        }
        handleClose = () => {
            this.setState({
            show: false
    })
    }
    
    handleDelete = (id) => {
        
        this.props.deleteEmployee(id).then(datum => {
            
            this.handleClose();
            toast.notify('Employee successfully deleted!');
             
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


    render() {
    
        const { page } = this.props;
        let pageCount = 0;
       if (page != null && page.data != null) {
           pageCount = Math.ceil(page.total / page.per_page)
        }
       else {
           pageCount = 0;
        }
                return (
            <div className="home-page">
                <Nav />
                <div className="table-cont2">
                <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete criteria</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to permanently delete this employee?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={() => this.handleDelete(this.state.employee_id)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
                    <h2>Create Employee</h2>
                    <div className='wrap'>
                    <button type="button" className="add-employee"><Link to="/EmployeeForm">Add Employee<i className="fas fa-plus"></i></Link></button>
                        <form className="search-container">
                            <input type="text" placeholder="search...."
                             name="search" value={this.state.search}
                             onChange={this.handleChange}/>
                            <button  onClick={this.handleSubmit}><i class="fas fa-search"></i></button>
                                </form>
                                <button className="return-button" onClick={this.handleReturn}><i class="fas fa-chevron-left"></i>Return</button>
                        </div>
                    <table>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Email</th>
                                <th>View</th> 
                                <th>Information</th>
                                <th >Delete</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                         {
                                page !== null && page.data !==null && page.data.map((employ) =>
                                    <tr key={employ.id}>
                                    <td>{employ.first_name}</td>
                                    <td>{employ.email}</td> 
                                      <td className='eyes'><Link to={`/employeeInfo/${employ.employee_id}`}><i class="far fa-eye eye"></i></Link></td>  
                                    <td className="eyes"><Link to={`/view/${employ.employee_id}`}><i class="fas fa-info-circle"></i></Link></td>
                                    <td className="eyes" ><i onClick={() => this.handleOpen(employ)} class="fas fa-trash-alt"></i></td>
                                    <td className="eyes"><Link to={`/update/${employ.employee_id}`}><i class="fas fa-pen-square"></i></Link></td>
                                    </tr>
                                )
                            } 
                            </tbody>
                            </table>
                            <div className="no-guarantor" style={{ display: page == null || page.data == null || page.data.length === 0 ? 'block' : 'none' }}>
                                <h6>Employee not available... </h6>
                            </div>
                    <div className="paginating">
                    <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
         onPageChange={this.handlePageClick}
            // breakClassName={'page-item'}
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

                </div>
                </div>
        );
}
}

const mapStateToProps = (state) => {
 
    return {
        page: state.employee.page,
        employed: state.employee.employed
        // employed: state.employee.displayEmployee
        
    }
}
const mapDispatchToProps = (dispatch) => {
    
    return {
        //  createdEmployee: (employee) => dispatch(createdEmployee(employee)),
        createdEmployee: (page) => dispatch(createdEmployee(page)),
        deleteEmployee: (employee) => dispatch(deleteEmployee(employee)),
        displayEmployee: (employee) => dispatch(displayEmployee(employee)),
        updatedEmployee: (data) => dispatch(updatedEmployee(data)),
        searchBoxCandidate: (candidateWord) => dispatch(searchBoxCandidate(candidateWord)),
        updateCandidateSearch: (data) => dispatch(updateCandidateSearch(data)),
     
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEmployee);
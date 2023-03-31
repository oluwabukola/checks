import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Nav from '../Nav';
import toast from 'toasted-notes'; 
import 'toasted-notes/src/styles.css';
import ReactPaginate from 'react-paginate';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import User from '../User';

import { displayCandidate, updatedVerification, searchBox, updateUnverifiedSearch } from '../store/actions/verificationAction';

let letters = RegExp(/^[A-Za-z]+$/);


class Verification extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // posts: [],
            completed: false,
            pageCount: 1,
            currentPage: 1,
            search:'',
            loading: false
        };
    }

    async componentDidMount() {
        await this.props.displayCandidate();
    }

    handleSearch = async (event) => {
        event.preventDefault();
        const {candidate} = this.props
        const data = {
            search: this.state.search,
        }
        let copiedCandidate = candidate;
        await this.props.searchBox(data).then(datum => {
           
        copiedCandidate.data = datum.data;
           document.querySelector('.search-container').style.display = "none";
            document.querySelector('.return-button').style.display = "flex";
            return  this.props.updateUnverifiedSearch(copiedCandidate)
       })
      
            .catch((error) => {
                console.error('Error:', error);
            });
    
    }
    handleReturn = (event) => {
        event.preventDefault();
        
        this.props.displayCandidate();
        this.props.history.push('/verification');
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
            case 'search': this.state.search = letters.test(value) && value.length > 0
                ? "" : 'minimum of 2 letters required';
                break;
        }
        this.setState({ [name]: value });
    }

    handlePageClick = (event) => {
        const token = localStorage.getItem('token');
        const page = (event.selected) + 1;
         
            const response = fetch( `http://hotelanywhere.ng/background/api/getallcandidatestobeverified?page=${page}`, {
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
        const { candidate } = this.props;
        const pageCount = Math.ceil(candidate.total / candidate.per_page);

        return (
            <div className="home-page">
                <Nav />
                <div className="table-cont2">
                    <h2>Employees</h2>
                    <div className='wrap'>
                    <div></div>
                        <form className="search-container">
                            <input type="text" placeholder="search...."
                             name="search" value={this.state.search}
                             onChange={this.handleChange}/>
                            <button  onClick={this.handleSearch}><i class="fas fa-search"></i></button>
                                </form>
                                <button className="return-button" onClick={this.handleReturn}><i class="fas fa-chevron-left"></i>Return</button>
                       
                        </div>
                <table>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>View</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                candidate.data != null && candidate.data.map((employ) =>
                                    <tr key ={employ.id}>
                                        <td>{employ.first_name}</td>
                                        <td>{ employ.last_name}</td>
                                        
                                        <td className="eyes"><Link to={`/employeeDetails/${employ.employee_id}`}><i class="far fa-eye eye"></i></Link></td>
                                        <td><ProgressBar variant="success"  label={`${employ.percentage}%`}animated now={`${employ.percentage}`} /></td>
                                        <td ><button className="verification-action" ><Link to={`/verify/${employ.employee_id}`}>Action</Link></button></td>
                    
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
        )
    }
}
const mapStateToProps = (state) => {
  
    return {
        candidate: state.verification.candidate,
        verif: state.verification.verif,
        employee: state.verification.oneEmployee,  
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        
        displayCandidate: (candidate) => dispatch(displayCandidate(candidate)),
        updatedVerification: (data) => dispatch(updatedVerification(data)),
        searchBox: (word) => dispatch(searchBox(word)),
        updateUnverifiedSearch: (data) => dispatch(updateUnverifiedSearch(data)),
      
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Verification);


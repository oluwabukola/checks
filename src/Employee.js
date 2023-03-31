import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import User from './User';
class Employee extends React.Component{
    render() {
        return (
            <div className="home-page">
                <Nav />
                
                <div className="rest">
                    {/* <User /> */}
                    <div className="region-name">
                    <h2>Osun Region</h2>
                    <button type="button"
                    className="back"
                    onClick={this.handleSubmit}>
                        <i class="fas fa-arrow-left"></i>Back</button>

                    </div>
                
                        <div className="search-container">
                            <input type="search" placeholder="search region"></input>
                            <div className="icon"><i class="fas fa-search"></i></div>
                        </div>
                 <table>
                        <thead>
                            <tr>
                            <th>S/N</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Location</th>
                            <th>Staff ID</th>
                            <th>Progress</th>
                            <th>Verify</th>
                            <th>Date updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Oluwabukola</td>
                                <td>Baiyewu</td>
                                <td>Osun</td>
                                 <td>rsc/2135674/tg</td>
                                <td><button type="button">progress</button></td>
                                <td><button type="button"><Link to='/verify'>verify</Link></button></td>
                                <td>1-03-2019</td>
                            </tr>
                            </tbody>
                    </table>
                    </div>
                    
            </div>
        )
    }
}
export default Employee;
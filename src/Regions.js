import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { displayRegion } from './store/actions/employeeActions';
import { getRegion } from './store/actions/displayActions';
import { deleteRegion } from './store/actions/deleteActions';
import Nav from './Nav';

import toast from 'toasted-notes'; 
import 'toasted-notes/src/styles.css';

class Regions extends React.Component{
    constructor(props) {
        super(props);
       
    }
    componentDidMount() {
      this.props.displayRegion();
      //console.log('display', this.props.displayRegion());
    }
    handleDelete = (id) => {
        console.log('deleting region', id);
    
        this.props.deleteRegion(id).then(datum => {
            toast.notify('Region successfully deeted!');
        console.log('Success:', datum)
        
                // this.props.history.push('/employerInfo')
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    render() {
        const { regionName } = this.props;
        console.log('region', regionName);
        
        return (
            <div className="home-page">
                <Nav/>
                <div className="rest">
                    <h1>Regions</h1>
                    
                   <button type="button" className="add"><Link to="/addregion">Add Region<i class="fas fa-plus"></i></Link> </button>
                    <table>
                        <thead>
                            <tr>
                            <th>Region</th>
                            <th>Region</th>
                            <th>Date Created</th>
                            <th>Edit</th>
                            <th>View</th>
                            <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                             regionName != null && regionName.map((regionName) =>
                                <tr key={regionName.id}>
                                         <td>{regionName.id}</td>
                                         <td>{regionName.name}</td>
                                         <td>{regionName.created_at.split('T')[0]}</td>
                                         
                                    <td className="eyes"><Link to={`/editRegion/${regionName.id}`}><i class="fas fa-pen-square"></i></Link></td>
                                    
                                     <td className="eyes"><Link to={`/regionInfo/${regionName.id}`}><i class="far fa-eye eye"></i></Link></td>
                                     <td className="eyes"><i onClick={() => this.handleDelete(regionName.id)} class="fas fa-trash-alt"></i></td>
                                     {/* <Link to="/employee"><i class="far fa-eye eye"></i></Link> */}
                                     </tr>
                                 )
                            }
                            </tbody>
                        </table>
                </div>
                </div>
                
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state.region.oneregion);
    return {
        regionName: state.region.regionName,
        deleted: state.region.oneregion
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        displayRegion: (regionName) => dispatch(displayRegion(regionName)),
        deleteRegion: (region) => dispatch(deleteRegion(region)),
        getRegion: (region) =>  dispatch(getRegion(region)),
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Regions);

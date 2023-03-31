import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getRegion } from './store/actions/displayActions';
import { displayRegion } from './store/actions/employeeActions';
import User from './User';


class RegionInfo extends React.Component{
    constructor(props) {
        super(props);
       
    }
    componentDidMount() {
         const data = this.props.match.params.id;
      
        this.props.getRegion(data) 
    }
    
    render() {
        const { region } = this.props;
      
        console.log('region info', region);
        
        const data = this.props.match.params.id;
        
     
        return (
            <div className="home-page">
                <div className="navi">
                    <ul>
                        <li><Link to='/home'><i className="fas fa-columns"></i>Home</Link></li>
                        <li><Link to='/regions'><i className="fas fa-compass"></i>Regions</Link> </li>
                        <li><Link to='/createEmployee'><i className="fas fa-compass regn"></i>Create Employee</Link> </li>
                        <li><i class="fas fa-sign-out-alt">Signout</i></li>
                    </ul>
                </div>
                <div className="rest">
                    <User />
                <div className="card">
                    <div className="content">
                        <div className="created"><h6>Region Name</h6></div>
                        <div className="created">{region.name}</div>
                    </div>
                    <hr/>
                    <div className="content">
                    <div className="button-update">
                            <div>Date Updated:</div>
                      </div>
                        <div className="button-update">
                            <button type="button"> <Link to={`/editRegion/${data}`}>Edit</Link></button>
                            <button type="button"> Verified</button>
                      </div>
                    </div>
                    </div>
                    </div>    
                </div>
                
        );
    }
}
const mapStateToProps = (state) => {
 
    return {
        region: state.region.oneregion,
      
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getRegion: (region) => dispatch(getRegion(region)),
       
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegionInfo);
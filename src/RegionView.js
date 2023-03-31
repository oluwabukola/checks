import React from 'react';
// import { TabContainer }from 'react-bootstrap';
import { Tabs, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import RegionInfo from './RegionInfo';
import Nav from './Nav';
import User from './User';

class RegionView extends React.Component{
    render() {
        const params = this.props.match.params;
        console.log(params.id);
        
        return (
            <div className="home-page">
                <User />
                <Nav />
              
                <div className="rest">
                    
                <Tabs defaultActiveKey="Region" id="uncontrolled-tab-example">
                <Tab eventKey="Region Information" title="Region">
                 <RegionInfo id={`${params.id}`} /> 
                        </Tab>
                    </Tabs>
                    </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        region: state.region.region
    }
}

export default connect(mapStateToProps)(RegionView);

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Modal from 'react-bootstrap/Modal';
const isVisible = "is-visible";
class Address extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            
        }
    }
    handleOpen = () => {
        this.setState({
            show: true
        });
}
    handleClose = () => {
        this.setState({
            show: false
        })
}
    render() {
        return(
            <div className="rest">
         <Modal show={this.state.show} onHide={this.handleClose}>
      <Modal.Header closeButton>
      </Modal.Header>
                    <Modal.Body>
                        <div className="vef">
         <div className="check"> <input type="checkbox" /> </div>
            <h5><span>V</span>erify</h5>
                            </div>
                    <div className="comment">
                        <textarea maxLength={50}  placeholder="comment.."/>
                    </div>
</Modal.Body>
                    <Modal.Footer>
                        <div className="verify-submission">
                        <button className="verify-submit"onClick={this.handleClose} >Done</button>
                        </div>
      </Modal.Footer>
                </Modal>
                <button className="verify-address" onClick={this.handleOpen}>Address</button>
                </div>
        );
    }
}
export default Address;
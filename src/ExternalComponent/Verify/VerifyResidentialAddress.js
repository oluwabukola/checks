import React, {useState, UseEffect} from 'react';
import { Link } from 'react-router-dom';
import { CircleLoader } from 'react-spinners';
import { css } from '@emotion/core';
import toast from 'toasted-notes'; 
import Modal from 'react-bootstrap/Modal';
import { useSelector, useDispatch } from 'react-redux';
import 'toasted-notes/src/styles.css';
import { VerifyResidential} from '../../store/LinkedInfo/Actions/verificationAction';
const loaderCss = css`
margin: 150px auto 10px auto;
border-color:white;
`

const VerifyResidentialAddress = ({show, handleClose, resident}) => {
    const dispatch = useDispatch();
    const [verified, setVerified] = useState(resident);

   const  handleVerification = async (event) => {
        event.preventDefault();
         const residential= {
            status: verified.status,
            comment: verified.comment,
         }
       const Id =  verified.employee_id;
       
        dispatch(VerifyResidential(residential, Id))
       
        handleClose();
        //  toast.notify('Referee successfully verified!');
    }

    const handleUpdate = (event) => {
        setVerified({
            ...verified,
            [event.target.name]: event.target.checked == true ? 1 : 0
        });
    }

    const handleChange = (event) => {
        setVerified({
            ...verified,
            [event.target.name]: event.target.value
        })
    }
    return (
        <>
    
           <Modal  show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                        <Modal.Header closeButton>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="vef">
                                <div className="check"> <input type="checkbox"
                                     name="status"
                                     defaultChecked={verified !== null && verified.status == "1" ? true : false}
                                     onChange={handleUpdate} /> </div>
                                <h5><span>V</span>erify</h5>
                            </div>
                            <div className="comment">
                                <textarea maxLength={50}
                                     name="comment"
                                   defaultValue={verified !==null && verified.comment} 
                                   placeholder='Add comment'
                                   onChange={handleChange} />
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <div className="verify-submission">
                                <button className="verify-submit"  onClick={handleVerification}>Done</button>
                            </div>
                        </Modal.Footer>
                    </Modal> 
        </>
    )
}

export default VerifyResidentialAddress;

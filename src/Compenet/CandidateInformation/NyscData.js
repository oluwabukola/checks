import React, {useState, useEffect} from 'react';
import {  FileInput, InputLabel } from '../VerificationForms/EmployeeForm/Employee.elements';
import {ResultTable, ResultTableHead, ResultRow, ResultHeading,
    ResultTableBody, ResultData,TableContainer,
     Note, Span, ResultFileContainer, AttachResult, Attachment, UploadedFileContainer,
    UploadedFile, ResultCover} from '../VerificationForms/ResultForm/ResultForm.elements';
   import {Container,TableInput, Form, VerificationContainer, VerifyButton,
VerificationStatus, Certain, Uncertainty} from './Information.elements';
   import { DisplayNysc } from '../../store/External/Actions/DisplayActions';
   import { useDispatch, useSelector } from 'react-redux';
   import { useParams } from 'react-router';
   import VerifyNyscCheck from '../../ExternalComponent/Verify/VerifyNyscCheck';
   import {MdVerifiedUser} from 'react-icons/md';
    import {GiUncertainty} from 'react-icons/gi';
    import {FcProcess} from 'react-icons/fc';


const NyscData = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
   const {employee_id} = useParams()
    const dispatch = useDispatch();
    
    useEffect(() =>{
        dispatch(DisplayNysc(employee_id));
    }, [] );
    const nysc= useSelector(state => state.externalDisplay.getNysc);
    const user = useSelector(state => state.login.login);
   
    return (
        <>
        {
            nysc !==null && 
       
            <Container>
               
                <Form>
                <VerificationStatus>
            {
            nysc.status === 1 ? 
            <Certain> <MdVerifiedUser /></Certain>:
            <Uncertainty> <GiUncertainty /> </Uncertainty> 
            }    
            </VerificationStatus>
                <TableContainer>
                <ResultTable>
                    <ResultTableHead>
                        <ResultRow>
                        <ResultHeading>Year of completion</ResultHeading>
                        <ResultHeading>Date</ResultHeading>
                        <ResultHeading>Time</ResultHeading>
                        </ResultRow>
                        </ResultTableHead>
                        <ResultTableBody>
                            <ResultRow>
                                    <ResultData>
                                    <TableInput type='text' value={nysc.year} 
                                    name='year'  readOnly={true} />
                                    </ResultData>
                                    <ResultData>
                                    <TableInput type='text' value={nysc.created_at.split('T')[0]} 
                                    name='year'  readOnly={true} />
                                    </ResultData>
                           
                                    <ResultData>
                                    <TableInput type='text' value={nysc.created_at.split('T')[1]}
                                    name='year' readOnly={true} />
                                    </ResultData>
                            </ResultRow>
                        </ResultTableBody>
                </ResultTable>
                </TableContainer>
                <ResultCover>
                <ResultFileContainer>
                    <AttachResult  >
                    <InputLabel for='resultUpload'>
                    <Attachment className="fas fa-paperclip"></Attachment> 
                    </InputLabel>
                    <FileInput type="file" id='resultUpload' name='result'   />
                    </AttachResult>
    
                        <UploadedFileContainer>
                        <UploadedFile className="fas fa-file-image"></UploadedFile>
                        </UploadedFileContainer>
                    
                </ResultFileContainer>

                {user !== null || user.user !==null && user.user.user_type =='internal' ?
                     <VerificationContainer>
                    <VerifyButton type='button' onClick={handleShow}><FcProcess />Verify</VerifyButton>
                    <VerifyNyscCheck  show={show} nysc={nysc} handleClose={handleClose} />
                    </VerificationContainer> : ''
                    }

                {/* <VerificationContainer>
                    <VerifyButton type='button' className="fas fa-check-double"  onClick={handleShow}>Verify</VerifyButton>
                    <VerifyNyscCheck show={show} nysc={nysc} handleClose={handleClose}/>
                    </VerificationContainer> */}
                </ResultCover>
                </Form>
            </Container>
          }
        </>
    )
}

export default NyscData

import React, {useState, useEffect} from 'react';
import { FileInput, InputLabel } from '../VerificationForms/EmployeeForm/Employee.elements'
import {ResultTable, ResultTableHead, ResultRow, ResultHeading,
ResultTableBody, ResultData,TableContainer,
 ResultFileContainer, AttachResult, Attachment, UploadedFileContainer,
UploadedFile, ResultCover} from '../VerificationForms/ResultForm/ResultForm.elements'
import {Container, Content, TableInput, VerificationContainer, VerifyButton,
VerificationStatus, Uncertainty, Certain} from './Information.elements';
import { DisplayEducationalCheck } from '../../store/External/Actions/DisplayActions';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import VerifyEducationalCheck from '../../ExternalComponent/Verify/VerifyEducationalCheck';
import {FcProcess} from 'react-icons/fc';
import {MdVerifiedUser} from 'react-icons/md';
    import {GiUncertainty} from 'react-icons/gi';

const ResultsData = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const   {employee_id } = useParams();
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(DisplayEducationalCheck(employee_id));
    }, [] );
    const edu =  useSelector(state => state.externalDisplay.getEducationalCheck);
    const user = useSelector(state => state.login.login);


    return (
        <>
            <Container>
                { edu !==null && 
                <Content>
                    
                <TableContainer>
                <VerificationStatus>
            {edu.status == 1 ?
            <Certain> <MdVerifiedUser /> </Certain> :
            <Uncertainty><GiUncertainty /></Uncertainty > 
             }    
            </VerificationStatus>
                <ResultTable>
                    <ResultTableHead>
                        <ResultRow>
                        <ResultHeading >Qualification</ResultHeading>
                        <ResultHeading colSpan={2}>Name of School</ResultHeading>
                        <ResultHeading>Grade</ResultHeading>
                        <ResultHeading>Year of completion</ResultHeading>
                        <ResultHeading>Date</ResultHeading>
                        <ResultHeading>Time</ResultHeading>
                        </ResultRow>
                        </ResultTableHead>
                        <ResultTableBody>
                            <ResultRow>
                                <ResultData >
                                    <TableInput type='text' 
                                    name='educationalBackground'
                                    value={edu.educational_background}
                                    readOnly = {true} /> 
                                    </ResultData>
                                   
                                <ResultData colSpan={2}>
                                    <TableInput type='text' name='schoolName' 
                                    value={edu.name_of_school}
                                    readOnly = {true}/> 
                                    </ResultData>
                                  
                                    <ResultData>
                                    <TableInput type='text' value={edu.qualification}
                                    readOnly = {true} name='grade' />
                                    </ResultData>
                                    <ResultData>
                                    <TableInput type='text' name='year'
                                    value={edu.year}   readOnly = {true}/>
                                    </ResultData>

                                    <ResultData>
                                    <TableInput type='text' readOnly = {true}
                                    value={edu.created_at.split('T')[0]}   />
                                    </ResultData> 

                                    <ResultData>
                                    <TableInput type='text' name='year'
                                    value={edu.created_at.split('T')[1]}   readOnly = {true}/>
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
                    <FileInput type="file" id='resultUpload' name='result'  />
                    </AttachResult>
                    
                        <UploadedFileContainer>
                        <UploadedFile className="fas fa-file-image"></UploadedFile>
                        </UploadedFileContainer>
                    
                </ResultFileContainer>

                {user !== null || user.user !==null && user.user.user_type =='internal' ?
                     <VerificationContainer>
                    <VerifyButton type='button' onClick={handleShow}><FcProcess />Verify</VerifyButton>
                    <VerifyEducationalCheck  show={show} edu={edu} handleClose={handleClose}/>
                    </VerificationContainer> : ''
                    }
                {/* <VerificationContainer>
                    <VerifyButton type='button'  onClick={handleShow}> <FcProcess />Verify</VerifyButton>
                    <VerifyEducationalCheck show={show} edu={edu} handleClose={handleClose}/>
                    </VerificationContainer> */}
                </ResultCover> 
                          
               </Content>
               }
            
            </Container>
          
        </>
    )
}

export default ResultsData

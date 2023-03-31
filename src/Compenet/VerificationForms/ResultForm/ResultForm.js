import React, {useState} from 'react';
import { Container, ValidateError, FileInput, InputLabel } from '../EmployeeForm/Employee.elements';
import {ResultTable, ResultTableHead, ResultRow, ResultHeading,
ResultTableBody, ResultData, TableInput, TableContainer, AddResult,
 Content, Note, Span, ResultFileContainer, AttachResult, Attachment, UploadedFileContainer,
UploadedFile, ResultCover} from './ResultForm.elements';
    import { Rule } from '../../VerificationType/VerificationType.elements';
    import {  Formik} from 'formik';
    import { ResultChecks } from '../../../store/External/Actions/FormActions';
import { ResultSchema } from '../ValidatingInput/ValidatingInput';
import { useDispatch,useSelector } from 'react-redux';
import { useParams } from 'react-router';

const ResultForm = () => {

    const [result, setResult] =useState(null);
    const[passport, setPassport] = useState(null);
    const dispatch = useDispatch();
    const {order_id, company_id, employee_id } = useParams();
    
    const resultHandler = (e) => {
        const reader = new FileReader();
        let file = e.target.files[0];
        console.log(file);
        reader.onloadend = () => {
            setResult(file);
        };
        reader.readAsDataURL(file);
        console.log('result ', file)
    }
  
    return (
        <>
          <Formik
        initialValues={{educationalBackground: '', schoolName: '', grade:'', year: '' }}
        validationSchema = {ResultSchema}
        onSubmit={(values => {
        const checks ={
            employee_id:employee_id,
            order_id: order_id,
            company_id: company_id,
            educational_background: values.educationalBackground,
            name_of_school: values.schoolName,
            qualification: values.grade,
            year: values.year,
            certificate_image:result.name
        }
        dispatch(ResultChecks(checks))
        // console.log('checks', checks)
        })
          }

          render={({
            touched,
            errors,
            values,
            handleChange,
            handleBlur,
            handleSubmit
          }) => (
            <Container>
                <Content>
                <TableContainer>
                <ResultTable>
                    <ResultTableHead>
                        <ResultRow>
                        <ResultHeading >Educational Background</ResultHeading>
                        <ResultHeading colSpan={2}>Name of School</ResultHeading>
                        <ResultHeading>Grade</ResultHeading>
                        <ResultHeading>Year of completion</ResultHeading>
                        </ResultRow>
                        </ResultTableHead>
                        <ResultTableBody>
                            <ResultRow>
                                <ResultData >
                                    <TableInput type='text' placeholder='please enter your qualification'
                                    name='educationalBackground'/>
                                     {errors.educationalBackground  && <ValidateError>{errors.educationalBackground}</ValidateError>} 
                                    </ResultData>
                                   
                                <ResultData colSpan={2}>
                                    <TableInput type='text' placeholder='Full Name(no abbreviation)' 
                                    name='schoolName' />
                                      {errors.schoolName  && <ValidateError>{errors.schoolName}</ValidateError>} 
                                    </ResultData>
                                  
                                    <ResultData>
                                    <TableInput type='text' placeholder='First class/Upper/Lower' 
                                    name='grade'/>
                                    </ResultData>
                                    {errors.grade && <ValidateError>{errors.grade}</ValidateError>} 
                                    <ResultData>
                                    <TableInput type='text' placeholder='year' name='year' />
                                    </ResultData>
                                    {errors.year  && <ValidateError>{errors.year}</ValidateError>} 
                            </ResultRow>
                        </ResultTableBody>
                </ResultTable>
                </TableContainer>
               
                <Note>NOTE: <Span>Please attach the photocopy of the result</Span></Note>
                <ResultCover>

                <ResultFileContainer>
                    <AttachResult  >
                    <InputLabel for='resultUpload'>
                    <Attachment className="fas fa-paperclip"></Attachment> 
                    </InputLabel>
                    <FileInput type="file" id='resultUpload' name='result' onChange={resultHandler}  />
                    </AttachResult>
                    {
                       result !== null &&
                        <UploadedFileContainer>
                        <UploadedFile className="fas fa-file-image"></UploadedFile>
                        </UploadedFileContainer>
                    }
                       
                </ResultFileContainer>
                <AddResult type='submit' onSubmit={handleSubmit}>Add</AddResult>
                </ResultCover>           
                </Content>
            </Container>
          )}
             />
        </>
    )
}

export default ResultForm

import React, {useState} from 'react';
import { Container, FileInput, InputLabel } from '../EmployeeForm/Employee.elements';
import {ResultTable, ResultTableHead, ResultRow, ResultHeading,
    ResultTableBody, ResultData, TableInput, TableContainer, AddResult,
     Content, Note, Span, ResultFileContainer, AttachResult, Attachment, UploadedFileContainer,
    UploadedFile, ResultCover} from '../ResultForm/ResultForm.elements';
import { FormikForm2, ValidateError
   } from '../EmployeeForm/Employee.elements';
   import {  Formik} from 'formik';
   import {nyscSchema } from '../ValidatingInput/ValidatingInput';
   import { useDispatch, useSelector } from 'react-redux';
   import { NyscResult } from '../../../store/External/Actions/FormActions';
   import { useParams } from 'react-router';


const Nysc = () => {
    const dispatch = useDispatch();
    const [resultImage, setResultImage] =useState(null);
    const {order_id, company_id, employee_id } = useParams();

    const fileHandler = (e) => {
        const reader = new FileReader();
        let file = e.target.files[0];
        console.log(file);
        reader.onloadend = () => {
            setResultImage(file);
        };
        reader.readAsDataURL(file);
       
    }
    
    return (
        <>
        <Formik
        initialValues={{ year: '', 
      }}
        validationSchema = {nyscSchema}
        onSubmit={(values => {
           
            const data = {
                employee_id: employee_id,
                 order_id: order_id,
                 company_id: company_id, 
                 certificate_image: resultImage.name,
                 year: values.year,
            }
            
             dispatch(NyscResult(data));
        
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
                <FormikForm2>
                <TableContainer>
                <ResultTable>
                    <ResultTableHead>
                        <ResultRow>
                       
                        <ResultHeading>Year of completion</ResultHeading>
                        </ResultRow>
                        </ResultTableHead>
                        <ResultTableBody>
                            <ResultRow>
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
                    <InputLabel for='nyscUpload'>
                    <Attachment className="fas fa-paperclip"></Attachment> 
                    </InputLabel>
                    <FileInput type="file" id='nyscUpload' name='nysc' onChange={fileHandler}  />
                    </AttachResult>
                    {
                        resultImage !== null &&
                        <UploadedFileContainer>
                        <UploadedFile className="fas fa-file-image"></UploadedFile>
                        </UploadedFileContainer>
                    }
                       
                </ResultFileContainer>
                <AddResult type='submit' onSubmit={handleSubmit}>Add</AddResult>
                </ResultCover>
                </FormikForm2>
            </Container>
             )
            }
        />
        </>
    )
}

export default Nysc

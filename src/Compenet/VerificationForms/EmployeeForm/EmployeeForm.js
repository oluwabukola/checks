import React, {useState} from 'react'; 
import { Container, PassportPhotograph, 
  PassportContainer, FileInput,
 InputLabel, Images, PassportImage, PassportImage2, Button,  FormikForm2,
 ValidateError, FormText, FormLink, UploadForm,UploadText, Camera,} from './Employee.elements';
 import {NameContainer, FormInput2, FirstLabel, FormFields
  } from './Employee.elements';
import { Rule } from '../../VerificationType/VerificationType.elements';
import { Candidates } from '../../../store/External/Actions/FormActions';
import { useDispatch,useSelector } from 'react-redux';
import {  Formik} from 'formik';
import { BasicInfoSchema } from '../ValidatingInput/ValidatingInput';
import {Signature,SignatureTag, InputLabel2, Tag} from './Employee.elements';
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { CREATE_CANDIDATE } from '../../../store/External/Actions/ActionTypes';
import { useRef } from "react";
import {ImImages} from 'react-icons/im';
import {FcMultipleCameras} from 'react-icons/fc';
import {FcSignature} from 'react-icons/fc';


const EmployeeForm = () => {
    const[passport, setPassport] = useState(null);
    const [signature, setSignature] = useState(null);
    const [select, setSelected] = useState(null);
    const [signatureSelected, setSignatureSelected] = useState(null)
    
    const { link} = useParams();
    const Order = useSelector(state =>  state.externalVerification.Order)
    let order = Order!== null && Order.data !== null && Order.data.data.id;
    const employ = useSelector(state => state.externalForm.createEmployee);
    
    const dispatch = useDispatch();
    let history = useHistory();
    const fileHandler = (e) => {
        const reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            setSelected(file);
          setPassport(reader.result);
        };
        reader.readAsDataURL(file);
    }
   
    const signatureHandler = (e) => {
        const reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
          setSignatureSelected(file);
          setSignature(reader.result);
        };
        reader.readAsDataURL(file);
    }
    return (
        <>
         <Formik
        initialValues={{ firstName: '', otherName: '',  lastName:'', gender: '', signature: '',
         phoneNumber:'', emailAddress: '' }}
        validationSchema = {BasicInfoSchema}
        onSubmit={  (values) => {
        
            let data ={
                image: select.name,
                first_name: values.firstName,
                other_name: values.otherName,
                last_name: values.lastName,
                gender: values.gender,
                phone_number:values.phoneNumber,
                email: values.emailAddress,
                signature: signatureSelected.name,
                password: values.password
            }
           
            dispatch(Candidates( data, link))
            .then(data =>{
              const ploy = data.data.data
              if(data.status == 200){
                dispatch({type: CREATE_CANDIDATE,  payload:ploy})
                history.push('/candidatesLogin')
                
              }
           })
        }
          }
          render={({
            touched,
            errors,
            values,
            handleChange,
            setFieldValue,
            handleBlur,
            handleSubmit
          }) => (
            
        <Container>
          
            <FormikForm2 >
              <FormText> 
                Already registered? <FormLink to={'/candidatesLogin'}>Login</FormLink> 
              </FormText>
                <PassportContainer>
                        <PassportPhotograph >
                    {
                        passport ?
                          <PassportImage src={passport}  /> 
                          :  (
                              <ImImages/>
                         )
                    }
                    </PassportPhotograph>
                      {/* {errors.pass && touched.pass ? <ValidateError>{errors.pass}</ValidateError>
                      : null }  */}
                      <UploadForm>
                        <UploadText>Upload image</UploadText>
                        <Camera>
                       <InputLabel for='passport' >
                         <FcMultipleCameras />
                       <FileInput type="file" id='passport' name='passport' onChange={ fileHandler}  /> 
                         </InputLabel>
                         </Camera>
                         </UploadForm>

                      
                         </PassportContainer>
                <FormFields>
                   <NameContainer>
                    <FirstLabel>First Name</FirstLabel>
                    <FormInput2  type='text' name='firstName' 
                     placeholder='First Name'   
                    />
                      {errors.firstName && <ValidateError>{errors.firstName}</ValidateError>} 
                    </NameContainer>
                  
                    <NameContainer>
                    <FirstLabel>Other Name</FirstLabel>
                    <FormInput2  type='text' name='otherName' 
                     placeholder='Other Name'  />
                {errors.otherName  && <ValidateError>{errors.otherName}</ValidateError>} 
                    </NameContainer> 

                </FormFields>
                <FormFields>
                   <NameContainer>
                   <FirstLabel>Last Name</FirstLabel>
                    <FormInput2  type='text' name='lastName' 
                     placeholder='Other Name'  />
                {errors.lastName  && <ValidateError>{errors.lastName}</ValidateError>} 
                   </NameContainer>

                   <NameContainer>
                    <FirstLabel >Gender</FirstLabel>
                    <FormInput2 type='text' placeholder='Gender(male/female)' 
                     name='gender'  
                     />
                    {errors.gender  && <ValidateError>{errors.gender}</ValidateError>} 
                     </NameContainer>
                   
                </FormFields>
                <FormFields>
                    <NameContainer>
                    <FirstLabel>phone Number</FirstLabel>
                    <FormInput2  type='text' placeholder='Eneter your personal phone number' 
                    name='phoneNumber'  
                     />
                    {errors.phoneNumber  && <ValidateError>{errors.phoneNumber}</ValidateError>} 
                    </NameContainer>
                  
                    <NameContainer>
                    <FirstLabel>Email Address</FirstLabel>
                    <FormInput2 className='email-input'
                    type='email' placeholder='Eneter your email address' 
                    name='emailAddress'  
                     />
                    {errors.emailAddress  && <ValidateError>{errors.emailAddress}</ValidateError>} 
                     </NameContainer>
                 
                </FormFields>
                
                        <FormFields>
                        <NameContainer > 
                        <FirstLabel>Upload Signature</FirstLabel>
                        <div>

                           <SignatureTag> 
                           { signature ? 
                          <PassportImage2 src={signature} />  :
                       <FcSignature />
                      }
                        </SignatureTag>
                       <div>
                           <InputLabel2 for='signature' >
                           <FcMultipleCameras />
                           <Signature type='file' name='signature' id='signature'  onChange={signatureHandler}/>
                      
                         </InputLabel2>
                       </div>
                       </div>
                    </NameContainer>
                    <NameContainer>
                    <FirstLabel>Password</FirstLabel>
                    <FormInput2 
                    type='password' placeholder='Eneter your password' 
                    name='password'  className='email-input'
                     />
                    {/* {errors.emailAddress  && <ValidateError>{errors.emailAddress}</ValidateError>}  */}
                     </NameContainer>
                    </FormFields>
                <Button type="submit" onSubmit={handleSubmit}>Submit</Button>
            </FormikForm2>
            </Container> 
            )
                }
            />
        </>
    )
}

export default EmployeeForm

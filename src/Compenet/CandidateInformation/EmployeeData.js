import React, {useState, useEffect} from 'react'; 
import { Container, PassportPhotograph, 
  PassportContainer, PassportImage
}  from '../VerificationForms/EmployeeForm/Employee.elements';
 import {NameContainer, FormInput2, FirstLabel
  } from '../VerificationForms/EmployeeForm/Employee.elements'
import {Form, FormRowField, FormField, Input, Signature} from './Information.elements';
import { useDispatch,useSelector } from 'react-redux';
import {SignatureTag, InputLabel2, Tag} from '../VerificationForms/EmployeeForm/Employee.elements';
import { useParams, useHistory } from "react-router-dom";
import { DisplayCandidate } from '../../store/External/Actions/DisplayActions';


const EmployeeData = () => {

  const   {employee_id } = useParams();

  const dispatch = useDispatch()
  useEffect(() =>{
     dispatch(DisplayCandidate(employee_id));
  }, [] );

  const employee = useSelector(state => state.externalDisplay.oneEmployee);
  console.log('Employeee', employee);
    
    return (
        <>
        <Container>
          {
         
        employee!== null &&  <Form>
               <PassportContainer>
                    <PassportPhotograph >
                     <PassportImage  src='' alt='passport' /> 
                      </PassportPhotograph>
                         </PassportContainer>
                <FormRowField>
                <NameContainer>
                    <FirstLabel>First Name</FirstLabel>
                    <Input  type='text' name='firstName' 
                    readOnly = {true} value={employee.first_name}  
                    />
                        </NameContainer>
                    <NameContainer>
                    <FirstLabel>Other Name</FirstLabel>
                    <Input  type='text' name='otherName' 
                    readOnly={true} value={employee.other_name}  />
                    </NameContainer> 
                </FormRowField>
                <FormRowField>
                   <NameContainer>
                   <FirstLabel>Last Name</FirstLabel>
                    <Input  type='text' name='lastName' 
                     readOnly = {true} value={employee.last_name}  />
                   </NameContainer>
                  
                   <NameContainer>
                    <FirstLabel >Gender</FirstLabel>
                    <Input type='text' value={employee.gender}
                     name='gender'  readOnly = {true}
                     />
                     </NameContainer>
                </FormRowField>
                <FormRowField>
                    <NameContainer>
                    <FirstLabel>phone Number</FirstLabel>
                    <Input  type='text' readOnly = {true} 
                    name='phoneNumber' value={employee.phone_number} 
                     />
                    </NameContainer>
                  
                    <NameContainer>
                    <FirstLabel>Email Address</FirstLabel>
                    <Input className='email-input'
                    type='email'  readOnly = {true}
                    name='emailAddress' value={employee.email}  
                     />
                
                     </NameContainer>
                 
                </FormRowField>

                <FormRowField>
                    <NameContainer>
                    <FirstLabel>Date</FirstLabel>
                    <Input  type='text' name='date' value={employee.created_at.split('T')[0]}
                    readOnly={true}/>
                    </NameContainer>
                  
                    <NameContainer>
                    <FirstLabel>Time</FirstLabel>
                    <Input type='text' name='time' value={employee.created_at.split('T')[1]} 
                    readOnly={true}/>
                     </NameContainer>
                 
                </FormRowField>
                
                        <FormField>
                        <NameContainer > 
                        <FirstLabel>Signature</FirstLabel>
                        <SignatureTag >
                        <InputLabel2 for='signature' >
                            <Tag className="fas fa-signature" />                       
                             </InputLabel2>
                        </SignatureTag>
                        <Signature type='file' name='signature' id='signature'  />
                    </NameContainer>
                    </FormField>
               
            </Form>
             }
            </Container>  
           
        </>
    )
}

export default EmployeeData

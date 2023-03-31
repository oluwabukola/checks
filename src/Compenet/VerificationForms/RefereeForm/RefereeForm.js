import React, {useState} from 'react';
import { Container, FormikForm2, FormField, FormLabel, FormInput, FormRowField, FormRowLabel,
SubTitle, SubTitleText, Button, FormRowContainer } from '../EmployeeForm/Employee.elements';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import {  Formik} from 'formik';
import { RefereeSchema } from '../ValidatingInput/ValidatingInput';
import { Rule } from '../../VerificationType/VerificationType.elements';
import { Referee } from '../../../store/External/Actions/FormActions';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
const RefereeForm = () => {
    const [country, setCountry] = useState('');
    const [region, setRegion] = useState('');
    const {order_id, company_id, employee_id } = useParams();

    const SelectCountry = (val) => {
        setCountry(val);
    }

    const SelectRegion = (val) => {
        
        setRegion(val);
    }
   const dispatch = useDispatch();

    return (
        <>
        <Formik
        initialValues={{ fullName: '', officeAddress: '',  occupation:'', 
        phoneNumber: '', emailAddress: '' }}
        validationSchema = {RefereeSchema}

        onSubmit={(values => {
          const data ={
            employee_id: employee_id,
            order_id: order_id,
             company_id: company_id, 
              full_name: values.fullName,
              office_address: values.officeAddress,
              phone: values.phoneNumber,
              occupation: values.occupation,
              email: values.emailAddress

          }
          dispatch(Referee(data));
          
        
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
                   
        <SubTitle>
                    <SubTitleText>Referee</SubTitleText>
                    <Rule />
                    </SubTitle>

               <FormField>
                    <FormLabel>Full Name (Surname First)</FormLabel>
                    <FormInput  type='text' placeholder="Referee's full name"
                    name='fullName'/>
                </FormField>

                <FormField>
                    <FormLabel>Office Address</FormLabel>
                    <FormInput  type='text' placeholder='Office Address'
                    name='officeAddress'/>
                </FormField>

                <FormRowField>
                    <FormRowContainer> 
                    <FormLabel>Land Mark</FormLabel>
                    <CountryDropdown className={"country-input"}
                        value={country}
                        onChange={(val) => SelectCountry(val)} /> 
                    {/* <FormRowInput  type='text' placeholder='Land mark'/> */}
                    </FormRowContainer>
                    
                    <FormRowContainer>
                    <FormRowLabel>State</FormRowLabel>
                    <RegionDropdown className={"country-input"}
                        country={country}
                         value={region}
                         onChange={(val) => SelectRegion(val)} />
                         </FormRowContainer>
                    </FormRowField>

                <FormField>
                    <FormLabel>Telephone</FormLabel>
                    <FormInput  type='text' placeholder="Referee's phone number"
                    name='phoneNumber'/>
                </FormField>

                <FormField>
                    <FormLabel>Occupation</FormLabel>
                    <FormInput  type='text' placeholder="Referee's occupation"
                    name='occupation'/>
                </FormField>

                <FormField>
                    <FormLabel>E-mail Address</FormLabel>
                    <FormInput  type='text' placeholder="Referee's email address"
                    name='emailAddress' />
                </FormField>
                <Button type="submit" onSubmit={handleSubmit}>Submit</Button>
               </FormikForm2>
               </Container> 
                )
            }
        />
        </>
    )
}

export default RefereeForm

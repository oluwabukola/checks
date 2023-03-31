import React, {useState} from 'react';
import { Container, FormikForm2, FormField,FormLabel,FormInput,
FormRowField, FormRowLabel, FormRowInput2, FormRowInput, FormRowContainer,
SubTitle, SubTitleText, Button } from '../EmployeeForm/Employee.elements';
import { Rule } from '../../VerificationType/VerificationType.elements';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import {  Formik} from 'formik';
import { PreviousEmployerSchema } from '../ValidatingInput/ValidatingInput';
import { PreviousEmployers } from '../../../store/External/Actions/FormActions';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

const PreviousEmployer = () => {

    const [country, setCountry] = useState('');
    const [region, setRegion] = useState('');
    const dispatch = useDispatch();
    const {order_id, company_id, employee_id } = useParams();
    const SelectCountry = (val) => {
        setCountry(val);
    }

    const SelectRegion = (val) => {
        setRegion(val);
    }

    return (
        <>
         <Formik
        initialValues={{ endDate: '', startDate: '', companyName:'', companyAddress: '',
        country: '', state: '', companyEmail: '', postHeld:'', salary: '', reasonLeaving: '',
         outstandingLoan: '', paymentMethod: ''}}
        validationSchema = {PreviousEmployerSchema}
        onSubmit={(values => {
         
            let previousEmployer = {
                employee_id: employee_id,
                order_id: order_id,
                company_id: company_id,
                start_date: values.startDate,
                end_date: values.endDate,
                company_name: values.companyName,
                company_address: values.companyAddress,
                company_email: values.companyEmail,
                salary: values.salary,
                post_held: values.postHeld,
                reason_for_leaving: values.reasonLeaving,
                outstanding_loan: values.outstandingLoan, 
                method_of_payment: values.paymentMethod
            }

            dispatch(PreviousEmployers(previousEmployer))
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
                    <SubTitleText>Previous Employer</SubTitleText>
                    <Rule />
                    </SubTitle>
                <FormRowField>
                    <FormRowContainer>
                    <FormLabel>Start Date</FormLabel>
                    <FormRowInput  type='date' placeholder='Enter start date'
                    name='startDate'/>
                    </FormRowContainer>

                    <FormRowContainer>
                    <FormRowLabel>End Date</FormRowLabel>
                    <FormRowInput2  type='date' placeholder='Enter end date'
                    name='endDate' />
                    </FormRowContainer>
                </FormRowField>
                <FormField>
                    <FormLabel>Name of company</FormLabel>
                    <FormInput  type='text' placeholder="Enter company's name"
                    name='companyName'/>
                </FormField>

                <FormField>
                    <FormLabel>company's Address</FormLabel>
                    <FormInput  type='text' placeholder="Enter company's address"
                    name='companyAddress'/>
                </FormField>

                <FormRowField>
                    <FormRowContainer>
                    <FormLabel>Land Mark</FormLabel>
                    <CountryDropdown className={"country-input"}
                        name='country'
                        value={country}
                        onChange={(val) => SelectCountry(val)} /> 
                </FormRowContainer>

                <FormRowContainer>
                    <FormRowLabel>State</FormRowLabel>
                    <RegionDropdown className={"country-input"}
                        name='state'
                        country={country}
                         value={region}
                         onChange={(val) => SelectRegion(val)} />
                    </FormRowContainer>
                </FormRowField>

                <FormField>
                    <FormLabel>E-mail address (company)</FormLabel>
                    <FormInput type='text' placeholder='Enter your email address'
                    name='companyEmail'/>
                </FormField>
                <FormField>
                    <FormLabel>Post Held</FormLabel>
                    <FormInput  type='text' placeholder='Post Held'
                    name='postHeld'/>
                </FormField>

                <FormField>
                    <FormLabel>Salary</FormLabel>
                    <FormInput  type='text' placeholder='Enter your salary'
                    name='salary'/>
                </FormField>
                <FormField>
                    <FormLabel>Reson for leaving</FormLabel>
                    <FormInput  type='text' placeholder='Reason for leaving'
                    name='reasonLeaving'/>
                </FormField>

                <FormField>
                    <FormLabel>Any Outstanding Loan</FormLabel>
                    <FormInput  type='text' placeholder='Yes or No'
                    name='outstandingLoan'/>
                </FormField>
                <FormField>
                    <FormLabel>Method of Payment</FormLabel>
                    <FormInput  type='text' placeholder='Mehod of payment'
                    name='paymentMethod'/>
                </FormField>
                <Button type="submit" onSubmit={handleSubmit}>Submit</Button>
        </FormikForm2>
        </Container>

          )}
           /> 
        </>
    )
}

export default PreviousEmployer

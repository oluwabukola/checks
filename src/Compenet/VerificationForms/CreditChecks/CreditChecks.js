import React, {useState} from 'react';
import { Container,FormikForm2, FormField,FormLabel,
    FormInput, SubTitle, Button,SubTitleText } from '../EmployeeForm/Employee.elements';
    import { Rule } from '../../VerificationType/VerificationType.elements';
    import {  Formik} from 'formik';
    import { CreditCheckSchema } from '../ValidatingInput/ValidatingInput';
    import { CreditCheck } from '../../../store/External/Actions/FormActions';
    import { useDispatch, useSelector } from 'react-redux';
    import { useParams } from 'react-router';

const CreditChecks = () => {
    const dispatch = useDispatch();
    const {order_id, company_id, employee_id } = useParams();
    return (
        <>
        <Formik
        initialValues={{ phoneNumber: '', bvn: ''
         }}
        validationSchema = {CreditCheckSchema }
        onSubmit={(values => {
            console.log('credit check')
             const data ={
                 employee_id:employee_id,
                 order_id: order_id,
                 company_id: company_id,
                //  phoneNumber: values.phoneNumber,
                 bvn: values.bvn
             }
             dispatch(CreditCheck(data))
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
                    <SubTitleText>Credit Checks</SubTitleText>
                    <Rule />
                    </SubTitle>
                {/* <FormField>
                    <FormLabel>Phone Number</FormLabel>
                    <FormInput type='text' placeholder='Enter phone number'
                    name='phoneNumber'/>
                </FormField> */}

                <FormField>
                    <FormLabel>BVN</FormLabel>
                    <FormInput type='text' placeholder='Enter BVN number' 
                    name='bvn'/>
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

export default CreditChecks

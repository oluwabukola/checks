import React, {useState} from 'react';
import { Container,Button, FormInput, SubTitle, FormikForm,
     FormField,FormRowLabel, FormRowField, SubTitleText, ValidateError,
     FormInputContainer } from '../EmployeeForm/Employee.elements';
     import { FormLabel,
Tag} from './ResidentialAddress.elements';
    import { Rule } from '../../VerificationType/VerificationType.elements';
    import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
    import {  Formik} from 'formik';
    import { useParams } from 'react-router';
    import { useDispatch,useSelector } from 'react-redux';
    import { ResidentialSchema } from '../ValidatingInput/ValidatingInput';
    import { residentialAddress } from '../../../store/External/Actions/FormActions';
const ResidentialAddress = () => {
    
    const dispatch = useDispatch();
    const {order_id, company_id, employee_id } = useParams();
    
    return (
        <>
          <Formik
        initialValues={{ address: '', busStop: '', country:'', region: '' }}
        validationSchema = {ResidentialSchema}
        onSubmit={(values => {
        const add = {
            employee_id: employee_id,
            order_id: order_id,
            company_id: company_id,
            address: values.address,
            nearest_bus_stop: values.busStop,
            state: values.region
        }
        dispatch(residentialAddress(add))
        
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
            <FormikForm>
            <SubTitle>
                    <SubTitleText>Residential Address</SubTitleText>
                    <Rule />
                    </SubTitle>
            <FormField>
            <FormInputContainer>
                    <FormLabel>Residential Address</FormLabel>
                    <FormInput type='text' placeholder='Residential Address' 
                    name='address'/>
                </FormInputContainer>
                </FormField>

                <FormField>
                <FormInputContainer>
                    <FormLabel>Nearest B/stop</FormLabel>
                    <FormInput type='text' placeholder='Nearest B/stop' 
                    name='busStop'/>
                    </FormInputContainer>
                </FormField>
                <FormRowField>
                    <FormLabel>Land Mark</FormLabel>
                    <CountryDropdown className={"country-input"}
                        value={values.country}
                        name='country'
                        onChange={(_, e) => handleChange(e)} />
                       
                {errors.country && <ValidateError>{errors.country}</ValidateError>} 

                 {/* onChange={(val) => SelectCountry(val)}  */}
                    <FormRowLabel>State</FormRowLabel>
                    <RegionDropdown className={"country-input"}
                        country={values.country}
                         value={values.region}
                         name='region'
                         onChange={(_, e) => handleChange(e)}
                        />
                </FormRowField>
                {errors.region && <ValidateError>{errors.region}</ValidateError>} 
                <Button type="submit" onSubmit={handleSubmit}>Submit</Button>
                  
          
            </FormikForm>
            </Container>
            )
        }
    />
        </>
    )
}

export default ResidentialAddress

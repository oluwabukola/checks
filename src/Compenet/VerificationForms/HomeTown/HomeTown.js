import React, {useState} from 'react';

import { Container, FormikForm2, FormField,FormLabel, FormRowContainer,
    FormInput, SubTitle,FormRowLabel, FormRowField,SubTitleText, Button } from '../EmployeeForm/Employee.elements';
    import { Rule } from '../../VerificationType/VerificationType.elements';
    import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
    import {  Formik} from 'formik';
    import { HomeTownSchema } from '../ValidatingInput/ValidatingInput';
    import { useParams } from 'react-router';
    import { useDispatch } from 'react-redux';
    import { homeTown } from '../../../store/External/Actions/FormActions';

const HomeTown = () => {
    const {order_id, company_id, employee_id } = useParams();
     const dispatch = useDispatch();
    
    return (
        <> 
         <Formik
        initialValues={{ familyName:'', nearestBusStop:'', country:'', state: '', address: '' }}
        validationSchema = {HomeTownSchema}
        onSubmit={(values => {
            
            const add = {
                employee_id: employee_id,
                order_id: order_id,
                company_id: company_id,
                compound_name: values.familyName,
             nearest_bus_stop: values.nearestBusStop,
                landmark: values.country,
                address: values.address,
                state: values.state
            }
            
            dispatch(homeTown(add))
        
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
                    <SubTitleText>Home Town Address</SubTitleText>
                    <Rule />
                    </SubTitle>
                 
                    <FormField>
                    <FormLabel>Compound/Family Name</FormLabel>
                    <FormInput  type='text' placeholder='Enter compond/family name'
                    name='familyName'/>
                    </FormField>

                <FormField>
                    <FormLabel>Nearest B/Stop</FormLabel>
                    <FormInput type='text' placeholder='Nearest B/stop'
                    name='nearestBusStop' />
                </FormField>

                <FormField>
                <FormLabel>Home Town Address</FormLabel>
                    <FormInput type='text' placeholder='Home Town Address' 
                    name='address'/>
                </FormField>

                <FormRowField>
                    <FormRowContainer>
                    <FormLabel>Land Mark</FormLabel>
                    <CountryDropdown className={"country-input"}
                        value={values.country}
                        name='country'
                        onChange={(_, e) => handleChange(e)} /> 
                  </FormRowContainer>

                  <FormRowContainer>
                    <FormRowLabel>State</FormRowLabel>
                    <RegionDropdown className={"country-input"}
                        country={values.country}
                         value={values.state}
                         name='state'
                         onChange={(_, e) => handleChange(e)}
                        />
                   </FormRowContainer>
                </FormRowField>
                <Button type="submit" onSubmit={handleSubmit}>Submit</Button>
                </FormikForm2>
                </Container>
                       )
                    }
                />
        </>
    )
}

export default HomeTown

import React, {useState, useEffect} from 'react';
import { SubTitle, SubTitleText } from '../VerificationForms/EmployeeForm/Employee.elements';
import {Container, Form, Input, FormLabel, FormField, FormRowField,
        FormRowLabel, FormField2, VerificationContainer, VerifyButton, VerificationStatus,
        Certain, Uncertainty } from './Information.elements';
import { Rule } from '../VerificationType/VerificationType.elements';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { useDispatch, useSelector } from 'react-redux';
import { DisplayHometown } from '../../store/External/Actions/DisplayActions';
import { useParams } from 'react-router';
import Verify from '../../ExternalComponent/Verify/Verify';
import {FcProcess} from 'react-icons/fc';
import {MdVerifiedUser} from 'react-icons/md';
import {GiUncertainty} from 'react-icons/gi';
    

const HomeTownData = () => {
    const [show, setShow] = useState(false);
    const [country, setCountry] = useState('');
    const [region, setRegion] = useState('');
  
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const   {employee_id } = useParams();
 const dispatch = useDispatch();
 
    useEffect(() =>{
        dispatch(DisplayHometown(employee_id));
    }, [] );

    const homeTown = useSelector(state => state.externalDisplay.getHometownAddress);
    const user = useSelector(state => state.login.login);

    const SelectCountry = (val) => {
        setCountry(val);
    }

    const SelectRegion = (val) => {
        setRegion(val);
    }
  
    
    return (
        <> 
         <Container>
         {
              homeTown !== null && homeTown.map( x =>      
             x !== null &&
                    <Form>
                    <SubTitle>
                    <SubTitleText>Home Town Address</SubTitleText>
                    <Rule />
                    </SubTitle>
                    <VerificationStatus>
                 {
                     x.status == 1 ?
                     <Certain> <MdVerifiedUser /></Certain> :       
                     <Uncertainty> <GiUncertainty /> </Uncertainty> 
                 }    
                 </VerificationStatus>
                    <FormField>
                    <FormLabel>Compound/Family Name</FormLabel>
                    <Input  type='text' placeholder='Enter compond/family name'
                    value={ x.compound_name} 
                    readOnly={true} />
                    </FormField>

                <FormField>
                    <FormLabel>Nearest B/Stop</FormLabel>
                    <Input type='text' placeholder='Nearest B/stop'
                    value={x.nearest_bus_stop} 
                    readOnly={true} />
                </FormField>


                <FormRowField>
                    <FormField2>
                    <FormLabel>Land Mark</FormLabel>
                    <CountryDropdown className={"country-input2"}
                       showDefaultOption={false}
                       value='Nigeria'
                       priorityOptions={["NG", "US", "GB"]} 
                        name='country'
                        readOnly = {true}
                       />
                       </FormField2>
                       <FormField2>
                       
                    <FormLabel>State</FormLabel>
                    <Input type='text' 
                     value={x.state} name='busStop' readOnly = {true}/>
                
                        </FormField2>
                </FormRowField>

                {/* <FormRowField>
                <FormField2>
                    <FormLabel>Land Mark</FormLabel>
                    <CountryDropdown className={"country-input2"}
                        value={country}
                        onChange={(val) => SelectCountry(val)} />
                         </FormField2>
                         <FormField2>
                    <FormRowLabel>State</FormRowLabel>
                    <RegionDropdown className={"country-input2"}
                        country={country}
                         value={region}
                         onChange={(val) => SelectRegion(val)} />
                   </FormField2> 
                    </FormRowField> */}

                <FormRowField>
                <FormField2>
                    <FormLabel>Date</FormLabel>
                    <Input  type='text' name='date' placeholder='Date filled'
                    readOnly={true}
                    value={x.created_at.split('T')[0] }/>
                </FormField2>
                    <FormField2>
                    <FormRowLabel>Time</FormRowLabel>
                    <Input type='text' name='time' placeholder='Time filled'
                    readOnly={true}
                    value={x.created_at.split('T')[1] }/>
                   </FormField2> 
                    </FormRowField>

                    {user !== null || user.user !==null && user.user.user_type =='internal' ?
                     <VerificationContainer>
                    <VerifyButton type='button' onClick={handleShow}><FcProcess />Verify</VerifyButton>
                    <Verify  show={show} x={x} handleClose={handleClose}/>
                    </VerificationContainer> : ''
                    }


                </Form>
              )}

                </Container> 

                </>
    )
}

export default HomeTownData

import React, {useState, useEffect} from 'react';
import {  SubTitle, SubTitleText
     } from '../VerificationForms/EmployeeForm/Employee.elements';
    import { Rule } from '../VerificationType/VerificationType.elements';
    import {Container, Form, Input, FormLabel, FormField, FormRowField,
        FormRowLabel, FormField2, VerificationContainer, VerifyButton, VerificationStatus,
    Certain, Uncertainty } from './Information.elements';
    import { CountryDropdown, RegionDropdown} from 'react-country-region-selector';
    import { useDispatch,useSelector } from 'react-redux';
    import { DisplayResidential } from '../../store/External/Actions/DisplayActions';
    import { useParams } from 'react-router';
    import VerifyResidentialAddress from '../../ExternalComponent/Verify/VerifyResidentialAddress';
    import {FcProcess} from 'react-icons/fc';
    import {MdVerifiedUser} from 'react-icons/md';
    import {GiUncertainty} from 'react-icons/gi';
  
const ResidentialData = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const   {employee_id } = useParams();
     
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(DisplayResidential(employee_id));
       
    }, [] );
    const resident = useSelector(state => state.externalDisplay.getResidentialAdddress);
    const user = useSelector(state => state.login.login);
    console.log('dent', resident)
    return (
        <>
        {
            resident !== null && 
          <Container>
            <Form>
            <SubTitle>
                    <SubTitleText>Residential Address</SubTitleText>
                    <Rule />
            </SubTitle>

            <VerificationStatus>
            {
            resident.status == 1 ?
            <Certain> <MdVerifiedUser /></Certain> :
            
            <Uncertainty> <GiUncertainty /> </Uncertainty>
            }    
            </VerificationStatus>

            <FormField>
            <FormLabel>Residential Address</FormLabel>
             <Input type='text' placeholder='Residential Address' 
             value={resident.address} name='address' readOnly = {true}/>
             </FormField>

                <FormField>
                    <FormLabel>Nearest B/stop</FormLabel>
                    <Input type='text' placeholder='Nearest B/stop' 
                     value={resident.nearest_bus_stop} name='busStop' readOnly = {true}/>
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
                     value={resident.state} name='busStop' readOnly = {true}/>
                
                        </FormField2>
                </FormRowField>
                <FormRowField>
                <FormField2>
                    <FormLabel>Date</FormLabel>
                    <Input  type='text' name='date' 
                    value={resident.created_at.split('T')[0]}  readOnly = {true}/>
                </FormField2>
                    <FormField2>
                    <FormRowLabel>Time</FormRowLabel>
                    <Input type='text' name='time'
                   value={resident.created_at.split('T')[1]}  readOnly = {true}/>
                   </FormField2> 
                    </FormRowField>

                    {user !== null || user.user !==null && user.user.user_type =='internal' ?
                     <VerificationContainer>
                    <VerifyButton type='button' onClick={handleShow}><FcProcess />Verify</VerifyButton>
                    <VerifyResidentialAddress  show={show} resident={resident} handleClose={handleClose}/>
                    </VerificationContainer> : ''
                    }
                    {/* <VerificationContainer>
                    <VerifyButton type='button'  onClick={handleShow}> <FcProcess />Verify</VerifyButton>
                    <VerifyResidentialAddress show={show} resident={resident} handleClose={handleClose}/>
                    </VerificationContainer> */}
            </Form>
            
            </Container>
           
        }
        </>
    )
}

export default ResidentialData

import React, {useState, useEffect} from 'react';
import { SubTitle, SubTitleText} from '../VerificationForms/EmployeeForm/Employee.elements';
import {Container, Form, Input, FormLabel, FormField, FormRowField,
FormRowLabel, FormField2, VerificationContainer, VerifyButton, VerificationStatus, Certain,Uncertainty } from './Information.elements';
import { Rule } from '../VerificationType/VerificationType.elements';
import { DisplayReferee } from '../../store/External/Actions/DisplayActions';
import { useParams } from 'react-router';
import VerifyReferee from '../../ExternalComponent/Verify/VerifyReferee';
import {MdVerifiedUser} from 'react-icons/md';
    import {GiUncertainty} from 'react-icons/gi';
    import {FcProcess} from 'react-icons/fc';

import { useDispatch, useSelector } from 'react-redux';
const RefereeData = () => {
    const [show, setShow] = useState(false);
    const   {employee_id } = useParams();
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

   const dispatch = useDispatch()
   useEffect(() =>{
       dispatch(DisplayReferee(employee_id));
   }, [] );
   const ref = useSelector(state => state.externalDisplay.getReferee);
   const user = useSelector(state => state.login.login);
 

    return (
        <>
         {
              ref !==null && ref.map( x => 
           <Container>
               <Form>
            <SubTitle>
                    <SubTitleText>Referee</SubTitleText>
                    <Rule />
                    </SubTitle>

                    <VerificationStatus>
            {
            x.status === 1 ? 
            <Certain> <MdVerifiedUser /></Certain>:
            <Uncertainty> <GiUncertainty /> </Uncertainty> 
            }    
            </VerificationStatus>
               <FormField>
                    <FormLabel>Full Name (Surname First)</FormLabel>
                    <Input  type='text' value={x.full_name}
                    name='fullName'readOnly = {true}/>
                </FormField>

                <FormField>
                    <FormLabel>Office Address</FormLabel>
                    <Input  type='text' value={x.office_address}
                    name='officeAddress' readOnly={true}/>
                </FormField>

                <FormField>
                    <FormLabel>Telephone</FormLabel>
                    <Input  type='text' readOnly={true}
                    name='phoneNumber' value={x.phone}/>
                </FormField>

                <FormField>
                    <FormLabel>Occupation</FormLabel>
                    <Input  type='text' value={x.occupation}
                    name='occupation'/>
                </FormField>

                <FormField>
                    <FormLabel>E-mail Address</FormLabel>
                    <Input  type='text' value={x.email}
                    readOnly={true}
                    name='emailAddress' />
                </FormField>

                <FormRowField>
                <FormField2>
                    <FormLabel>Date</FormLabel>
                    <Input  type='text' name='date' value={x.created_at.split('T')[0]}
                    readOnly={true}/>
                </FormField2>
                    <FormField2>
                    <FormRowLabel>Time</FormRowLabel>
                    <Input type='text' name='time' value={x.created_at.split('T')[1]} 
                    readOnly={true}/>
                   </FormField2> 
                    </FormRowField>

                    {user !== null || user.user !==null && user.user.user_type =='internal' ?
                     <VerificationContainer>
                    <VerifyButton type='button' onClick={handleShow}><FcProcess />Verify</VerifyButton>
                    <VerifyReferee  show={show} x={x} handleClose={handleClose}/>
                    </VerificationContainer> : ''
                    }

                    {/* <VerificationContainer>
                    <VerifyButton type='button' className="fas fa-check-double"  onClick={handleShow}>Verify</VerifyButton>
                    <VerifyReferee  show={show} x={x} handleClose={handleClose}/>
                    </VerificationContainer> */}
               </Form>
               
               </Container>
            ) 
           }
        </>
    )
}

export default RefereeData;

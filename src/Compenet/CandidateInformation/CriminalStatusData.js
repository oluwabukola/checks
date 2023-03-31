import React, {useState, useEffect} from 'react';
import { SubTitle,SubTitleText } from '../VerificationForms/EmployeeForm/Employee.elements'
    import {Container, Form, Input, FormLabel, FormField, FormRowField,
        FormRowLabel, FormField2, VerificationContainer, VerifyButton,VerificationStatus,
        Certain, Uncertainty } from './Information.elements';
    import { Rule } from '../VerificationType/VerificationType.elements'
    import { useDispatch, useSelector } from 'react-redux';
    import { DisplayCriminalStatus } from '../../store/External/Actions/DisplayActions';
    import { useParams } from 'react-router';
    import VerifyCriminalCheck from '../../ExternalComponent/Verify/VerifyCriminalCheck';
    import {FcProcess} from 'react-icons/fc';
    import {MdVerifiedUser} from 'react-icons/md';
    import {GiUncertainty} from 'react-icons/gi';

const CriminalStatusData = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const  {employee_id } = useParams();

    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(DisplayCriminalStatus(employee_id));
    }, []);
    const criminal = useSelector(state => state.externalDisplay.getCriminalStatus);
    const user = useSelector(state => state.login.login);
  
    return (
        <>
        {
            criminal !== null && 
       
             <Container>
            <Form>
                    <SubTitle>
                    <SubTitleText>Criminal Status</SubTitleText>
                    <Rule />
                    </SubTitle>

                    <VerificationStatus>
                 {
                     criminal.status == 1 ?
                     <Certain> <MdVerifiedUser /></Certain> :
                     <Uncertainty> <GiUncertainty /> </Uncertainty> 
                 }    
            </VerificationStatus>
               <FormField>
                    <FormLabel>Phone number</FormLabel>
                    <Input type='text' value={criminal.bvn} readOnly={true}
                    name='bvn'/>
                </FormField>
              
               
                <FormRowField>
                <FormField2>
                    <FormLabel>Date</FormLabel>
                    <Input  type='text' name='date' readOnly={true}
                    value={criminal.created_at.split('T')[0] }/>
                </FormField2>
                    <FormField2>
                    <FormRowLabel>Time</FormRowLabel>
                    <Input type='text' name='time' readOnly={true}
                     value={criminal.created_at.split('T')[1]} />
                   </FormField2> 
                    </FormRowField>

                    {user !== null || user.user !==null && user.user.user_type =='internal' ?
                     <VerificationContainer>
                    <VerifyButton type='button' onClick={handleShow}><FcProcess />Verify</VerifyButton>
                    <VerifyCriminalCheck  show={show} criminal={criminal} handleClose={handleClose}/>
                    </VerificationContainer> : ''
                    }

                    {/* <VerificationContainer>
                    <VerifyButton type='button'  onClick={handleShow}><FcProcess/>Verify</VerifyButton>
                    <VerifyCriminalCheck show={show} criminal={criminal} handleClose={handleClose}/>
                    </VerificationContainer> */}
                </Form>
                </Container>
             }
        </>
    )
}

export default CriminalStatusData;

import React, {useState, useEffect} from 'react';
import { SubTitle, SubTitleText } from '../VerificationForms/EmployeeForm/Employee.elements'
    import {Container, Form, Input, FormLabel, FormField, FormRowField,
        FormRowLabel, FormField2,VerificationContainer, VerifyButton,
        Uncertainty, Certain, VerificationStatus } from './Information.elements';
    import { Rule } from '../VerificationType/VerificationType.elements'
    import { useDispatch, useSelector } from 'react-redux';
    import { DisplayCreditCheck } from '../../store/External/Actions/DisplayActions';
    import { useParams } from 'react-router';
    import VerifyCreitCheck from '../../ExternalComponent/Verify/VerifyCreditCheck';
    import {FcProcess} from 'react-icons/fc';
    import {MdVerifiedUser} from 'react-icons/md';
    import {GiUncertainty} from 'react-icons/gi';

const CreditChecksData = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const   {employee_id } = useParams();
    
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(DisplayCreditCheck(employee_id));
    }, [] );
    const credit = useSelector(state => state.externalDisplay.getCreditCheck);
    const user = useSelector(state => state.login.login);
   

    return (
        <>
        {
            
            credit !==null &&
             <Container>
            <Form>
                    <SubTitle>
                    <SubTitleText>Credit Checks</SubTitleText>
                    <Rule />
                    </SubTitle>
                
                    <VerificationStatus>
            {
            credit.status === 1 ? 
            <Certain> <MdVerifiedUser /></Certain>:
            <Uncertainty> <GiUncertainty /> </Uncertainty> 
            }    
            </VerificationStatus>

                <FormField>
                    <FormLabel>BVN</FormLabel>
                    <Input type='text' value={credit.bvn} readOnly={true}
                    name='bvn'/>
                </FormField>
                <FormRowField>
                <FormField2>
                    <FormLabel>Date</FormLabel>
                    <Input  type='text' name='date' readOnly={true}
                    value={credit.created_at.split('T')[0]}
                    />
                </FormField2>
                    <FormField2>
                    <FormRowLabel>Time</FormRowLabel>
                    <Input type='text' name='time'
                    readOnly={true}
                     value={credit.created_at.split('T')[1]}
                     />
                   </FormField2> 
                    </FormRowField>

                    {user !== null || user.user !==null && user.user.user_type =='internal' ?
                     <VerificationContainer>
                    <VerifyButton type='button' onClick={handleShow}><FcProcess />Verify</VerifyButton>
                    <VerifyCreitCheck  show={show} credit={credit} handleClose={handleClose}/>
                    </VerificationContainer> : ''
                    }
                    {/* <VerificationContainer>
                    <VerifyButton type='button' onClick={handleShow}><FcProcess/>Verify</VerifyButton>
                    <VerifyCreitCheck  show={show} credit={credit} handleClose={handleClose}/>
                    </VerificationContainer> */}
                </Form>
                </Container>
            }  
        </>
    )
}

export default CreditChecksData

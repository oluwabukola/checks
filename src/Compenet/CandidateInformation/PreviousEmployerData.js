import React, {useState, useEffect} from 'react';
import { SubTitle, SubTitleText } from '../VerificationForms/EmployeeForm/Employee.elements';
import { Rule } from '../VerificationType/VerificationType.elements';
import {Container, Form, Input, FormLabel, FormField, FormRowField,Certain, Uncertainty,
    FormRowLabel, FormField2, VerificationContainer, VerifyButton, VerificationStatus } from './Information.elements';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { DisplayPreviousEmployer } from '../../store/External/Actions/DisplayActions';
import VerifyPreviousEmployer from '../../ExternalComponent/Verify/VerifyPreviousEmployer';
import {FcProcess} from 'react-icons/fc';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import {MdVerifiedUser} from 'react-icons/md';
import {GiUncertainty} from 'react-icons/gi';

const PreviousEmployerData = () => {
    const [show, setShow] = useState(false);
    const [country, setCountry] = useState('');
    const [region, setRegion] = useState('');

    const   {employee_id } = useParams();

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(DisplayPreviousEmployer(employee_id));
    }, [] );
    const employer = useSelector(state => state.externalDisplay.getPreviousEmployer);
    const user = useSelector(state => state.login.login);
    // console.log('previous employer', employer)

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
                employer !==null && employer.map( x=> 
            
        <Form>

        <SubTitle>
                    <SubTitleText>Previous Employer</SubTitleText>
                    <Rule />
                    </SubTitle>
                    <VerificationStatus>
                 {
                     x !== null && x.status == 1 ?
                     <Certain> <MdVerifiedUser /></Certain> :       
                     <Uncertainty> <GiUncertainty /> </Uncertainty> 
                 }    
                 </VerificationStatus>
                <FormRowField>
                    <FormField2>
                    <FormLabel>Dates: From</FormLabel>
                    <Input  type='date' value={x !==null && x.start_date}
                    name='startDate'  readOnly={true} />
                    </FormField2>
                    <FormField2>
                    <FormRowLabel>To</FormRowLabel>
                    <Input  type='date' value={x !== null && x.end_date}
                    name='endDate' readOnly={true}/>
                    </FormField2>
                </FormRowField>

                <FormField>
                    <FormLabel>Name of company</FormLabel>
                    <Input  type='text' value={x !== null && x.company_name}
                    name='companyName' readOnly={true}/>
                </FormField>

                <FormField>
                    <FormLabel>company's Address</FormLabel>
                    <Input  type='text' value={x !== null && x.company_address}
                    name='companyAddress' readOnly={true}/>
                </FormField>
{/* 
                <FormField>
                    <FormLabel>Nearest B/Stop</FormLabel>
                    <Input type='text' placeholder='Nearest B/stop' />
                </FormField> */}

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

                <FormField>
                    <FormLabel>E-mail address (company)</FormLabel>
                    <Input type='text' value={x !== null && x.company_email}
                    name='companyEmail' readOnly={true}/>
                </FormField>
                <FormField>
                    <FormLabel>Post Held</FormLabel>
                    <Input  type='text' value={x !== null && x.post_held}
                    name='postHeld' readOnly={true}/>
                </FormField>

                <FormField>
                    <FormLabel>Salary</FormLabel>
                    <Input  type='text'value={x !== null && x.salary}
                    name='salary' readOnly={true} />
                </FormField>
                <FormField>
                    <FormLabel>Reson for leaving</FormLabel>
                    <Input  type='text' value={x !== null && x.reason_for_leaving}
                    name='reasonLeaving' readOnly={true}/>
                </FormField>

                <FormField>
                    <FormLabel>Any Outstanding Loan</FormLabel>
                    <Input  type='text' value={x !== null && x.outstanding_loan}
                    name='outstandingLoan' readOnly={true}/>
                </FormField>
                <FormField>
                    <FormLabel>Method of Payment</FormLabel>
                    <Input  type='text' value={x !== null && x.method_of_payment}
                    name='paymentMethod' readOnly={true}/>
                </FormField>

                <FormRowField>
                <FormField2>
                    <FormLabel>Date</FormLabel>
                    <Input  type='text' name='date' value={x !== null && x.created_at.split('T')[0]} 
                    readOnly={true} />
                </FormField2>
                    <FormField2>
                    <FormRowLabel>Time</FormRowLabel>
                    <Input type='text' name='time' value={x !== null && x.created_at.split('T')[1]}
                    readOnly={true} />
                   </FormField2> 
                    </FormRowField>
                    
                    {user !== null || user.user !==null && user.user.user_type =='internal' ?
                     <VerificationContainer>
                    <VerifyButton type='button' onClick={handleShow}><FcProcess />Verify</VerifyButton>
                    <VerifyPreviousEmployer  show={show} x={x} handleClose={handleClose} />
                    </VerificationContainer> : ''
                    }

                    {/* <VerificationContainer>
                    <VerifyButton type='button' className="fas fa-check-double"  onClick={handleShow}>Verify</VerifyButton>
                    <VerifyPreviousEmployer show={show} x={x} handleClose={handleClose} />
                    </VerificationContainer> */}
        </Form>
                )
            }
        </Container>

        </>
    )
}

export default PreviousEmployerData

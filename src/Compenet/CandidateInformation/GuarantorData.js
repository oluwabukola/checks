import React, {useState, useEffect} from 'react';
import {  PassportPhotograph,  PassportContainer,SubTitleText,SubTitle} from '../VerificationForms/EmployeeForm/Employee.elements'
import { Rule } from '../VerificationType/VerificationType.elements';
import { DeclarationText, DeclarationField, Declaration, SpanText, Declaration2, ApplicantField,
    DeclarationDateSignature,DateField } from '../VerificationForms/GuarantorForm/GuarantorForms.elements';
 import {  SignatureTag, InputLabel,Tag} from '../VerificationForms/ResidentalForm/ResidentialAddress.elements';
 import {Container, Form, Input, FormLabel, FormField, FormRowField, DeclarationName,DeclarationNationality, 
    FormRowLabel, FormField2, DeclarationAddress, ApplicantName,
DateSignatureText, VerificationContainer, VerifyButton, Uncertainty, Certain, VerificationStatus } from './Information.elements';
 import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
 import { DisplayGuarantor } from '../../store/External/Actions/DisplayActions';
 import { useDispatch, useSelector } from 'react-redux';
 import { useParams } from 'react-router';
 import {FcProcess} from 'react-icons/fc';
import {MdVerifiedUser} from 'react-icons/md';
import {GiUncertainty} from 'react-icons/gi';
 import VerifyGuarantor from '../../ExternalComponent/Verify/VerifyGuarantor';

 const GuarantorData = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const [country, setCountry] = useState('');
    const [region, setRegion] = useState('');
  const dispatch = useDispatch();
  const   {employee_id } = useParams(); 

    useEffect(() =>{
        dispatch(DisplayGuarantor(employee_id));
    }, []);
    const user = useSelector(state => state.login.login);
    const guarantor = useSelector(state => state.externalDisplay.getGuarantor);
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
                    guarantor !== null && guarantor.map( x => 
                <Form>
            <VerificationStatus>
            {x.status == 1 ?
            <Certain> <MdVerifiedUser /> </Certain> :
            <Uncertainty><GiUncertainty /></Uncertainty > 
             }    
            </VerificationStatus>
            <PassportContainer>
            <PassportPhotograph>
            </PassportPhotograph>
            </PassportContainer>
                <FormField>
                    <FormLabel>Full Name (Surname First)</FormLabel>
                    <Input  type='text' value={x.fullname} 
                    readOnly={true} name='fullname'/>
                </FormField>

                <FormField>
                    <FormLabel>Profession/Occupation</FormLabel>
                    <Input  type='text'value={x.profession}
                    readOnly={true} name='occupation'/>
                </FormField>

                <FormRowField>
                    <FormField2>
                    <FormLabel>Position</FormLabel>
                    <Input  type='text' value={x.position} 
                    name="position" readOnly={true}/>
                    </FormField2>
                    <FormField2>
                    <FormLabel> Level</FormLabel>
                    <Input type='text' value={x.level}
                    readOnly={true} name='level' />
                    </FormField2>
                </FormRowField>

                <FormField>
                    <FormLabel>Business/Office name</FormLabel>
                    <Input  type='text' value={x.business_name}
                     name='officeName' readOnly={true} />
                </FormField>

                <FormField>
                    <FormLabel>C.A.C Number</FormLabel>
                    <Input  type='text' value={x.cac} 
                    name='cac' readOnly={true} />
                </FormField>

                <FormField>
                    <FormLabel>Office Address</FormLabel>
                    <Input  type='text' value={x.office_address}
                     name='officeAddress' readOnly={true} />
                </FormField>

                {/* <FormRowField> 
                    <FormField2>
                    <FormLabel>Land Mark</FormLabel>
                    <CountryDropdown className={"country-input2"}
                    name='country'
                        value={country}
                        onChange={(val) => SelectCountry(val)} /> 
                        </FormField2>
                        <FormField2>
                    <FormLabel>State</FormLabel>
                    <RegionDropdown className={"country-input2"}
                        name='state'
                        country={country}
                         value={region}
                         onChange={(val) => SelectRegion(val)} />
                         </FormField2>
                </FormRowField> */}

                <FormRowField>
                    <FormField2>
                    <FormLabel>Office Telephone</FormLabel>
                    <Input  type='text' value={x.office_phone}
                    name='officeTelephone' readOnly={true} />
                    </FormField2>
                    <FormField2>
                    <FormLabel>Email</FormLabel>
                    <Input  type='text' value={x.email}
                    name='emailAddress' readOnly={true}/>
                    </FormField2>
                </FormRowField>

                <SubTitle>
                    <SubTitleText>Part1 B</SubTitleText>
                    <Rule />
                    </SubTitle>

                    <FormField>
                    <FormLabel>Residential Address</FormLabel>
                    <Input  type='text' value={x.residential_address}
                    name='residentialAddress' readOnly={true} />
                </FormField>

                <SubTitle>
                    <SubTitleText>Declaration</SubTitleText>
                    <Rule />
                    </SubTitle>
                    <DeclarationField>
                    <Declaration>
                    <SpanText>I</SpanText>
                    <DeclarationName type='text' value={x.guarantor_name}
                    name='fullname' readOnly={true}/>
                    </Declaration> 
                    <Declaration2>
                    <SpanText>a</SpanText>
                    <DeclarationNationality type='text' value={x.nationality}
                    name='nationality' readOnly={true} />
                    </Declaration2> 
                    </DeclarationField>

                    <DeclarationField>
                    <SpanText>of</SpanText>
                    <DeclarationAddress type='text' value={x.home_address}
                    name='fullAddress' readOnly={true} />
                    </DeclarationField>
                   
                    <DeclarationText>Do hereby solemnly and sincerely declare as follows: That</DeclarationText>

                    <ApplicantField>
                    <ApplicantName  type='text' value={x.employee_name}
                    name='applicantName'  readOnly={true}/>
                </ApplicantField>

                <DeclarationText>is proposing with my full knowledge and consent, to take up employment with the boss</DeclarationText>
                <DeclarationText>I.	That I will be responsible for any financial los s suffered by the Client arising from any malpractice or negligence committed by the applicant in the course of his/her employment with the company.</DeclarationText>

                <DeclarationText>II. In the event of any pecuniary loss committed by the applicant in the course of employment, I voluntarily accept to take responsibility for all charges and expenses incurred in the process of recovery of such loss and (or)litigation(if any)’ .</DeclarationText>

                <DateField>
                    
                   <DeclarationDateSignature>

                   <SpanText>Signature</SpanText>
                   <SignatureTag >
                        <InputLabel for='signature' >
                            <Tag className="fas fa-signature" />                       
                             </InputLabel>          
                        </SignatureTag>
                    <DateSignatureText type='file' name='signature' id='signature' />
                   </DeclarationDateSignature>
                </DateField>
               
                {user !== null ||  user.user !==null && user.user.user_type =='internal' ?
                <VerificationContainer>
                    <VerifyButton type='button' onClick={handleShow}><FcProcess />Verify</VerifyButton>
                    <VerifyGuarantor  show={show} x={x} handleClose={handleClose}/>
                    </VerificationContainer> : ''
                    }
                </Form>
                )
            }

            </Container>
        
        </>
    )
}

export default GuarantorData

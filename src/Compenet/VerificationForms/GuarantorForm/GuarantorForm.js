import React, {useState} from 'react';
import {  Container, PassportPhotograph, FormField,FormLabel, FormikForm, Button,
    FormInput,  PassportContainer,SubTitleText,SubTitle,FormRowInput, PassportImage,
    FormRowLabel, FormRowField, FormRowInput2, FileInput, Images, ValidateError,
    UploadForm,UploadText, Camera, InputLabel2, PassportImage2, Signature} from '../EmployeeForm/Employee.elements';
    import { Rule } from '../../VerificationType/VerificationType.elements';
    import { DeclarationText, DeclarationField, Declaration, SpanText, DeclarationName,
    DeclarationNationality, Declaration2, DeclarationAddress, ApplicantName,
ApplicantField, DeclarationDateSignature,  DateSignatureText, DeclarationTextContainer, DeclarationContent,
 DateField } from './GuarantorForms.elements';
 import {  SignatureTag, InputLabel,Tag} from '../ResidentalForm/ResidentialAddress.elements';
 import {FcMultipleCameras} from 'react-icons/fc';
import {FcSignature} from 'react-icons/fc';
import {ImImages} from 'react-icons/im';
 import {  Formik} from 'formik';
 import { useDispatch } from 'react-redux';
 import { useParams, useHistory } from 'react-router';
 import { GuarantorSchema } from '../ValidatingInput/ValidatingInput';
 import { Guarantor } from '../../../store/External/Actions/FormActions';
const GuarantorForm = () => {
    const[passport, setPassport] = useState(null);
    const[signature, setSignature] = useState(null);
    const [sign, setSign] = useState(null);
    const [selected, setSelected] = useState(null);
    const dispatch = useDispatch();
    const {order_id, company_id, employee_id } = useParams();

    const fileHandler = (e) => {
        e.preventDefault();
        const select = e.target.files[0];
        setSelected(select);
        setPassport(URL.createObjectURL(select));
    }

    const signatureHandler = (e) => {
        e.preventDefault();
        const Sign = e.target.files[0];
        setSign(Sign);
        setSignature(URL.createObjectURL(Sign));
       
        // const reader = new FileReader();
        // let file = e.target.files[0];
        // reader.onloadend = () => {
            
        //   setSignature(reader.result);
        // };
        // reader.readAsDataURL(file);
    }

    return (
        <>
         <Formik
        initialValues={{ fullName: '', occupation: '', position: '', emailAddress: '', guarantorName:'',
        officeName:'', cac:'',   officeAddress:'',   officeTelephone: '', mobileNumber: '', nationality:'', 
        residentialAddress: '', relationship: '',   fullAddress:'', applicantName:'', level: '' }}
        validationSchema = {GuarantorSchema}

        onSubmit={ (values) => {
          
                let data ={
                    employee_id: employee_id,
                     order_id: order_id,
                        company_id: company_id,
                    guarantor_passport: selected.name,
                    guarantor_name: values.guarantorName,
                   profession: values.occupation,
                   position: values.position,
                   fullname: values.fullName,
                   level:values.level,
                   business_name: values.officeName,
                   cac_no: values.cac,
                   office_address: values.officeAddress,
                   office_phone: values.officeTelephone,
                   email: values.emailAddress,
                   residential_address: values.residentialAddress,
                   mobile_phone: values.mobileNumber,
                   employee_name: values.applicantName,
                   relationship: values.relationship,
                   home_address:values.fullAddress,
                   nationality: values.nationality,
                    guarantor_signature: sign.name
                }
                
            dispatch(Guarantor( data))
              
            }
        
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
                <PassportContainer>
                <PassportPhotograph >
                    {
                        passport ?
                          <PassportImage src={passport}  /> 
                          :  (
                              <ImImages/>
                         )
                    }
                    </PassportPhotograph>
                      {/* {errors.pass && touched.pass ? <ValidateError>{errors.pass}</ValidateError>
                      : null }  */}
                      <UploadForm>
                        <UploadText>Upload image</UploadText>
                        <Camera>
                       <InputLabel for='passport' >
                         <FcMultipleCameras />
                       <FileInput type="file" id='passport' name='passport' onChange={ fileHandler} /> 
                         </InputLabel>
                         </Camera>
                         </UploadForm>

                         </PassportContainer>
                <FormField>
                    <FormLabel>Full Name (Surname First)</FormLabel>
                    <FormInput  type='text' placeholder="Guarantor's full name(surname first) " name='guarantorName'/>
                </FormField>

                <FormField>
                    <FormLabel>Profession/Occupation</FormLabel>
                    <FormInput  type='text' placeholder='Enter position/occupation'
                    name='occupation'/>
                </FormField>

                <FormRowField>
                    <FormLabel>Position</FormLabel>
                    <FormRowInput  type='text' placeholder='Enter position' name="position"/>
                    <FormRowLabel> Level</FormRowLabel>
                    <FormRowInput2  type='text' placeholder='Enter level' name='level' />
                </FormRowField>

                <FormField>
                    <FormLabel>Business/Office name</FormLabel>
                    <FormInput  type='text' placeholder='Office Name' name='officeName' />
                </FormField>

                <FormField>
                    <FormLabel>C.A.C Number</FormLabel>
                    <FormInput  type='text' placeholder='C.A.C Number' name='cac'/>
                </FormField>

                <FormField>
                    <FormLabel>Office Address</FormLabel>
                    <FormInput  type='text' placeholder='Office Address' name='officeAddress'/>
                </FormField>
                {/* <FormRowField>
                    
                    <FormLabel>Land Mark</FormLabel>
                    <CountryDropdown className={"country-input"}
                    name='country'
                        value={country}
                        onChange={(val) => SelectCountry(val)} /> 
                    <FormRowLabel>State</FormRowLabel>
                    <RegionDropdown className={"country-input"}
                        name='state'
                        country={country}
                         value={region}
                         onChange={(val) => SelectRegion(val)} />
                </FormRowField> */}

                <FormRowField>
                    <FormLabel>Office Telephone</FormLabel>
                    <FormRowInput  type='text' placeholder='office telephone'
                    name='officeTelephone'/>
                    {/* <FormRowLabel>Email</FormRowLabel>
                    <FormRowInput2  type='email' placeholder='Enter email'className='email-input'
                    name='emailAddress'/> */}
                </FormRowField>
                <FormField>
                <FormRowLabel>Email</FormRowLabel>
                    <FormRowInput2  type='email' placeholder='Enter email'className='email-input'
                    name='emailAddress'/>
                </FormField>

                <SubTitle>
                    <SubTitleText>Part1 B</SubTitleText>
                    <Rule />
                    </SubTitle>

                    <FormField>
                    <FormLabel>Residential Address</FormLabel>
                    <FormInput  type='text' placeholder='Residential Address'
                    name='residentialAddress' />
                </FormField>

                <FormField>
                    <FormLabel>Mobile Telephone Number</FormLabel>
                    <FormInput  type='text' placeholder='Enter mobile number'
                    name='mobileNumber' />
                </FormField>
                <FormField>
                    <FormLabel>Relationship to Applicant</FormLabel>
                    <FormInput  type='text' placeholder='father/ mother/ neighbour/coustin....'
                    name='relationship'/>
                </FormField>

                <SubTitle>
                    <SubTitleText>Declaration</SubTitleText>
                    <Rule />
                    </SubTitle>
                    <DeclarationField>
                    <Declaration>
                    <SpanText>I</SpanText>
                    <DeclarationName type='text' placeholder='FullName(Surname First)'
                    name='fullName' />
                    </Declaration> 
                    <Declaration2>
                    <SpanText>a</SpanText>
                    <DeclarationNationality type='text' placeholder='Nationality'
                    name='nationality' />
                    </Declaration2> 
                    </DeclarationField>

                    <DeclarationField>
                    <SpanText>of</SpanText>
                    <DeclarationAddress type='text' placeholder=' Enter Full Address'
                    name='fullAddress' />
                    </DeclarationField>
                   
                    <DeclarationText>Do hereby solemnly and sincerely declare as follows: That</DeclarationText>

                    <ApplicantField>
                    <ApplicantName  type='text' placeholder='Name of applicant'
                    name='applicantName' />
                </ApplicantField>
                <DeclarationTextContainer>
                <DeclarationContent>is proposing with my full knowledge and consent, to take up employment with the boss</DeclarationContent>
                <DeclarationContent>I.That I will be responsible for any financial los s suffered by the Client arising from any malpractice or negligence committed by the applicant in the course of his/her employment with the company.</DeclarationContent>
                <DeclarationContent>II. In the event of any pecuniary loss committed by the applicant in the course of employment, I voluntarily accept to take responsibility for all charges and expenses incurred in the process of recovery of such loss and (or)litigation(if any)’ .</DeclarationContent>
                </DeclarationTextContainer>
                <DateField>
                   
                   <DeclarationDateSignature>

                   <SpanText>Upload Signature</SpanText>
                   <div>
                   <SignatureTag >
                   { signature ? 
                          <PassportImage2 src={signature} />  :
                       <FcSignature />
                      }
                      </SignatureTag>
                       <div>
                           <InputLabel2 for='signature' >
                           <FcMultipleCameras />
                           <DateSignatureText type='file' name='signature' id='signature'  onChange={signatureHandler}/>
                         </InputLabel2>
                       </div>
                   {/* {
                        signature ? <PassportImage src={signature} /> :  (
                        <InputLabel for='signature' >
                            <Tag className="fas fa-signature" />                       
                             </InputLabel>
                                 )
                                } */}
                        
                    {/* <DateSignatureText type='file' name='signature' id='signature'
                    onChange={signatureHandler} /> */}
                    </div>
                   </DeclarationDateSignature>
                </DateField>
                <Button type="submit" onSubmit={handleSubmit}>Submit</Button>
                </FormikForm>
            </Container>
             )
            }
        />
        </>
    )
}

export default GuarantorForm

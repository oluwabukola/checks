// import React from 'react';
// import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';

 export const loginSchema = Yup.object().shape({
   email: Yup.string().email().required(),
   password: Yup.string().required(),
 });
 
 
 export const BasicInfoSchema = Yup.object().shape({
    firstName: Yup.string()
    .min(3, 'Name is too short!')
    .max(20, 'Name istoo long!')
    .required('Name is required'),

    otherName: Yup.string()
    .min(3, 'Name is too short!')
    .max(20, 'Name istoo long!')
    .required('Name is required'),

    lastName: Yup.string()
    .min(3, 'Name is too short!')
    .max(20, 'Name istoo long!')
    .required('Name is required'),

    gender: Yup.string()
     .min(4, 'Too Short!')
     .max(10, 'Too Long!')
     .required('Gender is required'),

     phoneNumber: Yup.string()
    .required("Phone number is required"),

    emailAddress: Yup.string().email('Invalid email').required('Email is required'),

   // pass: Yup.mixed()
   //  .test('fileType', 'Unsupported File Format', value => {
       
   //    const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];
   //    console.log(value)
   //    return SUPPORTED_FORMATS.includes(value)


   //  })
   //  .test('fileSize', "File Size is too large", value => {
   //    const sizeInBytes = 100000;//0.5MB
   //    return value <= sizeInBytes;
   //  }),
  
 });

 export const CandidateInputSchema = Yup.object().shape({
    candidateNumber: Yup.number('must be a number').positive().integer().required('filled is required'),
 });

 export const ResidentialSchema = Yup.object().shape({
    address: Yup.string()
    .min(5, 'full address details is required')
    .required('Address is required'),
    busStop: Yup.string()
    .min(3, 'Too short')
    .required('Bus stop is required'),
  
    country: Yup.string()
    .required('Please select a country'),
   
    region: Yup.string()
    .required('Please select a state')

 });

 export const HomeTownSchema = Yup.object().shape({
  familyName: Yup.string()
   .min(3, 'full address details is required')
   .required('Address is required'),

   address: Yup.string()
   .min(3, 'Too short')
   .required('Bus stop is required'),
   
   nearestBusStop: Yup.string()
   .min(3, 'Too short')
   .required('Bus stop is required'),

 
   country: Yup.string()
   .required('Please select a country'),
  
   state: Yup.string()
   .required('Please select a state')

})

 export const ResultSchema = Yup.object().shape({

   educationalBackground: Yup.string().required('Required'),
   schoolName: Yup.string().required('Required'),
   grade: Yup.string(),
   year: Yup.number('Input must be a number').required('Required')

 })

 export const PreviousEmployerSchema = Yup.object().shape({
    endDate: Yup.string().required('Enter your start date'),
    startDate: Yup.string().required('Enter your end date'),
    companyName: Yup.string().required("company's name is required"),
    companyAddress: Yup.string().required("company's address is required"),
    country:Yup.string(),
    state: Yup.string(),
    companyEmail: Yup.string().email('Invalid email'),
    postHeld: Yup.string('Input not valid'),
    salary: Yup.number('must be a number').required('This field is required'),
    reasonLeaving: Yup.string().required('This field is required'),
    outstandingLoan: Yup.string('Input not valid'),
    paymentMethod: Yup.string('Input not valid'),

 })

 export const RefereeSchema = Yup.object().shape({
    fullName: Yup.string().required("Referee's full name is required"),
    officeAddress: Yup.string().required('Office address is required'),
    phoneNumber: Yup.string().required('phone number is required'),
    occupation: Yup.string().required('This field is required'),
    emailAddress: Yup.string().email('Invalid email').required('Email is required'),
 })

 export const GuarantorSchema = Yup.object().shape({
   fullName: Yup.string()
   .min(3, 'Name is too short!')
   .max(20, 'Name istoo long!')
   .required('Name is required'),

   guarantorName: Yup.string()
   .min(3, 'Name is too short!')
   .max(20, 'Name istoo long!')
   .required('Name is required'),

   occupation: Yup.string()
   .required('This field is required'),

   position: Yup.string(),
  level: Yup.number(),

  officeName: Yup.string()
  .required('This field is required'),

  cac: Yup.string(),

  officeAddress: Yup.string()
  .required('This field is required'),
  
  officeTelephone: Yup.string()
  .required('This field is required'),
  
   emailAddress: Yup.string().email('Invalid email').required('Email is required'),

  residentialAddress: Yup.string()
   .required('This field is required'),

mobileNumber: Yup.number()
   .required('This field is required'),

  relationship: Yup.string()
   .required('This field is required'),

   nationality: Yup.string()
   .required('This field is required'),

   fullAddress: Yup.string()
   .required('This field is required'),

  applicantName: Yup.string()
   .required('This field is required'),
 });


 export const CreditCheckSchema = Yup.object().shape({
//   phoneNumber: Yup.number('Must be a number').required('phone number is required'),
   bvn: Yup.string()
   .length(10, 'Enter correct code').matches(/[0-9]+/gi, "Enter number only")
   .required('Bvn number is required')
 })

 export const nyscSchema = Yup.object().shape({
    year: Yup.number('Must be a number').required('This field is required'),
 })
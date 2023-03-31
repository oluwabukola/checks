import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {  FormText, FormLink } from '../Login/Login.elements';
import { FormBase, Form, FormInput, FormSubmit,FormError, FormTitle} from '../CandidateSetup/CandidateLogin/CandidateLogin.elements'
import { useForm } from 'react-hook-form';
import { CircleLoader } from 'react-spinners';
import { css } from '@emotion/core';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {ValidateError, CandidatesContainer} from './Register.elements'
import {Registration} from '../../store/External/Actions/Authentication';

import { useHistory } from 'react-router-dom';

const schema = yup.object().shape({
    name: yup.string().required('This field is required'),
    emailAddress: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('This field is required'),
    confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
  });

const Register = (props) => {

    const registerData = useSelector(state => state.login);

    const loaderCss = css`
    margin: 150px auto 10px auto;
    border-color:white;
    `
    const { register, handleSubmit} = useForm({
        resolver: yupResolver(schema),
      });
   
    const dispatch = useDispatch()
    
    const history = useHistory();
    // const isInvalid = name === '' || emailAddress === ''
    //     || password === '' || confirmPassword === '';

  
     const onSubmitHandler = (data) => {
        const Data = {
            name: data.name,
            email:data.emailAddress,
            password: data.password,
        }
        dispatch(Registration(Data, props))
    }
       
    return (
        <>
        <CandidatesContainer>
            <Form>
               
                {/* {error && <FormError>{error}</FormError>} */}
                <FormBase  onSubmit={handleSubmit(onSubmitHandler)} >
                <FormTitle>Sign Up</FormTitle>
                    <FormInput placeholder='Name'  type="text"
                     {...register("name")}
                     />
                        {/* <ValidateError>{errors.name?.message}</ValidateError> */}
                    
                    <FormInput placeholder='Email address' type="email" 
                     {...register("emailAddress")}
                        />
                        {/* {errors.emailAddress  && <ValidateError>{errors.emailAddress}</ValidateError>} */}
                    
                    <FormInput type="password" placeholder="password"
                    {...register("password")}
                         />
                        {/* {errors.password  && <ValidateError>{errors.password}</ValidateError>}                */}
                    <FormInput type="password" placeholder="confirm password"
                        {...register("confirmPassword")}
                         />
                        {/* {errors.confirmPassword  && <ValidateError>{errors.confirmPassword}</ValidateError>} */}
                    {/* disabled={isInvalid} */}
                   <FormSubmit  type="submit"  onSubmit={handleSubmit(onSubmitHandler)}>
                   { registerData.loading && <CircleLoader color="#fff" height={50} width={50}  /> } Sign Up
                       </FormSubmit>
                </FormBase>
               <FormText>Already a user? <FormLink to='/'>Login</FormLink></FormText>
            </Form>
            </CandidatesContainer>
        </>
    )
}

export default Register;

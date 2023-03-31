import React, { useState } from 'react';

import { FormText, FormLink, CandidatesContainer } from './Login.elements';
// import Loader from "react-loader-spinner";
import {
    FormBase, Form, FormInput, FormSubmit,
    FormError, FormTitle
} from '../CandidateSetup/CandidateLogin/CandidateLogin.elements'
import { useHistory } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { loginUser, updatedLogin } from '../../store/actions/loginActions';
 import { CircleLoader } from 'react-spinners';
// import { BeatLoader } from 'react-spinners';

import { css } from '@emotion/core';
import { withRouter } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from '../VerificationForms/ValidatingInput/ValidatingInput';

const Login = (props) => {
   
    
    const loginData = useSelector(state => state.login);
    console.log('login reducer', loginData);
    
    // const isInvalid = password === '' || emailAddress === '';

    const loaderCss = css`
        display: flex;
        justify-content: center;
        // margin-top: 15rem;
        // border-color:white;
        `;
    const dispatch = useDispatch();

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(loginSchema)
      });
      
      const onSubmit = (data) => {
    
          dispatch(loginUser(data, props));
        reset();
      };
   
    return (
        <>
         
         <CandidatesContainer>    
                <Form>
                <FormBase onClick={handleSubmit(onSubmit)}>
                    <FormTitle >Sign In</FormTitle>

                    <FormInput type="email" id='email'
                        {...register("email")} type='email' placeholder='email address'   
                    />

                    <FormInput type="password" id='password'
                        {...register("password")} type='password' placeholder='enter password'   
                    />
                    {/* disabled={isInvalid} */}
                        
                        <FormSubmit  type="submit" onClick={handleSubmit(onSubmit)} >
                      { loginData.loading && <CircleLoader color="#fff" height={50} width={50}  /> } 
                            Login
                            </FormSubmit>
                </FormBase>
                <FormText>
                    New to IBC? <FormLink to='/register'>SignUp.</FormLink>
                </FormText>
                </Form>
                </CandidatesContainer>

        </>
    )   
}

export default withRouter(Login);



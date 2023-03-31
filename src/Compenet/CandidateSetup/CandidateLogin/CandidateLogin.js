import React, {useState} from 'react';
import { CircleLoader } from 'react-spinners';
import { css } from '@emotion/core';
import { withRouter } from "react-router";
import {
    FormBase, Form, FormInput, FormSubmit,
    FormError, FormTitle, CandidatesContainer
} from './CandidateLogin.elements';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { EmployeeLogin } from '../../../store/External/Actions/Authentication';
import { CANDIDATE_LOGIN } from '../../../store/External/Actions/ActionTypes';


const CandidateLogin = () => {
    const [error, setError] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const isInvalid = password === '' || emailAddress === '';
    const history = useHistory();
    
    const[loading, setLoading] = useState(false)

    const loaderCss = css`
        margin: 150px auto 10px auto;
        border-color:white;
        `
        const dispatch = useDispatch();

    const handleLogin = (event) => {
    
        event.preventDefault();
        const data ={
            email: emailAddress,
            password: password
        }

         setLoading(true);

         dispatch(EmployeeLogin(data))
         .then( data =>{
             setLoading(false);
             console.log('candidate login', data)
            dispatch({type:CANDIDATE_LOGIN, payload: data.data.data.token})
             let toks= data !== null && data.data.data;
                const  access_tok  = toks.token;
                localStorage.setItem('candidateToken', access_tok);
          
            history.push(`/formView/${toks.employee.order_id}/${toks.employee.company_id}/${toks.employee.employee_id}`)
                } 
          ) ;
    }

    return (
        <>
           {loading ?
                    <div className="sweet-loading">
                        <CircleLoader css={loaderCss} size={100}
                            color={"#2b4f81"}
                            loading={true} />
                    </div> :
             <CandidatesContainer>
                <Form>
                    {
                    error && <FormError>{error}</FormError>
                    }
                <FormBase onSubmit={handleLogin}>
                    <FormTitle>Sign In</FormTitle>
                    <FormInput type="email" placeholder="Email address"
                     value={emailAddress}
                     onChange={({target}) => setEmailAddress(target.value)}
                    />
                    <FormInput type="password" placeholder="Password"
                        autoComplete="off" value={password}
                        onChange = {({target}) => setPassword(target.value)} 
                        />
                        
                        <FormSubmit disabled={isInvalid} type="submit" onClick={handleLogin} >Login</FormSubmit>
                </FormBase>
                
                </Form>
                </CandidatesContainer>
               
}
        </>
    )
}

export default CandidateLogin

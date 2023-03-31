import { AirlineSeatIndividualSuiteSharp } from "@material-ui/icons";
import { useState, useEffect } from "react";
import Validate from './Validation';
// import { useForm } from 'react-hook-form';

const useForm  = (Validate) => {
    const [values, setValues] = useState({
        name: '',
        emailAddress: '',
        password: '',
        confirmPassword: ''
    })
    const [errors, setErrors] = useState({});

    const handleChange =(e) =>{
        e.preventDefault();
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
        console.log(values.name)
    }

   const  handleRegister = (e) => {
       e.preventDefault();
        setErrors(Validate(values));
        console.log(values.name);
    }
    return {handleRegister, handleChange, values, errors};
};

export default useForm;
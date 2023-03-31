export default function ValidateInfo(values){
let errors = {};

if(!values.name){
    errors.name = 'Name is required';
}

if(!values.emailAddress){
    errors.emailAddress ='Email is required';
}

else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(values.emailAddress)){
    errors.emailAddress = 'Email address is invalid';
}

if(!values.password){
    errors.password = 'Password is required';
}

else if(values.password.length < 6){
    errors.password ='Password needs to be 6 characters or more';
}

if(!values.confirmPassword){
    errors.confirmPassword = 'Password is required';
}

else if(values.confirmPassword !== values.confirmPassword){
    errors.confirmPassword ='Passwords do not match';
}

return errors;
}
import React, { useState, useEffect } from 'react';
import {
     VerificationType, Title,TypeForm, Choice,
     Rule, InputContainer,  ChoiceSelection, Add, 
     Remove, Cart, CartContainer,  FormSubmission, Price, NumberofCandidates,
     CandidatesContainer, CandidatesLabel
} from './VerificationType.elements';
import { Container } from '../VerificationForms/EmployeeForm/Employee.elements';
import { SelectType } from '../../store/External/Actions/VerificationActions';
import { useDispatch,useSelector } from 'react-redux';
import { CreateTransaction } from '../../store/External/Actions/VerificationActions';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { ValidateError } from '../VerificationForms/EmployeeForm/Employee.elements';
import { CandidateInputSchema } from '../VerificationForms/ValidatingInput/ValidatingInput';
import { useHistory,Link, useLocation } from "react-router-dom";
import {IconButton, Badge} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { CircleLoader } from 'react-spinners';
import { css } from '@emotion/core';


import { CREATE_TRANSACTION } from '../../store/External/Actions/ActionTypes';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
const VerificationTypes = () => {
    const classes=useStyles();
    const verificationType = useSelector(state => state.externalVerification.verificationType);
    const Order = useSelector(state =>  state.externalVerification.Order);
     let user = Order !==null && Order.data.data.user_id;
     let order = Order!== null && Order.data !== null && Order.data.data.id;

     const loaderCss = css`
     display: flex;
     justify-content: center;
     // margin-top: 15rem;
     // border-color:white;
     `;
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(CandidateInputSchema)
      });
      
      const [loading, setLoading] = useState(false);
    const[user_id, setUserId] = useState(Number(user));
    const[order_id, setOrderId] = useState(order);
     const [cart, setCart] = useState([]);
     const [remove, setRemove] = useState(false);
     const [count, setCount] = useState(cart.length);
    
    const dispatch = useDispatch();
      
    let history = useHistory();
    
    useEffect(() =>{
        dispatch(SelectType());
    }, [] );

    const onSubmit = (data)=> {   
    let newCart = {
        cart: cart,
        total:data.candidateNumber
    }
   
   
    dispatch(CreateTransaction(newCart))
    .then( data =>{
        if(data.status !== null && data.status === 200){
            
            console.log('dat', data.data.data)
             dispatch({type: CREATE_TRANSACTION, payload: data.data.data})
             history.push(`/external/payment/${user_id}/${order_id}`);
           
            // history.push(`/orders/${user_id}/${order_id}`) 
        }
           
        } )
         
      }

    const pushToCart = (choice) => {
        const transaction ={
            order_id,
             type_id:choice.id,
             price:choice.price
        }
        if(cart.length !==0){
            let check = cart.findIndex(each=>each.type_id == choice.id)
            if(check == -1){
                setCart([...cart, transaction]);
                setCount(count => ++count)
                setRemove(true);
            }
        }
        else{
            setCart([...cart, transaction]);
            setRemove(true);
            setCount(count => ++count);
        }
   }

   const RemoveFromCart = (choice) => {
     let removed =  cart.filter(x => x.type_id !== choice.id );
     setCart(removed);
     setCount(count => --count);
   }

    return (
        <>
        <Container>
                <VerificationType>
                    <Title>Choose verification type(s)</Title>
                    <Rule />
                    <TypeForm>
                        {
                            verificationType !== null && verificationType.map((choice) =>{
                                return <InputContainer key={choice.id}>
                                    <Choice>{choice.name}</Choice>
                                    <ChoiceSelection>
                                        <Add  onClick={() => pushToCart(choice)} choice>Add</Add>
                                        <Price>&#8358;{choice.price}</Price>
                                        {
                                          remove && <Remove onClick={() => RemoveFromCart(choice)} >Remove</Remove>

                                        }
                                       
                                    </ChoiceSelection>
                            </InputContainer>
                            })
                        }
                        <CandidatesContainer>
                            <CandidatesLabel for='candidate'>Number of Candidates</CandidatesLabel>
                            <ChoiceSelection>
                        <NumberofCandidates  name='candidateNumber' type='text' placeholder='Number of candidates'
                        {...register("candidateNumber")}></NumberofCandidates>
                        
                        </ChoiceSelection>
                        {
                        errors.candidateNumber  && <ValidateError>{errors.candidateNumber.message}</ValidateError>
                        } 
                        </CandidatesContainer>

                    </TypeForm>
                    <FormSubmission   onClick={handleSubmit(onSubmit)} >
                      
                        <span>Create</span></FormSubmission> 
                    <CartContainer>
                    <div className={classes.button}>
                    <IconButton component={Link} to='/cart' aria-label='show cart items' color='inherit'>
                        <Badge badgeContent={count} color='secondary'>
                            <ShoppingCart />
                        </Badge>
                     </IconButton>
                    {/* <Badge badgeContent={count} color='primary'>
                    <Cart className="fas fa-cart-plus"></Cart>
                        </Badge> */}
                        </div>
                    </CartContainer>
                    
                </VerificationType>
                </Container>
        </>
    )
}

export default VerificationTypes

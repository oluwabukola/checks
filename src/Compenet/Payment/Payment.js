import React, {useState} from 'react';
import {Container} from '../VerificationForms/EmployeeForm/Employee.elements';
import { PaymentContainer, TopContainer, CardLogo, PayNow ,
Summary, TypeSelected, PriceSelected, SummaryContent, TotalPrice} from './Payment.elements';
import { useForm } from "react-hook-form";
import { usePaystackPayment } from 'react-paystack';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';



const Payment = () => {
   
    const Created = useSelector(state => state.externalVerification.createdTransaction)
    console.log('Transactionnnnn created payment', Created);
    const config = {
        reference: (new Date()).getTime().toString(),
        email: "ore@example.com",
        amount: 20000,
        publicKey: 'pk_test_dsdfghuytfd2345678gvxxxxxxxxxx',
    };
    
    // you can call this function anything
    const onSuccess = (reference) => {
      // Implementation for whatever you want to do with reference and after success call.
      console.log(reference);
    };
    
    // you can call this function anything
    const onClose = () => {
      // implementation for  whatever you want to do when the Paystack dialog closed.
      console.log('closed')
    }
    

    const{register, watch, formState: {errors}} = useForm();
    const initializePayment = usePaystackPayment(config);
    return (
        <>
            <Container>
                <PaymentContainer>
                    <TopContainer>
                        <CardLogo />
                    </TopContainer>  
                    <Summary>
                        {
                       Created.transaction !==null && Created.transaction.map(x=>
                        <SummaryContent>
                        <TypeSelected>{x !== null && x.name}</TypeSelected>
                        <PriceSelected>{x !==null && x.price}</PriceSelected>
                        </SummaryContent>
                       )
                       }

                       <div><p>{Created !==null && Created.No_of_candidate }</p></div>
                       <SummaryContent>
                        <TypeSelected>Total Amount</TypeSelected>
                        <TotalPrice>{Created !==null && Created.Confirm_Order }</TotalPrice>
                        </SummaryContent>
                    </Summary>
                    {/* <NumberofCandidatesContainer>
                        <NumberofCandidates for="candidate">Number of candidates</NumberofCandidates>
                        <CandidatesInput type='text' id="candidate"
                        placeholder='Number of candidate(s)' 
                        {...register('candidate', {valueAsNumber:true})} />
                    </NumberofCandidatesContainer> */}

                    {/* <Cart>
                        <CartItems>
                          
                            <Item>Referee verification</Item>
                            <ItemPrice>$5</ItemPrice>
                        </CartItems>
                    </Cart> */}

                    <PayNow type='button'  onClick={() => {
                initializePayment(onSuccess, onClose)
            }}>Pay Now</PayNow>

                </PaymentContainer>
            </Container>
        </>
    )
}

export default Payment

import React, {useState} from 'react';
import {TransactionContainer, TransactionHistory, CardDetails, Title,
 VisaCard, MasterCard, CardLogoContainer, CardNumber, CardNumberContainer, RemoveCard,
CardContainer, PaymentContainer, PaymentTable, PaymentRow, PaymentHeading,
TableBody, PaymentData} from './Transaction.elements';
import { TableHead, TableRow } from '../Candidates/Candidates.elements';

const Transaction = () => {
    const [master, setMaster] =useState(true);
    return (
        <>
           <TransactionContainer>
           <CardDetails>
               <Title>Card Details</Title>
               <CardContainer>
               <CardNumberContainer>
                   <CardLogoContainer>
                       {
                           master ? <MasterCard></MasterCard>
                            :
                           <VisaCard></VisaCard>

                       }
                     
                   </CardLogoContainer>
                   <CardNumber>XXXX-XXXX-XXXX-1420</CardNumber>  
               </CardNumberContainer>
               <RemoveCard>Remove</RemoveCard>
               </CardContainer>
           </CardDetails>
               <TransactionHistory>
                   <Title>Payments History</Title>
                   <PaymentContainer>
                       <PaymentTable>
                           <TableHead >
                               <TableRow>
                               <PaymentHeading>Transaction ID</PaymentHeading>
                                   <PaymentHeading>Date</PaymentHeading>
                                   <PaymentHeading>Amount</PaymentHeading>
                                   <PaymentHeading>Status</PaymentHeading>
                               </TableRow>
                           </TableHead>
                           <TableBody>
                               <PaymentRow>
                                   <PaymentData>Jane</PaymentData>
                                   <PaymentData>judn </PaymentData>
                                   <PaymentData>abdnjmc</PaymentData>
                                   <PaymentData>wiodkhj</PaymentData>
                               </PaymentRow>
                           </TableBody>
                       </PaymentTable>
                   </PaymentContainer>
               </TransactionHistory>
             
           </TransactionContainer>
        </>
    )
}

export default Transaction

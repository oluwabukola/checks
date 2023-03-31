import React, {useState, useEffect} from 'react';
import {RequestContainer, CompanyRequestTable, TableHeading, TableRow,
TableHead,TableBody, TableData, ProcessLink} from './CompanyRequest.elements';
 import { useParams } from 'react-router';
 import { useDispatch, useSelector } from 'react-redux';
 import { CompanyOrders } from '../../store/LinkedInfo/Actions/companyActions';

const CompanyRequest = () => {
    const {user_id} = useParams();
     
     const dispatch = useDispatch();
       useEffect(() => {
           dispatch(CompanyOrders(user_id))
       }, [])
        const orders = useSelector(state => state.company.companyOrders)
        console.log('my orders', orders);
    // const request =[
    //     {
    //         id: 1,
    //         date: '16-09-2021',
    //         time: '2:00'
    //     },
    //     {
    //         id: 2,
    //         date: '10-09-2021',
    //         time: '4:00'
    //     },
    //     {
    //         id: 3,
    //         date: '5-09-2021',
    //         time: '12:00'
    //     },
    // ]
    return (
        <>
           <RequestContainer>
               <CompanyRequestTable>
                   <TableHeading>
                       <TableRow>
                           <TableHead>DATE</TableHead>
                           <TableHead>TIME</TableHead>
                           <TableHead>ACTION</TableHead>
                       </TableRow>
                       </TableHeading>
                       <TableBody>
                       {
                       orders ==null ? 'Loading..' :  orders.map( x =>{
                      return  <TableRow key ={x.id}>
                           <TableData>{x.created_at.split('T')[0]}</TableData>
                           <TableData>{x.created_at.split('T')[1]}</TableData>
                           <TableData><ProcessLink to={`/internal/allCandidates/${x.user_id}/${x.order_id}`}>Process</ProcessLink></TableData>
                       </TableRow>
                        } )
                }
                   </TableBody>
               </CompanyRequestTable>

           </RequestContainer>
        </>
    )
}

export default CompanyRequest

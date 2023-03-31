import React, {useState, useEffect} from 'react';
import { CreateVerification, VerificationWrapper, RequestWrapper,
    RequestContainer,Time,Request, RequestBody, RequestHead, TableHead, TableRow, 
    TableData, RequestTable, NoOrder, SmileText, Smiley}  from './Verification.elements';
import VerificationType  from '../VerificationType/VerificationType';
import { useHistory } from "react-router-dom";
import Candidates from '../Candidates/Candidates';
import {CreateOrder, GetOrder} from '../../store/External/Actions/VerificationActions';
import { useDispatch, useSelector } from 'react-redux';
import {IoGitPullRequestOutline} from 'react-icons/io5';
import {FaRegSmileWink} from 'react-icons/fa';
// import {CgSmileNone} from 'react-icons/cg';

import { CREATE_ORDER } from '../../store/External/Actions/ActionTypes';

const Verification = () => {
    const login = useSelector(state => state.login.login.user.id);
     const Orders= useSelector(state =>  state.externalVerification.getOrder)
  
    
    let history = useHistory();

    const dispatch = useDispatch();
    const [orders, setOrders] = [Orders]
    console.log('table status', orders);
    const [Id, setId] = useState(login);

    useEffect(() =>{
        dispatch(GetOrder(Id));
    }, [] );

    const openModal =  (event) => {
        event.preventDefault();
         const id ={
             Id
         }
            dispatch(CreateOrder(id))
             .then(  data =>{
                 dispatch({type: CREATE_ORDER, payload: data})
                  if(data!==null && data.status === 200){
                history.push('/external/verificationType')
                  } }  
         ) ;
    }

   
    return (
        <>
        <VerificationWrapper>
        <CreateVerification onClick={openModal} >Create Verification</CreateVerification>
            <RequestWrapper>
                { orders.length == 0 ?
                
                <NoOrder>
                   <Smiley> <FaRegSmileWink /> </Smiley>
                    <SmileText>No request made....</SmileText> 
                    </NoOrder> :
                <RequestTable>
                    <RequestHead>
                        <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead>Time</TableHead>
                            <TableHead>Process Request</TableHead>
                        </TableRow>
                    </RequestHead>
                    <RequestBody>
                    {orders && orders.map((x) =>
                    <TableRow key={x.order_id}>
                            <TableData>{x.created_at.split('T')[0]}</TableData>
                            <TableData>{x.created_at.split('T')[1]}</TableData>
                            <TableData>
                            {/* <IoGitPullRequestOutline /> */}
                            <Request key ={x.order_id} to={`/external/orders/${Id}/${x.order_id}`} >View</Request>
                            </TableData>
                            
                        </TableRow>
                    )}
                    </RequestBody>
                </RequestTable>
                }
                </RequestWrapper>
            {/* <CreateVerification onClick={openModal} >Create Verification</CreateVerification> */}
           
            </VerificationWrapper>
        </>
    )
}

export default Verification

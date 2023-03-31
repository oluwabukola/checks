import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { VerificationWrapper, VerificationContent,VerificationContentView, 
    VerificationChoice, ViewCandidate, ViewCandidateLink, ViewLink, LinkContainer,
    SignupLink, VerificationContentContainer, NoOrder, SmileText, Smiley} from '../Verification/Verification.elements';
    import { GetTransaction } from '../../store/External/Actions/VerificationActions';
    import { GET_TRANSACTION, GET_LINK } from '../../store/External/Actions/ActionTypes';
    import { CompanyLink } from '../../store/External/Actions/DisplayActions';
    import { useParams } from "react-router-dom";
    import {FaRegSmileWink} from 'react-icons/fa';
    

const Order = () => {
    const dispatch = useDispatch();
   
    const { user_id, order_id, employee_id, company_id } = useParams();
    const [getTransaction, setGetTransaction] = useState([])
    const [signLink, setSignLink] = useState([])
    useEffect(() =>{
        dispatch(GetTransaction(user_id, order_id))
        .then( data =>{
            let output = data.data.data;   
         dispatch({type:GET_TRANSACTION, payload:output})
           setGetTransaction(output)
        });
    }, [] );

    const handleLink = async() => {
        await dispatch(CompanyLink(order_id))
        .then( data =>{
            console.log('order data', data)
            setSignLink(data.data.data)
            console.log('Sign Link', signLink)
            dispatch({type: GET_LINK,  payload: data.data.data})
         })
    }
    return (
        <>
          <VerificationWrapper>
                    <ViewLink>
                        <ViewCandidate>
                        <ViewCandidateLink to={`/external/candidates/${order_id}`}>View</ViewCandidateLink>
                        </ViewCandidate> 
                        <LinkContainer>
                        <ViewCandidate onClick={handleLink}>
                        Link
                        </ViewCandidate>
                      { signLink !== null && signLink.map(x =>{
                          console.log(x)
                            return <SignupLink to ={`/external/employee_signup/${x}`} >{`localhost:3001/external/employee_portal/${x}`}</SignupLink>
                           }
                       ) 
                    }
                        </LinkContainer>
                        </ViewLink>

                       {  getTransaction == null ?
                       <NoOrder>
                   <Smiley> <FaRegSmileWink /> </Smiley>
                    <SmileText>No request made....</SmileText> 
                    </NoOrder> :
                 
                 <VerificationContent>
                    {
                    getTransaction !==undefined &&  getTransaction.map((x)  => {
                   return   <VerificationContentContainer yellow>
                    <VerificationContentView >
                        <VerificationChoice>{x.name !== null && x.name}</VerificationChoice>
                        </VerificationContentView>
                    </VerificationContentContainer>
                    } 
                    )}
                    
                </VerificationContent> 
                    }       
            </VerificationWrapper>
        </>
    )
}

export default Order

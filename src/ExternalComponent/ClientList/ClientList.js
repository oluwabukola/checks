import React, {useState, useEffect} from 'react';
import {Container, CompanyContainer, CompanyContent} from './ClientList.elements';
import { AllCompanies } from '../../store/LinkedInfo/Actions/companyActions';
import { useDispatch, useSelector } from 'react-redux';
import Nav from '../../Nav';

const ClientList = () => {
     const dispatch = useDispatch();
    
    useEffect(() => {
       dispatch(AllCompanies());
        
    }, [])

    const comp = useSelector(state => state.company.companies);
    

    return (
        <>
        <Container>
      
            {
            comp == null ? 'Loading...' : 
             comp.map( x=> {
               return  <CompanyContainer key ={x.id}>
                <CompanyContent to={`/internal/companyRequest/${x.id}`}>{x.name}</CompanyContent>
            </CompanyContainer>
             }
             )  
            }
           
           
            </Container>
        </>
    )
}

export default ClientList

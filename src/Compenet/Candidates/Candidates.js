import React, {useState, useEffect} from 'react';
import {CandidatesWrapper, CandidatesTable, TableHead, TableRow,
    TableHeading, CandidatesTableBody, CandidatesTableData, CandidatesDetails
} from './Candidates.elements';
import{NoOrder, SmileText, Smiley} from '../Verification/Verification.elements';
import { useDispatch , useSelector} from 'react-redux';
import { useParams } from 'react-router';
import { AllEmployee } from '../../store/External/Actions/DisplayActions';
import {IoPersonCircleOutline} from 'react-icons/io5';


const Candidates = () => {
    const dispatch = useDispatch();
    const {order_id } = useParams();
    useEffect(() =>{
       dispatch(AllEmployee(order_id));
    }, [] );
    const All = useSelector(state => state.externalDisplay.getCandidate);
    console.log('All', All);
     
    return (
        <>
          <CandidatesWrapper>
              { All == undefined || All.length ==0 ? 
                <NoOrder>
                   <Smiley> <IoPersonCircleOutline /> </Smiley>
                    <SmileText>No candidate available....</SmileText> 
                    </NoOrder> :

              <CandidatesTable>
                  <TableHead>
                      <TableRow>
                        <TableHeading>S/N</TableHeading>
                          <TableHeading>First Name</TableHeading>
                          <TableHeading>Last Name</TableHeading>
                          <TableHeading>Email</TableHeading>
                          <TableHeading>Status</TableHeading>
                          <TableHeading>Details</TableHeading>
                      </TableRow>
                  </TableHead>
                  <CandidatesTableBody>
                      {
                          All && All.map( (person) =>
                      <TableRow>
                      <CandidatesTableData>{person.index }</CandidatesTableData>
                          <CandidatesTableData>{person.first_name}</CandidatesTableData>
                          <CandidatesTableData>{person.last_name}</CandidatesTableData>
                          <CandidatesTableData>{person.email}</CandidatesTableData>
                          <CandidatesTableData>In progress</CandidatesTableData>
                          <CandidatesDetails to={`/external/candidatesInformation/${person.employee_id}`}>Details</CandidatesDetails>
                      </TableRow>
                      )
 }
                     
                  </CandidatesTableBody>
              </CandidatesTable>
}
              </CandidatesWrapper> 
        </>
    )
}

export default Candidates

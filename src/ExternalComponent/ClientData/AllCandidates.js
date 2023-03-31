import React, {useState, useEffect} from 'react';
import {CandidatesWrapper, CandidatesTable, TableHead, TableRow,
    TableHeading, CandidatesTableBody, CandidatesTableData, CandidatesDetails
} from '../../Compenet/Candidates/Candidates.elements';
import { useDispatch , useSelector} from 'react-redux';
import { useParams } from 'react-router';
import { AllEmployee } from '../../store/External/Actions/DisplayActions';

const AllCandidates= () => {
     const dispatch = useDispatch()
     const {user_id, order_id} = useParams();
    useEffect(() =>{
        dispatch(AllEmployee(order_id));
     }, [] );
     const All = useSelector(state => state.externalDisplay.getCandidate);
     console.log('All', All);

    return (
        <>
          <CandidatesWrapper>
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
                      All == null ? 'Loading...' : All.map((x, index) => {
                return  <>
                        <TableRow key ={x.id}>
                         <CandidatesTableData>{index + 1}</CandidatesTableData>
                          <CandidatesTableData>{x.first_name}</CandidatesTableData>
                          <CandidatesTableData>{x.last_name}</CandidatesTableData>
                          <CandidatesTableData>{x.email}</CandidatesTableData>
                          <CandidatesTableData>In progress</CandidatesTableData>
                          <CandidatesDetails to={`/internal/linkedCandidates/${x.order_id}/${x.company_id}/${x.employee_id}`}>Details</CandidatesDetails>
                      </TableRow>
                      </>
                      })}

                  </CandidatesTableBody>
              </CandidatesTable>
              </CandidatesWrapper> 
        </>
    )
}

export default AllCandidates;


import React, {useState, useEffect} from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import {useSelector, useDispatch } from 'react-redux';
import ProcessView from '../../Compenet/CandidateInformation/Process/ProcessView';
import EmployeeData from '../../Compenet/CandidateInformation/EmployeeData';
import { GetTransaction } from '../../store/External/Actions/VerificationActions';


const LinkedView = () => {
  const {order_id, company_id, employee_id } = useParams();
  // const Transaction = useSelector(state => state.externalVerification.getTransaction);
  //   Transaction.forEach(item => 
  //   console.log('item', item.form)
  //   )

  const [getTransaction, setGetTransaction] = useState(null);
  const dispatch = useDispatch();
  
  useEffect(() =>{
    dispatch(GetTransaction(company_id,  order_id))
    .then( data =>{
     
        let output = data.data.data; 
        console.log('outputtt', output)  
       setGetTransaction(output)
    });
}, [] );
console.log('get Transaction', getTransaction)

return (
        
  <div className="tabs">  

    <Tabs defaultActiveKey ='EmoployeeData' id={`${order_id/company_id/employee_id}`} >
    <Tab eventKey={EmployeeData} title='Employee Data' >
    <EmployeeData id={`${order_id/company_id/employee_id}`}  />
     </Tab>

    {getTransaction !== null && getTransaction.map( item =>
      item.form &&
      <Tab eventKey={item.form} title={item.form} >
    <ProcessView View={item.form} id={`${order_id/company_id/employee_id}`}  />
     </Tab> 
     )
     }
    
        </Tabs>
          </div>  
)

 }
export default LinkedView;


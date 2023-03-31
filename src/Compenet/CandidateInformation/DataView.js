import React, {useState} from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import ProcessView from './Process/ProcessView';
import EmployeeData from './EmployeeData';


const DataView = () => {
  const {order_id, company_id, employee_id } = useParams();
  const Transaction = useSelector(state => state.externalVerification.getTransaction);
    Transaction.forEach(item => 
    console.log('item', item.form)
    )

return (
        
  <div className="tabs">  

    <Tabs defaultActiveKey ='EmoployeeData' id={`${order_id/company_id/employee_id}`} >
    <Tab eventKey={EmployeeData} title='Employee Data' >
    <EmployeeData id={`${order_id/company_id/employee_id}`}  />
     </Tab>

    {Transaction.map( item =>
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
export default DataView;








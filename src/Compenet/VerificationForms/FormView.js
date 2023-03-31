import React, {useState, useEffect} from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import ProcessPage from './Process/ProceesPage';
import { useDispatch } from 'react-redux';
import { GetTransaction } from '../../store/External/Actions/VerificationActions';
import { NavBar, ProfileContainer, ImageContainer, NameContainer, LogoutContainer } from './FormViews.elements';
import {IoPersonCircleOutline} from 'react-icons/io5';
import { useHistory } from 'react-router';



const FormView = (prop) => {
  const [getTransaction, setGetTransaction] = useState(null);
  const dispatch = useDispatch();
  const history= useHistory();
  
  useEffect(() =>{
    dispatch(GetTransaction(company_id,  order_id))
    // dispatch(GetTransaction(user_id, order_id))
    .then( data =>{
        let output = data.data.data; 
       setGetTransaction(output)
    });
}, [] );
const handleLog = () => {
  history.push('/candidatesLogin');
}

  const { order_id,  company_id, employee_id  } = useParams();

return (
  <div className="formTab"> 
  <NavBar>
    <ProfileContainer>
      <ImageContainer>
        <IoPersonCircleOutline />
      </ImageContainer>
      <NameContainer></NameContainer>
    </ProfileContainer>
    <LogoutContainer>
      <button type='button' onClick={handleLog}>Log out</button>
    </LogoutContainer>
  </NavBar>
    <Tabs defaultActiveKey ='Employee Form'  >
    { getTransaction !== null && getTransaction.map( item =>
    item.form &&
      <Tab eventKey={item.form} title={item.form}  id={`${item.order_id}`} >
    <ProcessPage page={item.form} id={`${item.order_id}/${item.company_id}/${item.employee_id}`} /> 
    
     </Tab> 
     )
     }
        </Tabs>
          </div>  
)

 }
export default FormView;




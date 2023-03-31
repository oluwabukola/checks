import guarantorReducer from './guarantorReducer';
import employeeReducer from './employeeReducer';
import { combineReducers } from 'redux';
import regionReducer from './regionReducer';
import resultReducer from './resultReducer';
import employerReducer from './employerReducer';
import verificationReducer from './verificationReducer';
import chartReducer from './chartReducer';
import refereeReducer from './refereeReducer';
import loginReducer from './loginReducer';
import settingReducer from './settingReducer';
import ExternalVerificationReducer from '../External/Reducers/VerificationReducers';
import ExternalFormReducer from '../External/Reducers/FormReducers';
import ExternalDisplayReducer from '../External/Reducers/DisplayReducers';
import errorReducer from '../../store/ErrorReducer';
import  companyReducer from  '../LinkedInfo/Reducers/companyReducer'


const Reducer = combineReducers({
    guarantor: guarantorReducer,
    employee: employeeReducer,
    region: regionReducer,
    result: resultReducer,
    referee: refereeReducer,
    employer: employerReducer,
    verification: verificationReducer,
    chart: chartReducer,
    login: loginReducer,
    settings: settingReducer,
    externalVerification: ExternalVerificationReducer,
    externalForm: ExternalFormReducer,
    externalDisplay: ExternalDisplayReducer, 
    errorReducer: errorReducer,
    company: companyReducer,
});
const rootReducer = (state, action) => {
    return Reducer(state, action)
}
export default rootReducer;
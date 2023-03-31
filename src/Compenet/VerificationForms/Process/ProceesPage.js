import React from 'react';
import { Proceess } from './ProcessPage.elements';
import ResultForm from '../ResultForm/ResultForm';
import RefereeForm from '../RefereeForm/RefereeForm';
import Nysc from '../Nysc/Nysc';
import PreviousEmployer from '../PreviousEmployer/PreviousEmployer';
import ResidentialAddress from '../ResidentalForm/ResidentialAddress';
import HomeTown from '../HomeTown/HomeTown';
import GuarantorForm from '../GuarantorForm/GuarantorForm';
import CreditChecks from '../CreditChecks/CreditChecks';
import CriminalStatus from '../CrimalStatus/CriminalStatus';


const ProceesPage = (prop) => {
    return (
        <>
          {
         prop.page == 'ResidentialAddress' &&   <ResidentialAddress />
          }

            {
         prop.page == 'HomeTown' &&   <HomeTown />
          }


           {
         prop.page == 'CreditChecks' &&   <CreditChecks />
          }

            {
         prop.page == 'CriminalStatus' &&   <CriminalStatus />
          }

          {
         prop.page == 'ResultForm' &&   <ResultForm />
          }

           {
               prop.page == 'RefereeForm' && <RefereeForm  />
            }

          {
            prop.page == 'GuarantorForm' &&   <GuarantorForm />
            
            }

           {
            prop.page == 'Nysc' &&   <Nysc />
            }

            {
            prop.page == 'PreviousEmployer' &&   <PreviousEmployer />
            }

        </>
    )
}

export default ProceesPage


import React from 'react';
import { proceessView } from './ProcessView.elements';
import RefereeData from '../RefereeData';
import CreditChecksData from '../CreditChecksData';
import ResidentialData from '../ResidentialData';
import ResultsData from '../ResultsData';
import CriminalStatusData from '../CriminalStatusData';
import HomeTownData from '../HomeTownData';
import GuarantorData from '../GuarantorData';
import NyscData from '../NyscData';
import PreviousEmployerData from '../PreviousEmployerData';
import EmployeeData from '../EmployeeData';



const ProceesView = (prop) => {
    return (
        <>
       
        
          {
         prop.View == 'ResidentialAddress' &&   <ResidentialData />
          }

            {
         prop.View == 'HomeTown' &&   <HomeTownData />
          }


           {
         prop.View == 'CreditChecks' &&   <CreditChecksData />
          }

            {
         prop.View == 'CriminalStatus' &&   <CriminalStatusData />
          }

          {
         prop.View == 'ResultForm' &&   <ResultsData />
          }

           {
               prop.View == 'RefereeForm' && <RefereeData  />
            }

          {
            prop.View == 'GuarantorForm' &&   <GuarantorData />
            
            }

           {
            prop.View == 'Nysc' &&   <NyscData />
            }

            {
            prop.View == 'PreviousEmployer' &&   <PreviousEmployerData />
            }
 
        
      
        </>
    )
}

export default ProceesView


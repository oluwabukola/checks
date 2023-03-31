import styled from 'styled-components';

export const Container = styled.div`

padding: 0 20rem;
display: flex;
flex-direction: column;
justify-content: center;
margin-top: 6rem;

`;

export const GridContainer = styled.div`
display: flex;
flex-direction: column;
width: 50%
justify-content: center;
align-items: center;
padding: 1rem 1.2rem;
border: 2px solid #ccc;
border-radius: 5px;
padding: 0 0 1rem 0;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

// export const GridItem = styled.div`
// border: 2px solid #ccc;
// border-radius: 5px;
// padding: 0 0 1rem 0;
// box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
// `;
 export const Subtitle = styled.p`
 
 `;

export const CartDetails = styled.div`
// display: flex;
// margin-top: 10%;
// width: 100%;
// justify-content: space-between;
`;

export const EmptyButton = styled.button`
min-width: 150px;
@media (max-width = 760px){
    margin-bottom: 5px;
}

@media (max-width = 480px){
    margin-right: 20px;
}
`;
 export const CheckoutButton = styled.button`
 min-width: 150px;
 
 `;

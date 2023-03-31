import styled from "styled-components";

export const NavBar = styled.nav`
background-color: white;
padding: 1.5rem 0.5rem;
position: sticky;
top: 0;
box-shadow: 14px 14px 20px #cbced1, -14px -14px 20px white;
margin-bottom: 2rem;
display: flex;
justify-content: space-between;
align-items: center;
`
export const ProfileContainer = styled.div`
padding: 0 0.5rem;
`;

export const ImageContainer = styled.div`
svg{
    font-size: 3rem;
     color: #2b4f81;
    
}
`;
 export const NameContainer = styled.div`
 `;

 export const LogoutContainer = styled.div`
padding: 0 0.5rem;
button{
    border: none !important;
    outline: none !important;
    pointer: cursor;
    font-size: 1rem;
    font-weight: 600 !important;
    color: rgba(0,0,0, 0.7) !important;
    padding: 0.5rem 1.2rem !important;
    border: 2px solid #2b4f81 !important;
    border-radius: 30px;
    background-color: #fff !important;
}

 `;
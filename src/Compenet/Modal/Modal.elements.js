import styled from 'styled-components';

export const Background = styled.div`
width: 100%;
 height: 100vh;
top: 0;
left: 0;
background: rgba(0,0,0,0.4);
position: fixed;
display: flex;
justify-content: center;
align-items: center;
`;

export const ModalWrapper = styled.div`
width: 30rem;
box-shadow: 0 5px 16px rgba(0, 0, 0, 0.1);
background: #fff;
color: #2b4f81;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 1rem;
z-index: 10;
border-radius: 20px;
box-sizing: border-box;
position: relative;
 `;

 export const CloseModal = styled.button`
 font-size: 1rem;
 border-radius: 50%;
 padding: 10px 15px;
 color: #020659; 
 border: none;
 outline: none;
 font-weight: 600;
 pointer: cursor;
 position: absolute;
 right: 0;
 top: 0;
 
 `;

export const ModalTitle = styled.h4`
margin: 0;

 `;

export const DragContainer = styled.div`
width: 50%;
display: flex;
justify-content: center;
align-items: center;
padding: 2rem;
flex-direction: column;
border: 2px dashed #2b4f81;
border-radius: 20px;
margin: 0  0  0.5rem 0;
/* background-color:  #2b4f81; */
background-color: #cbced130;

 `;

export const Span = styled.h6`
margin: 1rem 0 1rem 0;

`;

export const FileInput = styled.input`
width: 100%;
display: none;
background: blue;
`;


export const DragText = styled.h6`
margin: 0;
 `;


export const BrowseFile = styled.button`
 outline: none;
 border: none;
 padding: 0.5rem 1rem;
 background: #2b4f81;
 color: #fff;
 font-size: 1rem;
 font-weight: 600;
 border-radius: 50px;
 cursor: pointer;
box-shadow: 14px 14px 20px grey, -14px -14px 20px white;

 `;

 
 export const FileDisplayContainer = styled.div`
width: 100%;
cursor: pointer;
display: flex;
margin-bottom: 5px;
background: #fff;
justify-content: space-between;
align-items: center;
padding: 5px 10px;
box-shadow: 7px 7px 10px grey, -7px -7px 10px white;
 
 `;

 export const FilePreviewContainer = styled.div`

display: flex;
padding: 5px 10px;
align-items: center;

`;

export const FileName = styled.div`
padding: 5px 10px;
`;
 export const FileType = styled.div`
 padding:5px 10px;
 `;

 export const FileSize = styled.div`
 padding: 5px 10px;
 `;
export const FileLogo = styled.i`
 font-size: 2rem;
 color:#020659;
 padding:5px 10px;
 `;

export const FileRemove = styled.div`
font-size: 1rem;
color: #2b4f81;
font-weight: 800;
padding: 5px 10px;
justify-self: flex-end;
 `;

 export const UploadButton = styled.button`
 outline: none;
 border: 1px solid #020659;
 padding: 5px 10px;
 color: #2b4f81
 `
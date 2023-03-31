import React, {useState, useRef, useEffect} from 'react';
import {
    Background, ModalWrapper, ModalTitle, DragContainer,
    DragText, BrowseFile, Span, FileInput, FilePreviewContainer,
     FileDisplayContainer, FileLogo, FileType, FileRemove, FileSize, FileName, UploadButton,
     CloseModal
} from './Modal.elements';

const Modal = ({showModal, setShowModal}) => {
   const fileInputRef = useRef()
   const [selectedFiles, setSelectedFiles] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [validFiles, setValidFiles] = useState([]);
    const [files, setFiles] = useState({});


    const dragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }

    
    const dragEnter = (e) => {
        e.preventDefault();
    }
    
    const dragLeave = (e) => {
        e.preventDefault();
    }

    const handleFiles = (files) => {
        
        for(let i = 0; i < files.length; i++) {
            if (validateFile(files[i])) {
                // add to an array so we can display the name of file
                setSelectedFiles(prevArray => [...prevArray, files[i]]);
            
            } else {
                files[i]['invalid'] = true;

                // add a new property called invalid
                // add to the same array so we can display the name of the file
                // set error message
                setErrorMessage('File type not permitted');
            }
        }

    }

    const validateFile = (file) => {
        const validTypes = ['filename/xlsx', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
        if (validTypes.indexOf(file.type) === -1) {
            
            return false;
        }
        
        return true;
    }

    const fileSize = (size) => {
        if (size === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(size) / Math.log(k));
        return parseFloat((size / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    const fileType = (fileName) => {
        return fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length) || fileName;
    }

    useEffect(() => {
        let filteredArray = selectedFiles.reduce((file, current) => {
            const x = file.find(item => item.name === current.name);
            if (!x) {
                return file.concat([current]);
            } else {
                return file;
            }
        }, []);
        setValidFiles([...filteredArray]);
    
    }, [selectedFiles]);


    const removeFile = (name) => {
        const validFileIndex = validFiles.findIndex(e => e.name === name);
        validFiles.splice(validFileIndex, 1);
        setValidFiles([...validFiles]);
        const selectedFileIndex = selectedFiles.findIndex(e => e.name === name);
        selectedFiles.splice(selectedFileIndex, 1);
        setSelectedFiles([...selectedFiles]);
    }

    const fileDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        
        if (files.length) {
            handleFiles(files);
        }
    }
  
  
    const fileInputClicked = () => {
        fileInputRef.current.click();
    }

    const filesSelected = () => {
        if (fileInputRef.current.files.length) {
            handleFiles(fileInputRef.current.files);
        }
    }
    return (
        <>
            
                {/* <ModalWrapper> */}
                    {/* <ModalTitle>Upload!</ModalTitle> */}
                    {/* <UploadButton>upload file</UploadButton> */}
                    {/* <DragContainer onDragOver={dragOver}
                        onDragEnter={dragEnter}
                        onDragLeave={dragLeave}
                            onDrop={fileDrop} >
                            
                            <FileInput type='file' name='file-browser-input'
                                onDragOver={dragOver}
                                ref={fileInputRef}
                                onDrop={fileDrop}
                                onChange={filesSelected} />
                            
                            <DragText>drag and drop files here</DragText>
                            <Span>or</Span>
                           
                             <BrowseFile onClick={fileInputClicked}>browse file</BrowseFile>
                       
                    </DragContainer>
                    {
                        validFiles.map((data, i) => 

                    <FileDisplayContainer key={i}>
                    <FilePreviewContainer>
                    <FileLogo className="far fa-file"></FileLogo>
                    <FileName>{data.name}</FileName>
                    <FileType>{fileType(data.name)}</FileType>
                    <FileSize>({fileSize(data.size)})</FileSize>
                    </FilePreviewContainer>
                    <FileRemove onClick ={() => removeFile(data.name)}> X </FileRemove>
                    
                </FileDisplayContainer>
                        )} */}
                {/* </ModalWrapper> */}
        </>
    )
}

export default Modal

import React, { useState } from 'react';
import Navbar from '../../components/navbar/navbar';
import UserSideBar from '../../components/sidebar/UserSideBar';
import axios from 'axios'


export default function Upload() {
    const [fileInputState, setFileInputState] = useState('');
    const [previewSource, setPreviewSource] = useState('');
    const [selectedFile, setSelectedFile] = useState();
    const [successMsg, setSuccessMsg] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const handleFileInputChange = (e) => { 
        const file = e.target.files[0];
        previewFile(file);
        setSelectedFile(file);
        setFileInputState(e.target.value);
    };

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        };
    };

    const handleSubmitFile = (e) => {
        e.preventDefault();
        if (!previewSource) return;
        uploadImage(previewSource)
        
        // const reader = new FileReader();
        // reader.readAsDataURL(selectedFile);
        // reader.onloadend = () => {
            // uploadImage(reader.result);
        // };
        // reader.onerror = () => {
        //     console.error('AHHHHHHHH!!');
        //     setErrMsg('something went wrong!');
        // };
    };

    const uploadImage = async (base64EncodedImage) => {
        try {
            // await fetch('/api/upload', {
            //     method: 'POST',
            //     body: JSON.stringify({ data: base64EncodedImage }),
            //     headers: { 'Content-Type': 'application/json' },
            // });
            console.log(base64EncodedImage)
            const response = await axios({
               method: "post",
                headers: {
                  "Content-type": "application/json",
                  Accept: "application/json",
                },
                baseURL: "http://localhost:3000/v1/api/upload",
                data: JSON.stringify({ data: base64EncodedImage }),
              });
              console.log(response, "====>")
            setFileInputState('');
            setPreviewSource('');
            setSuccessMsg('Image uploaded successfully');
        } catch (err) {
            console.error(err.response );
            setErrMsg(err.response);
        }
    };
    return (
        <div>
            <Navbar />
            <UserSideBar />
            <h1 className="title">Upload an Image</h1>
            {/* <Alert msg={errMsg} type="danger" />
            <Alert msg={successMsg} type="success" /> */}
            <form onSubmit={handleSubmitFile} className="form">
                <input
                    id="fileInput"
                    type="file"
                    name="image"
                    onChange={handleFileInputChange}
                    value={fileInputState}
                    className="form-input"
                />
                <button className="btn" onClick={handleSubmitFile} type="submit">
                    Submit
                </button>
            </form>
            {previewSource && (
                <img
                    src={previewSource}
                    alt="chosen"
                    style={{ height: '300px' }}
                />
            )}
        </div>
    );
}
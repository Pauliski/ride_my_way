import React, { useState } from "react";
import "./Driver.css";

const SignupUpload = () => {
  const [file, setFile] = useState({});
  const [showImage, setShowImage] = useState({ img1: false, img2: false });
  const [disabled, setDisabled]=useState({btn1: true, btn2: true})
  const handleOnChange = (e) => {
    const { name } = e.target;
    console.log(name)
    if (e.target.name === "driver-img") {
        setShowImage({ ...showImage, img1: false });
        setDisabled({ ...disabled, btn1: false });
      }
      if (e.target.name === "car-img") {
        setShowImage({ ...showImage, img2: false });
        setDisabled({ ...disabled, btn2: false });
      }
    setFile({ ...file, [name]: `${URL.createObjectURL(e.target.files[0])}` });
  };
  const uploadFunc = (e) => {
    if (e.target.name === "img1-display") {
      setShowImage({ ...showImage, img1: !showImage.img1 });
      setDisabled({...disabled, btn1: true})
    }
    if (e.target.name === "img2-display") {
      setShowImage({ ...showImage, img2: !showImage.img2 });
      setDisabled({...disabled, btn2: true})
   
    }
  };
  return (
    <div className="signupUpload">
      <div className="form upload1">
        <label htmlFor="img">Upload Driver's Image:</label>
        <img
          src={file["driver-img"]}
          alt=""
          className={`imgUpload ${showImage.img1 ? "appear" : ""}`}
        />
        <div className='uploadContainer'>
          <input
            type="file"
            id="img"
            name="driver-img"
            accept="image/gif, image/jpeg, image/png"
            onChange={handleOnChange}
          />
          <button
            className="uploadBtn"
            onClick={uploadFunc}
            name="img1-display"
            disabled={disabled.btn1}
          >
            Upload
          </button>
        </div>

        {/* <input type="button" value="Upload" className="uploadBtn" /> */}
      </div>

      <div className="form upload2">
        <label htmlFor="img">Upload Car Image:</label>
        <img
          src={file["car-img"]}
          className={`imgUpload ${showImage.img2 ? "appear" : ""}`}
          alt=""
        />
        <div style={{ display: "flex" }}>
          <input
            type="file"
            id="img"
            name="car-img"
            accept="image/gif, image/jpeg, image/png"
            onChange={handleOnChange}
          />
          <button
            className="uploadBtn"
            onClick={uploadFunc}
            name="img2-display"
            disabled={disabled.btn2}
          >
            Upload
          </button>
        </div>

        {/* <input type="button" value="Upload" className="uploadBtn" /> */}
      </div>
      <footer>hello</footer>
    </div>
  );
};

export default SignupUpload;

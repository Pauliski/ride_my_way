import React from "react";

export const Input = (props) => {
  return (
    <>
      <div className="input-field-container">
          <div style={{width: "100%"}}>
        <input
          className={`inputField ${props.className}`}
          id={props.id}
          name={props.name}
          type="text"
          placeholder={props.holder}
          onChange={props.onChange}
          onBlur={props.onBlur}
          ref={props.ref}
          value={props.Value}
          disabled={props.disabled}
          required
        />
          </div>
        
        <div
          className={`error-message ${
            props.error === undefined
              ? ""
              : props.error === true
              ? ""
              : "display-error"
          }`}
        >
          {props.message}
        </div>
      </div>
    </>
  );
};

export const Password = (props) => {
  return (
    <>
      <div className="input-field-container">
          <div style={{width: "100%"}}>
              <input
          className="inputField"
          name={props.name}
          type="password"
          placeholder={props.holder}
          onChange={props.onChange}
          onBlur={props.onBlur}
          ref={props.ref}
          required
        />
          </div>
        
        <span
          className={`error-message ${
            props.error === undefined
              ? ""
              : props.error === true
              ? ""
              : "display-error"
          }`}
        >
          {props.message}
        </span>
      </div>
    </>
  );
};

export const Email = (props) => {
  return (
    <>
      <div className="input-field-container">
        <input
          className="inputField"
          type="email"
          name={props.name}
          placeholder={props.holder}
          onChange={props.onChange}
          onBlur={props.onBlur}
          required
        />
        <span
          className={`error-message ${
            props.error === undefined
              ? ""
              : props.error === true
              ? ""
              : "display-error"
          }`}
        >
          {props.message}
        </span>
      </div>
    </>
  );
};

export const Number = (props) => {
  return (
    <>
      <div className="input-field-container">
        <input
          className="inputField"
          name={props.name}
          type="number"
          max="999999999999999"
          maxLength="15"
          placeholder={props.holder}
          onChange={props.onChange}
          required
        />
        <span
          className={`error-message ${
            props.error === undefined
              ? ""
              : props.error === true
              ? ""
              : "display-error"
          }`}
        >
          {props.message}
        </span>
      </div>
    </>
  );
};

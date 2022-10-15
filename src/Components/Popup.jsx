import React, { Component } from 'react';

function Popup(props) {
    return (
           <div className="alertPopup">
                <div className="alert" id="A1">
                  <strong>Unsuccess!</strong> Invalid {props.type} number.
                </div>
                <div className="alert success" id="A2">
                  <strong>Success!</strong> Your {props.type} is validated
                </div>
                <div className="alert info" id="A3">
                  <strong>Captcha!</strong> Incorrect CAPTCHA.
                </div>
                <div className="alert warning" id="A4">
                  <strong>Warning!</strong> Please fill the Fields.
                </div>
              </div>
    );
}

export default Popup;
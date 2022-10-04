import React, { Component } from 'react';

class OTP_Confirmation extends Component {
    render() { 
        return (
    <div>
        <div className="header">
          <nav>
            <a href="index.html"><img src="Images/Logo 2.png" /></a>
            <a href="index.html" className="Company">Online Voting System</a>
            <div className="alertPopup">
              <div className="alert" id="A1">
                <strong>Unsuccess!</strong> Incorrect OTP.
              </div> 
              <div className="alert warning" id="A4"> 
                <strong>Warning!</strong> Please fill the Fields.
              </div>
            </div>
          </nav></div>
        <div className="Home">
          <div className="text-box">
            <div className="signin-signup">
              <form action="#" className="sign-in-form">
                <i className="fa-solid fa-circle-user" />
                <h2 className="title">Mobile Verification</h2>
                <div className="mobile">
                  <p>The OTP is sent to this number <input id="mobile_num" defaultValue="XXXXXXX972" readOnly /> . <br />Please don't share OTP with anyone.</p>
                </div>
                <div className="Input_Refresh">
                  <div className=" input-field">
                    <i className="fas fa-lock" />
                    <input type="number" id="OTP" placeholder="  Enter OTP" />
                  </div>
                  <button id="Resend"><i className="fa-solid fa-rotate-right" /></button>
                </div>
                <div className="timer">
                  <p>Resend</p> <span id="timer" />
                </div>
                <input type="button" id="Submit" className="btn solid" defaultValue="Submit" />
              </form>
            </div>
          </div>
        </div>
    </div>
        );
    }
}
 
export default OTP_Confirmation;
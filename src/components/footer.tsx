import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "10px 0",
        background: "lightgray",
        cursor:'pointer'
      }} onClick={() => {
        window.open("https://mk-portfolio-henna.vercel.app/");
      }}
    >
      Designed and Developed By Manojkumar
    </div>
  );
};

export default Footer;

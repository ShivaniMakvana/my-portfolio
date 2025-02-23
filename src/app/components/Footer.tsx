import React from "react";

const Footer = () => {
  return (
    <footer className="footer flex justify-center border z-10 border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent text-white">
      <div className="container p-4 mt-1 flex flex-col justify-between sm:flex-row sm:text-left">
        <p className="text-slate-400">Developed by Shivani Makvana</p>
        <p className="text-slate-400">Copyright © {(new Date().getFullYear())}</p>
      </div>
    </footer>
  );
};

export default Footer;

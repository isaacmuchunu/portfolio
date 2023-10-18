import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <div>
          <span className="font-bold text-xl">Logo</span>
        </div>
        <div>
          <p className="text-slate-600">All rights reserved © {year}.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

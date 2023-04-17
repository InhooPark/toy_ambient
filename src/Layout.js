import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <header className="header">
        <h1> Ambient </h1>
      </header>
      {children}
      <footer className="footer">
        <p>Copyright 2023. PIH</p>
      </footer>
    </>
  );
};

export default Layout;

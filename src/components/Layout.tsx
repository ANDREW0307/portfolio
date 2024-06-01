import * as React from "react";
import NavBar from "./NavBar";

const layoutStyles = {
  margin: "0 auto",
  maxWidth: "960px",
  padding: "0 0rem",
};

const Layout: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main style={layoutStyles}>{children}</main>
    </div>
  );
};

export default Layout;

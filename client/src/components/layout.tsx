import React, { ReactNode } from "react";
import Navbar from "./navbar";

export const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="container">{children}</div>
    </div>
  );
};



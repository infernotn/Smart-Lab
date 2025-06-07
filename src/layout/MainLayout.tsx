import React from "react";
import TopNavBar from "../components/TopNavBar";
// import SideNavBar from "../components/SideNavBar";
import "../styles/layout/MainLayout.scss";

type Props = { children: React.ReactNode };

const MainLayout = ({ children }: Props) => {
  return (
    <div className="main-layout">
      <TopNavBar />
      {/* <SideNavBar /> */}
      <main className="content">{children}</main>
    </div>
  );
};

export default MainLayout;

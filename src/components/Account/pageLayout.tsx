import React from "react";
import SideBar from "./SideBar/SideBar";

function PageLayout({ children }:any) {
  return (
    <main role="main">
      <section className="rewards-page">
        <div className="rewards-container">
          <div className="layout-list-detail">{children}</div>
          <SideBar />
        </div>
      </section>
    </main>
  );
}
export default PageLayout;

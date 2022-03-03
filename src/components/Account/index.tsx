import { useRouter } from "next/router";
import React from "react";
import AccountInfo from "./AccountInfo";
import index from "./pageLayout";
import SideBar from "./SideBar/SideBar";
import PageLayout from './pageLayout'
function Account() {
 const {pathname} = useRouter()
 console.log(pathname);
 
  return (
      <>
       {pathname === '/account' ?
         <main role="main">
         <section className="rewards-page">
           <div className="rewards-container">
             <div className="layout-list-detail">
                 <AccountInfo/>
             </div>
             <SideBar />
           </div>
         </section>
       </main>:
       
       <PageLayout/>}
      </>
  );
}
export default Account;

import React, { useState } from "react";
import Topbar from "./TopBar";
import Content from "./Content";
import PasswordUpdateForm from "./password_update";
import ProfileUpdateForm from "./profile_update";
import AddNewListing from "./AddnewLIsting";
import ActiveListings from "./ActiveListing";
import Sidebar from "./sideBar";
import CategoryForm from "./catreq";
import Logout from "./Logout";

function Dashboardd() {
  const [currentContent, setCurrentContent] = useState("default");

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar setCurrentContent={setCurrentContent} />
      <div className="flex-1 flex flex-col">
        <Topbar />
        {currentContent === "changePassword" ? (
          <PasswordUpdateForm />
        ) : currentContent === "editProfile" ? (
          <ProfileUpdateForm />
        ) : currentContent === "reqcat" ? (
          <CategoryForm />
        ) : currentContent === "activeListings" ? (
          <ActiveListings />
        ) : currentContent === "addNewListing" ? (
          <AddNewListing />
        ) : currentContent === "logout" ? (
          <Logout />
        ) : (
          <Content />
        )}
      </div>
    </div>
  );
}

export default Dashboardd;

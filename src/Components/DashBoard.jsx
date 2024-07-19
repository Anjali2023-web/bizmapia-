import React, { useState } from 'react';
import Sidebar from './sideBar';
import Topbar from './TopBar';
import Content from './Content';
import PasswordUpdateForm from './password_update';
import ProfileUpdateForm from './profile_update';

function Dashboardd() {
  const [currentContent, setCurrentContent] = useState('default');

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar setCurrentContent={setCurrentContent} />
      <div className="flex-1 flex flex-col">
        <Topbar />
        {currentContent === 'changePassword' ? (
          <PasswordUpdateForm />
        ) : currentContent === 'editProfile' ? (
          <ProfileUpdateForm/>
        ) : (
          <Content />
        )}
      </div>
    </div>
  );
}

export default Dashboardd;
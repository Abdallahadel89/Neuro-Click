import React from 'react';

function UserSettings() {
  return (
    <div className="neuroclick-container">
      <h1>{localStorage.getItem("name")}</h1>
      <div className="settings-section">
        <img src={localStorage.getItem("photo")} className="circle-photo"   alt="" />
        <h2>Account</h2>
        <p>Email: user@example.com</p>
        <button>Change Email</button>
      </div>
      <div className="settings-section">
        <h2>Preferences</h2>
      
        <button>Save Changes</button>
      </div>
    </div>
  );
}

export default UserSettings;
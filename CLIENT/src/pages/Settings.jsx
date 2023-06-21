import React from 'react';
import "../styles/settings.css";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settings_wrapper">
        <h2 className="settings_title">Settings</h2>

        <div className="settings_top">
          <button className="setting_btn">My Details</button>
          <button className="setting_btn active_btn">Profiles</button>
          <button className="setting_btn">Password</button>
          <button className="setting_btn">Email</button>
          <button className="setting_btn">Notification</button>
        </div>

        <div className="details_form">

          <h2 className='profile_title'>Profile</h2>
          <p className='profile_desc'>Update your photo and personal details here</p>
          <form>
            <div className="form_group">
              <div>
                <label>Live in</label>
                <input type="text" placeholder='Kutus, Kenya' />
              </div>

              <div>
                <label>Street</label>
                <input type="text" placeholder='Kutus, 104300' />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
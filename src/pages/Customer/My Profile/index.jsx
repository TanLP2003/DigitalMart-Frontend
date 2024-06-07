import React, { useState } from 'react';
import './styles.css';
import { useDispatch } from 'react-redux';
import { logout, updateUserInfo, changeAvatar } from '../../../redux/apis/user-api';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

export const MyProfile = () => {

  const dispatch = useDispatch();

  const userData = JSON.parse(localStorage.getItem('currentUser'));

  const [username, setUsername] = useState(userData.username);
  const [email] = useState(userData.email);
  const [phonenumber, setPhonenumber] = useState(userData.phonenumber);
  const [gender, setGender] = useState(userData.gender);
  const [profilePicture, setProfilePicture] = useState(userData.avatar);
  const [isEditable, setIsEditable] = useState(false);


  const handleLogout = () => {
    dispatch(logout())
  }
  const handlePictureChange = async (e) => {
    try {
      if (e.target.files && e.target.files[0]) {
        const file = e.target.files[0];
        const newAvatarUrl = await dispatch(changeAvatar(file)).unwrap();
        setProfilePicture(newAvatarUrl);
      }
    } catch (err) {
      toast.error("Change avatar failed: " + err.message);
    }
  };

  const handleEditToggle = () => {
    setIsEditable(!isEditable);
  };

  const handleSave = async () => {
    const updatedUser = {
      username,
      phonenumber,
      gender,
    };

    try {
      await dispatch(updateUserInfo(updatedUser)).unwrap();
      setIsEditable(false);
    } catch (err) {
      toast.info('Failed to save the profile: ', err);
    }
  };



  return (
    <div className="profile-container">
      <h2>My Profile</h2>
      <div className="profile-form">
        <div className="row mt-3">
          <div className="col-6">
            <div className="form-group">
              <label>Avatar</label>
              <img
                src={profilePicture}
                alt="Profile"
                className="profile-picture-preview"
              />
              <input
                type="file"
                id="avatarInput"
                style={{ display: 'none' }}
                onChange={handlePictureChange}
              />
              {isEditable && (
                <button
                  className="change-avatar-button"
                  onClick={() => document.getElementById('avatarInput').click()}
                >
                  Change Avatar
                </button>
              )}

            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                readOnly={!isEditable}
                className="input-field"
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                readOnly
                className="input-field"
              />
            </div>
            <div className="form-group">
              <label>Phonenumber</label>
              <input
                type="text"
                value={phonenumber}
                onChange={(e) => setPhonenumber(e.target.value)}
                readOnly={!isEditable}
                className="input-field"
              />
            </div>
            <div className="form-group">
              <label>Gender</label>
              <div className="gender-options">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  checked={gender === 'male'}
                  onChange={(e) => setGender(e.target.value)}
                  disabled={!isEditable}
                />
                <label htmlFor="male">Male</label>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  checked={gender === 'female'}
                  onChange={(e) => setGender(e.target.value)}
                  disabled={!isEditable}
                />
                <label htmlFor="female">Female</label>
                <input
                  type="radio"
                  id="other"
                  name="gender"
                  value="other"
                  checked={gender === 'other'}
                  onChange={(e) => setGender(e.target.value)}
                  disabled={!isEditable}
                />
                <label htmlFor="other">Other</label>
              </div>
            </div>
          </div>
        </div>


        <div className="form-actions">
          <button className="edit-button" onClick={handleEditToggle}>
            {isEditable ? 'Cancel' : 'Edit Profile'}
          </button>

          {isEditable 
          ? (<>
              <Link to='/change-password'>
                <button className="edit-button">Change Password</button>
              </Link>
              
              <button className="save-button" onClick={handleSave}>Save</button>
            </>
            ) 
          : (<button className="edit-button" onClick={handleLogout}>Logout</button>)}
        </div>

      </div>
    </div>
  );
};
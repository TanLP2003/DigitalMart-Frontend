import React, { useState } from 'react';
import './styles.css';
import { useDispatch } from 'react-redux';
import { logout, updateUserInfo, changeAvatar } from '../../../redux/apis/user-api';
import { toast } from 'react-toastify';
import { de } from '@faker-js/faker';

export const AdminProfile = () => {

  const dispatch = useDispatch();

  const userData = JSON.parse(localStorage.getItem('currentUser'));

  const [username, setUsername] = useState(userData.username);
  const [email] = useState(userData.email);
  const [phonenumber, setPhonenumber] = useState(userData.phonenumber);
  const [gender, setGender] = useState(userData.gender);
  const [profilePicture, setProfilePicture] = useState(userData.avatar);
  const [isEditable, setIsEditable] = useState(false);

  const handleEditToggle = () => {
    setIsEditable(!isEditable);
  };

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
        <div className="form-actions">
          <button className="edit-button" onClick={handleEditToggle}>
            {isEditable ? 'Cancel' : 'Edit Profile'}
          </button>
          {isEditable && (
            <button className="save-button" onClick={handleSave}>Save</button>
          )}
        </div>
        <div className="row">
          <div className="col-6">
            <div className='avatar'>
              <div className="avatar-container">
                <h5>Avatar</h5>
                <img
                  src={profilePicture}
                  alt="Profile"
                  className="profile-picture-preview"
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
              <input
                type="file"
                id="avatarInput"
                style={{ display: 'none' }}
                onChange={handlePictureChange}
              />
            </div>
          </div>
          <div className="col-6">
            <div className="general-infor">
              <div className="form-group">
                <label>Tên đăng nhập</label>
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
                <label>Số điện thoại</label>
                <input
                  type="text"
                  value={phonenumber}
                  onChange={(e) => setPhonenumber(e.target.value)}
                  readOnly={!isEditable}
                  className="input-field"
                />
              </div>
              <div className="form-group">
                <label>Giới tính</label>
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
                  <label htmlFor="male">Nam</label>
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    checked={gender === 'female'}
                    onChange={(e) => setGender(e.target.value)}
                    disabled={!isEditable}
                  />
                  <label htmlFor="female">Nữ</label>
                  <input
                    type="radio"
                    id="other"
                    name="gender"
                    value="other"
                    checked={gender === 'other'}
                    onChange={(e) => setGender(e.target.value)}
                    disabled={!isEditable}
                  />
                  <label htmlFor="other">Khác</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
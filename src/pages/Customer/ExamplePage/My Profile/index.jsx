import React, { useState } from 'react';
import './styles.css';
import { useSelector } from 'react-redux';

const MyProfile = () => {

  const userData = useSelector(state => state.auth)

  const [username,setUsername] = useState(userData.username);
  const [email] = useState(userData.email);
  const [phonenumber, setPhonenumber] = useState(userData.phonenumber);
  const [gender, setGender] = useState(userData.gender);
  const [profilePicture, setProfilePicture] = useState(null);
  const [isEditable, setIsEditable] = useState(false);

  const handlePictureChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  const handleEditToggle = () => {
    setIsEditable(!isEditable);
  };

  const handleSave = () => {
    // Add your save logic here
    console.log('Profile saved');
    setIsEditable(false);
  };

  return (
    <div className="profile-container">
      <h2>Hồ Sơ Của Tôi</h2>
      <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
      <div className="profile-form">
        <div className="form-group">
          <label>Tên đăng nhập</label>
          <input 
            type="text" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            readOnly={!isEditable} />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            readOnly
          />
        </div>
        <div className="form-group">
          <label>Số điện thoại</label>
          <input
            type="text"
            value={phonenumber}
            onChange={(e) => setPhonenumber(e.target.value)}
            readOnly={!isEditable}
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
        <div className="form-group">
          <label>Ảnh đại diện</label>
          <input type="file" onChange={handlePictureChange} disabled={!isEditable} />
          {profilePicture && (
            <img src={URL.createObjectURL(profilePicture)} alt="Profile" className="profile-picture-preview" />
          )}
        </div>
        <div className="form-actions">
          <button className="edit-button" onClick={handleEditToggle}>
            {isEditable ? 'Cancel' : 'Edit Profile'}
          </button>
          {isEditable && (
            <button className="save-button" onClick={handleSave}>Save</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/usermodal.css';

const UserProfileModal = ({ id }) => {
  const [open, setOpen] = useState(false);
  const handleprofile = () => {
    setOpen(!open)
  }

  return (
    <div className="action">
      <div className="profile" >
        <img src="https://cdn.pixabay.com/photo/2016/11/08/15/21/user-1808597_640.png" alt="Profile" onClick={handleprofile} />
        {/* <Link to={`/profileget/${userId}`}>
          <img src="https://cdn.pixabay.com/photo/2016/11/08/15/21/user-1808597_640.png" alt="Profile" onClick={handleprofile} />
        </Link> */}
      </div>
      {open &&
        <div className="menuActive">
          <ul>
            <li>
            {/* <Link to={`/myprofile/${id}`}>My Profile</Link> */}
            <Link to="/myprofile">My Profile</Link>

            </li>
            <li>
              <Link to="/order">Orders</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/help">Help</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </div>
      }
    </div >
  );
};

export default UserProfileModal;

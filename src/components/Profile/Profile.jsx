import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Button, Spin } from 'antd';


const Profile = () => {
  const { getLoggedUserInfo, user, token, logout } = useContext(UserContext);
  
  useEffect(() => {
    getLoggedUserInfo();
  }, [token]);

const handleLogout = () => {
    logout();
};

  if (!user) {
    return <Spin size="large" />;
  }
  return (
    <div>
      <p> {user.user.name}</p>
      <p> {user.user.email}</p>
      <Button danger onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default Profile;
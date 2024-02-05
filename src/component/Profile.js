import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const { UserData } = useSelector((state) => state);
  
  return (
    <div>
      <h2>Name: {UserData.CustomerName}</h2>
      <h2>Name: {UserData.CustomerAddress}</h2>
    </div>
  );
}

export default Profile;

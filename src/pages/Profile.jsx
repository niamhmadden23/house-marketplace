import React from "react";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { unstable_HistoryRouter } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";

function Profile() {
  const auth = getAuth();
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  const { name, email } = formData;

  const navigate = useNavigate();
  const onLogout = () => {
    auth.signOut();
    navigate("/");
  };
  return (
    <div className="profile">
      <header className="profile-header"></header>
      <p className="pageHeader"></p>
      <button type="button" className="logOut" onClick={onLogout}>
        Log out
      </button>
    </div>
  );
}

export default Profile;

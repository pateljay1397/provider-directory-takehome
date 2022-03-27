import React from "react";
import { useNavigate } from "react-router-dom";
import { Profile } from "../assests";
import "./userlistingcard.css";

const Userlistingcard = ({ user }) => {
  const navigate = useNavigate();
  const handleUserProfile = (id) => {
    navigate(`/${id}`);
  };
  return (
    <div className="container">
      <div onClick={() => handleUserProfile(user.id)}>
        <div className="card">
          <div className="user-body">
            <div className="user">
              <img src={Profile} alt="user" />
            </div>
            <span className="user-info">
              <h5>{user.name}</h5>
              <small>{user.title}</small>
            </span>
          </div>
          <div className="card-body">
            <p>{user.bio}</p>
            <span className="tag tag-teal">Available {user.availabilty}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userlistingcard;

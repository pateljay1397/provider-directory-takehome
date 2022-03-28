import React from "react";
import { useEffect, useState } from "react";
import { fetchProviders } from "../api";
import { Vector } from "../assests";
import "./userlisting.css";
import Loader from "./Loader";
import Userlistingcard from "./Userlistingcard";

const Userlisting = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    //Fetching all the users data
    fetchProviders()
      .then((data) => {
        setUserData(data);
      })
      .catch((ex) => console.error(ex));
  }, []);

  return (
    <>
      <div className="header">
        <h2>Browse our providers</h2>
        <small>Mental Wellness</small>
        <div className="location">
          <img src={Vector} alt="Location" />
          <span>ON</span>
        </div>
      </div>
      <div className="usercount">
        <small>
          <span>{userData?.length}</span> providers in Ontario
        </small>
      </div>
      {userData ? (
        <div>
          {userData.map((user) => (
            <Userlistingcard user={user} key={user.id} />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Userlisting;

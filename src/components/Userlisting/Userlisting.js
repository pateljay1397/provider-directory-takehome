import React from "react";
import { useEffect, useState } from "react";
import { fetchProviders } from "../../api";
import { Vector } from "../../assests";
import "./userlisting.css";
import Loader from "../Loader/Loader";
import Userlistingcard from "../Userlistingcard/Userlistingcard";
import { toast, ToastContainer } from "react-toastify";

const Userlisting = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    //Fetching all the users data
    fetchProviders()
      .then((data) => {
        setUserData(data);
      })
      .catch((error) =>
        toast.error(error.message || error.response.data.message)
      );
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
      <ToastContainer />
    </>
  );
};

export default Userlisting;

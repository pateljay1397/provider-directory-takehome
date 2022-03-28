import React from "react";
import { useEffect, useState } from "react";
import { fetchProviders } from "../../api";
import { Vector } from "../../assests";
import "./userlisting.css";
import Loader from "../Loader/Loader";
import Userlistingcard from "../Userlistingcard/Userlistingcard";
import { userModel } from "../../Model";
import { toast, ToastContainer } from "react-toastify";

const Userlisting = () => {
  const [userData, setUserData] = useState<[userModel] | []>([]);

  useEffect(() => {
    //Fetching all the users data
    fetchProviders()
      .then((data) => {
        if (data) {
          setUserData(data as [userModel]);
        }
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
          <span>{userData && userData.length}</span> providers in Ontario
        </small>
      </div>
      {userData ? (
        <div>
          {userData.map((perUser: userModel) => (
            <Userlistingcard user={perUser} key={perUser.id} />
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

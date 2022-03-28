import React from "react";
import { useEffect, useState } from "react";
import { fetchProvider } from "../api";
import "./userprofile.css";
import { useParams } from "react-router-dom";
import {
  mapIcon,
  University,
  Langauge,
  Showless,
  Forward,
  Profile,
} from "../assests";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Userprofile = () => {
  const [userProfileData, setUserProfileData] = useState();
  const [showMore, setShowMore] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    //Fetching data for selected user by userID
    fetchProvider(id)
      .then((data) => {
        setUserProfileData(data);
      })
      .catch((ex) => console.error(ex));
  }, [id]);
  return (
    <>
      {userProfileData ? (
        <div className="mt-5">
          <div className="topNavigation">
            <div
              className="topnav-btn"
              onClick={() => {
                navigate("/");
              }}
            >
              Mental Wellness
            </div>
            <img src={Forward} alt="forward" />
            <h5>
              Dr. {userProfileData.name}, {userProfileData.title}
            </h5>
          </div>
          <div className="containerp">
            <div className="userp-body">
              <div className="userp">
                <img src={Profile} alt="user" />
              </div>
            </div>
            <div className="cardp">
              <div className="cardp-body">
                <div className="userp-info">
                  <h5>Dr. {userProfileData.name}</h5>
                  <small>{userProfileData.title}</small>
                </div>
                <div className="bio-Text">
                  {showMore
                    ? userProfileData.bio
                    : `${userProfileData.bio.substring(0, 250)}`}
                  <div
                    className="show-btn"
                    onClick={() => setShowMore(!showMore)}
                  >
                    {showMore ? (
                      <div>
                        {"Show less"} <img src={Showless} alt="showless" />
                      </div>
                    ) : (
                      <div>
                        {"Show more"}
                        <img className="rotate" src={Showless} alt="showmore" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="cardp-body">
                <div className="userp-data">
                  <img src={mapIcon} alt="map" />
                  <div className="userp-text">
                    <small>Location</small>
                    <h5>{userProfileData.location}</h5>
                  </div>
                </div>
                <div className="userp-data">
                  <img src={University} alt="map" />
                  <div className="userp-text">
                    <small>Education</small>
                    <h5>{userProfileData.education}</h5>
                  </div>
                </div>
                <div className="userp-data">
                  <img src={Langauge} alt="map" />
                  <div className="userp-text">
                    <small>Langauge</small>
                    <h5>{userProfileData.languages.join(", ")}</h5>
                  </div>
                </div>
                <button
                  className="bookingbtn"
                  onClick={() => toast.warn("This is coming soon...")}
                >
                  Book with us
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
      <ToastContainer />
    </>
  );
};

export default Userprofile;

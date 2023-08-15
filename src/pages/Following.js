import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Following = ({ userPromise, followee, followings, getFollowings }) => {
  const [following, setFollowing] = useState(null);
  useEffect(() => {
    // Fetch the user details once the promise is resolved
    userPromise.then((followerDetails) => {
      setFollowing(followerDetails);
    });
  }, [userPromise]);
  if (!following) {
    return <div>Loading...</div>;
  }
  const getToken = () => {
    const token = localStorage.getItem("auth-token");
    return token;
  };
  const followAccount = async (id) => {
    let mytoken = getToken();
    try {
      const response = await fetch(
        `http://localhost:5000/api/relationship/follow/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": mytoken,
          },
        }
      );

      const result = await response.json();

      if (result.error) {
        toast.error("Already following this user!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.success("Successfully followed this user!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        getFollowings(mytoken);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const unfollowAccount = async (id) => {
    let mytoken = getToken();
    try {
      const response = await fetch(
        `http://localhost:5000/api/relationship/unfollow/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": mytoken,
          },
        }
      );

      const result = await response.json();
      toast.warn("unfollowed this user!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      getFollowings(mytoken);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div
        className="d-flex shadow"
        style={{
          width: "40rem",
          margin: "12px auto",
          borderRadius: "18px",
          justifyContent: "space-between",
          padding: "15px 10px",
        }}
      >
        <div style={{ display: "flex", gap: "5px" }}>
          <div>
            <img
              src={following?.profileimage}
              alt="profilepic"
              height={50}
              width={50}
              className="rounded-circle"
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h3
              style={{
                margin: "0px",
                fontWeight: "bold",
                fontSize: "18px",
                paddingTop: "5px",
              }}
            >
              {following?.fullname}
            </h3>
            <h2 style={{ fontSize: "15px" }}>@{following?.username}</h2>
          </div>
        </div>
        <div>
          {followings.includes(following?._id) ? (
            <button
              style={{
                backgroundColor: "rgb(220,53,69)",
                color: "white",
                border: "transparent",
                padding: "8px 12px",
                marginTop: "0.75rem",
                borderRadius: "15px",
                width: "8rem",
              }}
              onClick={() => {
                unfollowAccount(following?._id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              style={{
                backgroundColor: "rgb(40,167,69)",
                color: "white",
                border: "transparent",
                padding: "8px 12px",
                width: "8rem",
                marginTop: "0.75rem",
                borderRadius: "15px",
              }}
              onClick={() => {
                followAccount(following?._id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Following;

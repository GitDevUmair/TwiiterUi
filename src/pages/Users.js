import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BiSearch } from "react-icons/bi";
const Users = () => {
  const [allusers, setAllusers] = useState([]);
  const [followings, setFollowings] = useState([]);
  const [userid, setUserid] = useState("");
  const [search, setSearch] = useState("");
  const handleSearch = () => {
    if (search.length >= 2) {
      let filteredusers = allusers.filter((user) => {
        return user.fullname.toLowerCase().includes(search.toLowerCase());
      });
      setAllusers(filteredusers);
    } else {
      getUsers();
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    let output = getToken();
    getFollowings(output);
    getLoggedInuser();
  });
  const getLoggedInuser = async () => {
    try {
      const token = getToken();
      const response = await fetch("http://localhost:5000/api/auth/getuser", {
        method: "POST",
        headers: {
          "auth-token": token,
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      setUserid(result._id);
    } catch (error) {
      console.log(error);
    }
  };
  const getToken = () => {
    const token = localStorage.getItem("auth-token");
    return token;
  };
  const getFollowings = async (token) => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/profile/following",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": token,
          },
        }
      );
      const result = await response.json();
      setFollowings(result.following);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const getUsers = async () => {
    try {
      const token = getToken();
      const response = await fetch(
        "http://localhost:5000/api/auth/getallusers",
        {
          method: "GET",
          headers: {
            "auth-token": token,
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();
      setAllusers(result.users);
    } catch (error) {
      console.log(error);
    }
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
          autoClose: 2000,
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
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <input
              type="text"
              id="search"
              name="search"
              placeholder="Search Users"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              style={{
                padding: "0.5rem",
                width: "450px",
                borderRadius: "20px",
                border: "1px solid lightgray",
                backgroundColor: "rgb(230,230,230)",
                marginBottom: "10px",
              }}
            />
            <BiSearch style={{ position: "relative", right: "30px" }} />
          </div>
          <button
            style={{
              backgroundColor: "rgb(29, 155, 240)",
              padding: "6px 8px",
              color: "white",
              width: "100px",
              border: "transparent",
              borderRadius: "15px",
            }}
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      {allusers.map((user, index) => {
        if (userid === user._id) {
          return false;
        } else {
          return (
            <div key={index}>
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
                      src={user.profileimage}
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
                      {user.fullname}
                    </h3>
                    <h2 style={{ fontSize: "15px" }}>@{user.username}</h2>
                  </div>
                </div>
                <div>
                  {followings.includes(user._id) ? (
                    <button
                      style={{
                        backgroundColor: "rgb(220,53,69)",
                        color: "white",
                        border: "transparent",
                        padding: "8px 12px",
                        marginTop: "0.75rem",
                        width: "8rem",
                        borderRadius: "15px",
                      }}
                      onClick={() => {
                        unfollowAccount(user._id);
                      }}
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      style={{
                        backgroundColor: "rgb(40,167,69)",
                        color: "white",
                        width: "8rem",
                        border: "transparent",
                        padding: "8px 12px",
                        marginTop: "0.75rem",
                        borderRadius: "15px",
                      }}
                      onClick={() => {
                        followAccount(user._id);
                      }}
                    >
                      Follow
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
};

export default Users;

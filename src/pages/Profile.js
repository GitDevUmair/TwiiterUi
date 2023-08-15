import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { BsFillCameraFill } from "react-icons/bs";
import { toast } from "react-toastify";
import BasicTabs from "../components/Reacttabs";

import "react-toastify/dist/ReactToastify.css";
const Profile = () => {
  const [userdetails, setUserDetails] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  const [updatedDetails, setUpdatedDetails] = useState({
    fullname: "",
    username: "",
  });
  const [imageUrl, setImageUrl] = useState("");
  const profileref = useRef();
  const closeProfileref = useRef();
  let navigate = useNavigate();
  const isSubmitDisabled =
    updatedDetails.username.length < 5 || updatedDetails.fullname.length < 6;

  useEffect(() => {
    let output = localStorage.getItem("auth-token");
    if (!output) {
      navigate("/login");
    } else {
      getuserdetails();
    }
  }, []);
  const handleChange = (e) => {
    setUpdatedDetails({ ...updatedDetails, [e.target.name]: e.target.value });
  };
  const handleProfileUpdate = async () => {
    let data;
    if (selectedImage === null) {
      data = {
        username: updatedDetails.username,
        fullname: updatedDetails.fullname,
        profileimage: " ",
      };
    } else {
      data = {
        username: updatedDetails.username,
        fullname: updatedDetails.fullname,
        profileimage: imageUrl,
      };
    }
    const token = getToken();
    try {
      const response = await fetch("http://localhost:5000/api/profile/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      getuserdetails();
      closeProfileref.current.click();
      toast.success("Profile Updated Successfully!", {
        position: "bottom-center",
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
      toast.error("There was an error while updating your profile!", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  const getToken = () => {
    let token = localStorage.getItem("auth-token");
    return token;
  };
  useEffect(() => {
    handleImageUpload();
  }, [selectedImage]);
  const handleImageUpload = async () => {
    if (selectedImage) {
      const formData = new FormData();
      formData.append("file", selectedImage);
      formData.append("upload_preset", "devumairpreset"); // Replace with your Cloudinary preset
      try {
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dmf3rzsxc/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await response.json();
        setImageUrl(data.secure_url);
      } catch (error) {
        console.error("Error uploading image to Cloudinary:", error);
      }
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);

    // Optionally, you can also show a preview of the selected image:
    const reader = new FileReader();
    reader.onload = (e) => {
      setImageUrl(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const launchModal = () => {
    profileref.current.click();
    setUpdatedDetails({
      fullname: userdetails.fullname,
      username: userdetails.username,
    });
  };

  const getuserdetails = async () => {
    let token = getToken();
    try {
      const response = await fetch("http://localhost:5000/api/auth/getuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
      });

      const result = await response.json();
      setUserDetails(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div
      style={{
        width: "100%",
        padding: "1rem 0",
        boxSizing: "border-box",
        margin: "0px 20px",
      }}
    >
      <button
        ref={profileref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Update your profile
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                ref={closeProfileref}
              ></button>
            </div>
            <div
              className="modal-body"
              style={{ display: "flex", flexDirection: "column", gap: "2px" }}
            >
              <input
                type="text"
                name="username"
                id="username"
                minLength={5}
                value={updatedDetails.username}
                onChange={handleChange}
                placeholder="your new username"
                style={{
                  padding: "8px 12px",
                  border: "transparent",
                  borderBottom: "2px solid lightgray",
                  borderRadius: "8px",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              />
              <input
                type="text"
                name="fullname"
                id="fullname"
                minLength={6}
                value={updatedDetails.fullname}
                onChange={handleChange}
                placeholder="your fullname"
                style={{
                  padding: "8px 12px",
                  border: "transparent",
                  borderBottom: "2px solid lightgray",
                  borderRadius: "8px",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              />
              {imageUrl && (
                <div>
                  <label htmlFor="imageInput" style={{ cursor: "pointer" }}>
                    <img
                      src={imageUrl}
                      alt=""
                      height={300}
                      width={300}
                      style={{
                        marginLeft: "5.3rem",
                        borderRadius: "10px",
                        filter: "blur(1px)",
                      }}
                    />
                    <BsFillCameraFill
                      style={{
                        position: "absolute",
                        top: "230px",
                        left: "240px",
                        fontSize: "25px",
                        color: "white",
                      }}
                    />
                    <p
                      style={{
                        position: "absolute",
                        top: "250px",
                        left: "150px",
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      click to select profile picture
                    </p>{" "}
                  </label>
                </div>
              )}
              {!imageUrl && !userdetails.profileimage && (
                <div>
                  <label htmlFor="imageInput" style={{ cursor: "pointer" }}>
                    <img
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                      alt=""
                      height={300}
                      width={300}
                      style={{ marginLeft: "5.3rem", borderRadius: "10px" }}
                    />
                    <BsFillCameraFill
                      style={{
                        position: "absolute",
                        top: "230px",
                        left: "240px",
                        fontSize: "25px",
                        color: "white",
                      }}
                    />
                    <p
                      style={{
                        position: "absolute",
                        top: "250px",
                        left: "150px",
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      click to select profile picture
                    </p>{" "}
                  </label>
                </div>
              )}
              {!imageUrl && userdetails.profileimage && (
                <div>
                  <label htmlFor="imageInput" style={{ cursor: "pointer" }}>
                    <img
                      src={userdetails.profileimage}
                      alt=""
                      height={300}
                      width={300}
                      style={{
                        marginLeft: "5.3rem",
                        borderRadius: "10px",
                        filter: "blur(1px)",
                      }}
                    />
                    <BsFillCameraFill
                      style={{
                        position: "absolute",
                        top: "230px",
                        left: "240px",
                        fontSize: "25px",
                        color: "white",
                      }}
                    />
                    <p
                      style={{
                        position: "absolute",
                        top: "250px",
                        left: "150px",
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      click to select profile picture
                    </p>{" "}
                  </label>
                </div>
              )}
              <input
                id="imageInput"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleProfileUpdate}
                disabled={isSubmitDisabled}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "96%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <h2 style={{}}>{userdetails.fullname}</h2>
        <img
          src="https://e0.pxfuel.com/wallpapers/5/320/desktop-wallpaper-light-grey-background-grey-plain-thumbnail.jpg"
          alt=""
          height={250}
          width={"100%"}
        />
        <div
          style={{
            width: "90%",
            display: "flex",
            justifyContent: "space-between",
            position: "absolute",
            top: "230px",
            alignItems: "center",
            padding: "0px 15px",
            boxSizing: "border-box",
          }}
        >
          <img
            src={userdetails.profileimage}
            alt=""
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              border: "3px solid white",
              objectFit: "contain",
            }}
          />
          <button
            style={{
              color: "black",
              backgroundColor: "white",
              padding: "4px 6px",
              position: "relative",
              marginTop: "4rem",
              borderRadius: "22px",
              width: "200px",
              border: "1px solid gray",
              fontWeight: "bold",
            }}
            onClick={launchModal}
          >
            Set up profile
          </button>
        </div>
        <div style={{ marginTop: "4rem", marginLeft: "1rem" }}>
          <h2>{userdetails.fullname}</h2>
          <p>@{userdetails.username}</p>
        </div>
      </div>
      <div style={{ padding: "0rem 5rem", boxSizing: "border-box" }}>
        <BasicTabs />
      </div>
    </div>
  );
};

export default Profile;

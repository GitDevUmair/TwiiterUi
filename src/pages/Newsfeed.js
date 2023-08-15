import React, { useState, useEffect } from "react";
import { BiUser, BiPoll } from "react-icons/bi";
import { GiEarthAmerica } from "react-icons/gi";
import { AiOutlineSchedule, AiOutlineFileGif } from "react-icons/ai";
import { MdOutlinePermMedia } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { BsEmojiSmile } from "react-icons/bs";
import { toast } from "react-toastify";
import "./Newsfeed.css";
import Newsfeeditem from "./Newsfeeditem";
const Newsfeed = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [tweettext, setTweettext] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [select, setSelect] = useState("first");
  const [loadingimage, setLoading] = useState(false);

  const [feed, setFeed] = useState([]);
  const isDisabled = tweettext === "" || imageUrl === "";

  //work to fetch all tweets fo =r newsfeed
  useEffect(() => {
    let output = getToken();
    getNewsfeed(output);
  }, []);
  const getNewsfeed = async (output) => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/newsfeed/getnewsfeed",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": output,
          },
        }
      );
      const result = await response.json();
      setFeed(result.tweets);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const getUserDetails = async (id) => {
    try {
      const data = {};
      data.id = id;
      const response = await fetch(
        "http://localhost:5000/api/auth/getposterdetail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error:", error);
    }
  };
  //work to post a tweet
  useEffect(() => {
    handleImageUpload();
  }, [selectedImage]);
  const handleImageUpload = async () => {
    if (selectedImage) {
      const formData = new FormData();
      formData.append("file", selectedImage);
      formData.append("upload_preset", "devumairpreset"); // Replace with your Cloudinary preset
      try {
        setLoading(true);
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
      } finally {
        setLoading(false); // Set uploadingImage back to false after upload completes
      }
    }
  };
  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    setSelectedImage(selectedFile); // Update the state with the File object
  };
  const handleChange = (e) => {
    setTweettext(e.target.value);
  };
  const getToken = () => {
    let token = localStorage.getItem("auth-token");
    return token;
  };
  const submitTweet = async () => {
    let token = getToken();
    let data = {
      text: tweettext,
      image: imageUrl,
    };
    try {
      const response = await fetch(
        "http://localhost:5000/api/tweets/addtweet",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": token,
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      toast.success("Tweet Posted!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setImageUrl("");
      setTweettext("");
      getNewsfeed(token);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Some Error Occured!", {
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
  };
  return (
    <div className="space">
      <h3 style={{ marginTop: "10px" }}>Home</h3>
      <div className="main">
        <li
          style={{
            fontWeight: select === "first" ? "bold" : "",
            borderBottom:
              select === "first" ? "3px solid rgb(29, 155, 240)" : "",
            cursor: "pointer",
          }}
          onClick={() => {
            setSelect("first");
          }}
        >
          For you
        </li>
        <li
          style={{
            fontWeight: select === "second" ? "bold" : "",
            borderBottom:
              select === "second" ? "3px solid rgb(29, 155, 240)" : "",
            cursor: "pointer",
          }}
          onClick={() => {
            setSelect("second");
          }}
        >
          Following
        </li>
      </div>
      <div className="options">
        <div style={{ display: "flex", gap: "10px" }}>
          <div className="user">
            <BiUser />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <input
              placeholder="What is happening?!"
              id="text"
              name="text"
              size={70}
              style={{
                border: "none",
                outline: "none",
                fontSize: "18px",
                marginTop: "20px",
              }}
              value={tweettext}
              onChange={handleChange}
            />
            {selectedImage && imageUrl && (
              <img
                src={URL.createObjectURL(selectedImage)}
                alt="Selected"
                height={300}
                width={400}
              />
            )}
            {loadingimage && (
              <div className="spinner-border m-5" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "7px",
          marginTop: "12px",
          marginLeft: "70px",
          alignItems: "center",
        }}
      >
        <GiEarthAmerica
          style={{
            color: " rgb(29, 155, 240)",
            marginBottom: "1rem",
            marginRight: "5px",
          }}
        />
        <p
          style={{
            fontSize: "15px",
            fontWeight: "bold",
            color: "rgb(29, 155, 240)",
          }}
        >
          Every one can reply
        </p>
      </div>
      <div
        className="myopts"
        style={{
          display: "flex",
          marginTop: "1.5rem",
          marginLeft: "4.5rem",
          gap: "0.8rem",
          paddingBottom: "15px",
          borderBottom: "1px solid lightgrey",
        }}
      >
        <label htmlFor="media" style={{ cursor: "pointer" }}>
          {" "}
          <MdOutlinePermMedia style={{ color: "rgb(29, 155, 240)" }} />
        </label>
        <input
          id="media"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageChange}
        />
        <AiOutlineFileGif
          style={{ color: "rgb(29, 155, 240)", marginTop: "0.4rem" }}
        />
        <BiPoll style={{ color: "rgb(29, 155, 240)", marginTop: "0.4rem" }} />
        <BsEmojiSmile
          style={{ color: "rgb(29, 155, 240)", marginTop: "0.4rem" }}
        />
        <AiOutlineSchedule
          style={{ color: "rgb(29, 155, 240)", marginTop: "0.4rem" }}
        />
        <CiLocationOn
          style={{ color: "rgb(29, 155, 240)", marginTop: "0.4rem" }}
        />
        <button
          style={{
            backgroundColor: isDisabled ? "lightgray" : "rgb(29, 155, 240)",
            color: "white",
            border: "transparent",
            padding: "8px 16px",
            borderRadius: "15px",
            marginLeft: "20rem",
            fontWeight: "bold",
          }}
          disabled={isDisabled}
          onClick={submitTweet}
        >
          Post
        </button>
      </div>
      <div className="alltweets" style={{ marginTop: "2rem" }}>
        {feed.length >= 1 ? (
          feed.map((feeditem, index) => {
            const { text, image, createdby, _id } = feeditem;
            const userPromise = getUserDetails(createdby);

            return (
              <Newsfeeditem
                text={text}
                image={image}
                key={index}
                id={_id}
                userPromise={userPromise}
              />
            );
          })
        ) : (
          <p style={{ fontWeight: "bold", textAlign: "center" }}>
            Nothing to show in the feed right now!
          </p>
        )}
      </div>
    </div>
  );
};

export default Newsfeed;

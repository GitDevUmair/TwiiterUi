import React, { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment, FaRetweet, FaShare } from "react-icons/fa";
import { LuView } from "react-icons/lu";

const Newsfeeditem = ({ image, text, userPromise, id }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    // Fetch the user details once the promise is resolved
    userPromise.then((userDetails) => {
      setUser(userDetails);
      //   let output = localStorage.getItem("auth-token");
    });
  }, [userPromise]);
  if (!user) {
    return <div>Loading...</div>;
  }
  return (
    <div
      className="tweetdiv"
      style={{
        border: "1px solid lightgrey",
        padding: "15px 25px",
        width: "100%",
        display: "flex",
        gap: "20px",
      }}
    >
      <div>
        <img
          height={50}
          width={60}
          src={user.profileimage}
          alt=""
          style={{ borderRadius: "50%" }}
        />
      </div>
      <div
        className="content"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2px",
          }}
        >
          <h4>{user.username}</h4>
          <img
            src="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2021-05/210520-twitter-verified-cs-70cdee.jpg"
            alt=""
            height={20}
            width={40}
          />
          <p style={{ paddingTop: "10px" }}>@{user.username}</p>
        </div>
        <div className="para">
          <p>{text}</p>
        </div>
        <div className="mainimg" style={{ marginTop: "25px" }}>
          <img
            src={image}
            alt=""
            height={200}
            width={400}
            style={{ borderRadius: "13px" }}
          />
        </div>
        <div
          className="reactions"
          style={{ marginTop: "12px", display: "flex", gap: "3.5rem" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
            <FaRegComment />
            <span style={{ fontSize: "12px" }}>5</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
            <FaRetweet />
            <span style={{ fontSize: "12px" }}>30</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
            <AiOutlineHeart />
            <span style={{ fontSize: "12px" }}>180</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
            <LuView />
            <span style={{ fontSize: "12px" }}>14.8k</span>
          </div>
          <div>
            <FaShare />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsfeeditem;

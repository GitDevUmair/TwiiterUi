import React, { useState } from "react";
import { BiUser, BiPoll } from "react-icons/bi";
import { GiEarthAmerica } from "react-icons/gi";
import {
  AiOutlineHeart,
  AiOutlineSchedule,
  AiOutlineFileGif,
} from "react-icons/ai";
import { FaRegComment, FaRetweet, FaShare } from "react-icons/fa";
import { LuView } from "react-icons/lu";
import { MdOutlinePermMedia } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { BsEmojiSmile } from "react-icons/bs";

import "./Newsfeed.css";
const Newsfeed = () => {
  const [select, setSelect] = useState("first");
  return (
    <div className="space">
      <h3>Home</h3>
      <div className="main">
        <li
          style={{
            fontWeight: select === "first" ? "bold" : "",
            borderBottom:
              select === "first" ? "3px solid rgb(29, 155, 240)" : "",
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
          }}
          onClick={() => {
            setSelect("second");
          }}
        >
          Following
        </li>
      </div>
      <div className="options">
        <div className="user">
          <BiUser />
        </div>
        <div>
          <p style={{ fontSize: "18px", marginTop: "12px" }}>
            What is happening?!
          </p>
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
        <GiEarthAmerica style={{ color: " rgb(29, 155, 240)" }} />
        <p
          style={{
            fontSize: "15px",
            fontWeight: "bold",
            color: " rgb(29, 155, 240)",
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
        <MdOutlinePermMedia style={{ color: "rgb(29, 155, 240)" }} />
        <AiOutlineFileGif style={{ color: "rgb(29, 155, 240)" }} />
        <BiPoll style={{ color: "rgb(29, 155, 240)" }} />
        <BsEmojiSmile style={{ color: "rgb(29, 155, 240)" }} />
        <AiOutlineSchedule style={{ color: "rgb(29, 155, 240)" }} />
        <CiLocationOn style={{ color: "rgb(29, 155, 240)" }} />
        <button
          style={{
            backgroundColor: "rgb(116 189 239)",
            color: "white",
            border: "transparent",
            padding: "8px 16px",
            borderRadius: "15px",
            marginLeft : '20rem',
            fontWeight : 'bold',
          }}
          disabled={true}
        >
          Post
        </button>
      </div>
      <div className="alltweets" style={{ marginTop: "2rem" }}>
        <div
          className="tweetdiv"
          style={{
            border: "1px solid lightgrey",
            padding: "15px 5px",
            width: "100%",
            display: "flex",
            gap: "20px",
          }}
        >
          <div>
            <img
              height={45}
              width={45}
              src="https://www.icccricketschedule.com/wp-content/uploads/2023/04/babar.jpg"
              alt=""
              style={{ borderRadius: "25px" }}
            />
          </div>
          <div
            className="content"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <h4>Name</h4>
              <img
                src="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2021-05/210520-twitter-verified-cs-70cdee.jpg"
                alt=""
                height={20}
                width={40}
              />
              <p>@username</p>
            </div>
            <div className="para">
              <p>Japanese restaurants in China fear ruin</p>
              <p style={{ color: " rgb(29, 155, 240)", marginTop: "4px" }}>
                #whatever
              </p>
            </div>
            <div className="mainimg" style={{ marginTop: "25px" }}>
              <img
                src="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200"
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
              <div
                style={{ display: "flex", alignItems: "center", gap: "7px" }}
              >
                <FaRegComment />
                <span style={{ fontSize: "12px" }}>5</span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "7px" }}
              >
                <FaRetweet />
                <span style={{ fontSize: "12px" }}>30</span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "7px" }}
              >
                <AiOutlineHeart />
                <span style={{ fontSize: "12px" }}>180</span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "7px" }}
              >
                <LuView />
                <span style={{ fontSize: "12px" }}>14.8k</span>
              </div>
              <div>
                <FaShare />
              </div>
            </div>
          </div>
        </div>
        <div
          className="tweetdiv"
          style={{
            border: "1px solid lightgrey",
            padding: "15px 5px",
            width: "100%",
            display: "flex",
            gap: "20px",
          }}
        >
          <div>
            <img
              height={45}
              width={45}
              src="https://www.icccricketschedule.com/wp-content/uploads/2023/04/babar.jpg"
              alt=""
              style={{ borderRadius: "25px" }}
            />
          </div>
          <div
            className="content"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <h4>Name</h4>
              <img
                src="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2021-05/210520-twitter-verified-cs-70cdee.jpg"
                alt=""
                height={20}
                width={40}
              />
              <p>@username</p>
            </div>
            <div className="para">
              <p>Japanese restaurants in China fear ruin</p>
              <p style={{ color: " rgb(29, 155, 240)", marginTop: "4px" }}>
                #whatever
              </p>
            </div>
            <div className="mainimg" style={{ marginTop: "25px" }}>
              <img
                src="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200"
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
              <div
                style={{ display: "flex", alignItems: "center", gap: "7px" }}
              >
                <FaRegComment />
                <span style={{ fontSize: "12px" }}>5</span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "7px" }}
              >
                <FaRetweet />
                <span style={{ fontSize: "12px" }}>30</span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "7px" }}
              >
                <AiOutlineHeart />
                <span style={{ fontSize: "12px" }}>180</span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "7px" }}
              >
                <LuView />
                <span style={{ fontSize: "12px" }}>14.8k</span>
              </div>
              <div>
                <FaShare />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsfeed;

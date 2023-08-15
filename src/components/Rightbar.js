import React from "react";
import { BiSearch, BiDotsHorizontalRounded } from "react-icons/bi";

const Rightbar = () => {
  return (
    <div
      style={{
        width: "30%",
        marginTop: "20px",
        padding: "0px 10px",
        borderLeft: " 1px solid lightgrey",
      }}
    >
      {" "}
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Enter your search"
        style={{
          padding: "0.5rem",
          width: "90%",
          borderRadius: "20px",
          border: "1px solid lightgray",
          backgroundColor: "rgb(230,230,230)",
        }}
      />
      <BiSearch style={{ position: "relative", right: "2rem" }} />
      <div
        style={{
          backgroundColor: "rgb(240,240,240)",
          borderRadius: "10px",
          padding: "10px 8px",
          marginTop: "15px",
        }}
      >
        <h3>Get Verified</h3>
        <p style={{ margin: "0", fontWeight: "500" }}>
          Subscribe to unlock new features.
        </p>
        <button
          style={{
            color: "white",
            backgroundColor: "black",
            padding: "7px",
            borderRadius: "15px",
            border: "transparent",
            cursor: "pointer",
            width: "140px",
            marginTop: "6px",
          }}
        >
          Get Verified
        </button>
      </div>
      <div
        className="trends"
        style={{
          backgroundColor: "rgb(240,240,240)",
          borderRadius: "10px",
          padding: "4px 8px",
          marginTop: "15px",
        }}
      >
        <h3>Trends for you</h3>
        <div
          style={{
            display: "flex",
            marginTop: "20px",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p style={{ color: "grey", margin: "0" }}>Trending in Pakistan</p>
            <p style={{ fontWeight: "bold", margin: "0" }}>
              #SupremeCourtOfPakistan
            </p>
            <p style={{ color: "grey", margin: "0" }}>
              Trending with{" "}
              <span style={{ color: "rgb(29, 155, 240)" }}>#Khan</span>
            </p>
          </div>
          <div>
            {" "}
            <BiDotsHorizontalRounded
              style={{ fontSize: "20px", marginTop: "30px" }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "20px",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p style={{ color: "grey", margin: "0" }}>Trending in Pakistan</p>
            <p style={{ fontWeight: "bold", margin: "0" }}>
              #SupremeCourtOfPakistan
            </p>
            <p style={{ color: "grey", margin: "0" }}>
              Trending with{" "}
              <span style={{ color: "rgb(29, 155, 240)" }}>#Khan</span>
            </p>
          </div>
          <div>
            <BiDotsHorizontalRounded
              style={{ fontSize: "20px", marginTop: "30px" }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "20px",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p style={{ color: "grey", margin: "0" }}>Trending in Pakistan</p>
            <p style={{ fontWeight: "bold", margin: "0" }}>
              #SupremeCourtOfPakistan
            </p>
            <p style={{ color: "grey", margin: "0" }}>
              Trending with{" "}
              <span style={{ color: "rgb(29, 155, 240)" }}>#Khan</span>
            </p>
          </div>
          <div>
            <BiDotsHorizontalRounded
              style={{ fontSize: "20px", marginTop: "30px" }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "20px",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p style={{ color: "grey", margin: "0" }}>Trending in Pakistan</p>
            <p style={{ fontWeight: "bold", margin: "0" }}>
              #SupremeCourtOfPakistan
            </p>
            <p style={{ color: "grey", margin: "0" }}>
              Trending with{" "}
              <span style={{ color: "rgb(29, 155, 240)" }}>#Khan</span>
            </p>
          </div>
          <div>
            <BiDotsHorizontalRounded
              style={{ fontSize: "20px", marginTop: "30px" }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "20px",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p style={{ color: "grey", margin: "0" }}>Trending in Pakistan</p>
            <p style={{ fontWeight: "bold", margin: "0" }}>
              #SupremeCourtOfPakistan
            </p>
            <p style={{ color: "grey", margin: "0" }}>
              Trending with{" "}
              <span style={{ color: "rgb(29, 155, 240)" }}>#Khan</span>
            </p>
          </div>
          <div>
            <BiDotsHorizontalRounded
              style={{ fontSize: "20px", marginTop: "30px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;

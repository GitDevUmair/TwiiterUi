import React from "react";
import { useState, useEffect } from "react";
const Follower = ({ userPromise }) => {
  const [follower, setFollower] = useState(null);
  useEffect(() => {
    userPromise.then((followerDetails) => {
      setFollower(followerDetails);
    });
  }, [userPromise]);

  if (!follower) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div
        className="listitem shadow"
        style={{
          width: "40rem",
          margin: "0px auto",
          borderRadius: "20px",
          padding: "0.7rem 0.3rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h2 style={{ fontSize: "18px", fontWeight: "bold", margin: "0px" }}>
            {follower?.fullname}
          </h2>
          <h3 style={{ fontSize: "15px" }}>@{follower?.username}</h3>
          {follower?.status && <p>{follower?.status}</p>}
          {!follower?.status && (
            <p style={{ fontSize: "14px" }}>No status to show</p>
          )}
        </div>
        <div>
          <img
            src={follower?.profileimage}
            alt="profilepic"
            height={80}
            width={80}
            className="rounded-circle"
          />
        </div>
      </div>
    </div>
  );
};

export default Follower;

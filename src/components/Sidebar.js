import React, { useEffect, useState } from "react";
import { MdFeed, MdNotifications, MdOutlinePeopleAlt } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { CgMoreO, CgProfile } from "react-icons/cg";
import { FaUserAlt, FaRegChartBar, FaShoppingBag } from "react-icons/fa";
import { useNavigate, NavLink } from "react-router-dom";
import Rightbar from "./Rightbar";
const Sidebar = ({ children }) => {
  let navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("auth-token")) {
      navigate("/");
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("auth-token");
    navigate("/");
  };
  const menuItem = [
    {
      path: "/dashboard",
      name: "Home",
      icon: <AiFillHome />,
    },
    {
      path: "/about",
      name: "About",
      icon: <FaUserAlt />,
    },
    {
      path: "/comment",
      name: "Notifications",
      icon: <MdNotifications />,
    },
    {
      path: "/analytics",
      name: "Analytics",
      icon: <FaRegChartBar />,
    },
    {
      path: "/product",
      name: "Product",
      icon: <FaShoppingBag />,
    },
    {
      path: "/newsfeed",
      name: "Newsfeed",
      icon: <MdFeed />,
    },
    {
      path: "/more",
      name: "More",
      icon: <CgMoreO />,
    },
    {
      path: "/profile",
      name: "Profile",
      icon: <CgProfile />,
    },
  ];
  return (
    <div className="customcontainer">
      <div className="sidebar">
        <div className="top">
          <img
            src="https://static.dezeen.com/uploads/2023/07/x-logo-twitter-elon-musk_dezeen_2364_col_0-1.jpg"
            alt=""
            height={45}
            width={60}
            style={{ color: "white" }}
          />
        </div>
        {menuItem.map((item, index) => {
          return (
            <NavLink
              key={index}
              to={item.path}
              className="customlink"
              // activeClassName="active"
              style={{ paddingLeft: "20px", width: "80%" }}
            >
              <div className="icon">{item.icon}</div>
              <div className="link_text">{item.name}</div>
            </NavLink>
          );
        })}
        <button
          style={{
            backgroundColor: "lightskyblue",
            color: "black",
            border: "transparent",
            padding: "10px",
            borderRadius: "8px",
            fontWeight: "bold",
            width: "11.3rem",
            marginTop: "2rem",
            fontSize: "16px",
          }}
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      <div className="mymain" style={{ marginLeft: "16rem" }}>
        {children}
      </div>
      <Rightbar />
    </div>
  );
};

export default Sidebar;

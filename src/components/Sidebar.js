import React, { useState } from "react";
import { MdFeed, MdNotifications, MdOutlinePeopleAlt } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { CgMoreO } from "react-icons/cg";
import { FaUserAlt, FaRegChartBar, FaShoppingBag } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Sidebar = ({ children }) => {
  const [show, setShow] = useState(true);
  const toggleShow = () => setShow(!show);
  const menuItem = [
    {
      path: "/",
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
      path: "/community",
      name: "Community",
      icon: <MdOutlinePeopleAlt />,
    },
  ];
  return (
    <div className="container">
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
              className="link"
              activeClassName="active"
              style={{ paddingLeft: "20px", width: "80%" }}
            >
              <div className="icon" style={{ color: "white" }}>
                {item.icon}
              </div>
              <div
                className="link_text"
                style={{ display: show ? "block" : "none" }}
              >
                {item.name}
              </div>
            </NavLink>
          );
        })}
        <button
          style={{
            backgroundColor: "rgb(29, 155, 240)",
            color: "white",
            border: "transparent",
            padding: "15px 25px",
            borderRadius: "20px",
            fontWeight: "bold",
            width : '11rem', 
            marginTop :'1rem',
            marginLeft : '10px',
            fontSize : '16px'

          }}
        >
          Post
        </button>
      </div>
      <main className="mymain" style={{ marginLeft: "15rem" }}>
        {children}
      </main>
    </div>
  );
};

export default Sidebar;

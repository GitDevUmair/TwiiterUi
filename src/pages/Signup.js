import "./Signup.css";
import { useNavigate, Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import React, { useState } from "react";
import { toast } from "react-toastify";
const Signup = () => {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
    cpassword: "",
    contact: "",
    status: "",
    profileimage: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      credentials.username.length === 0 ||
      credentials.fullname.length === 0 ||
      credentials.password.length === 0 ||
      credentials.cpassword.length === 0 ||
      credentials.contact.length === 0 ||
      credentials.status.length === 0 ||
      credentials.profileimage.length === 0
    ) {
      toast.error("No input fields should be left empty!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      if (credentials.password === credentials.cpassword) {
        const response = await fetch(
          "http://localhost:5000/api/auth/createuser",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: credentials.username,
              fullname: credentials.fullname,
              contact: credentials.contact,
              status: credentials.status,
              email: credentials.email,
              password: credentials.password,
              profileimage: credentials.profileimage,
            }),
          }
        );
        const json = await response.json();
        if (json.authtoken) {
          toast.success("Account Created Successfully!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setCredentials({
            username: "",
            email: "",
            password: "",
            cpassword: "",
            fullname: "",
            profileimage: "",
            contact: "",
            status: "",
          });
          navigate("/login");
        } else {
          toast.error(json.error, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      } else {
        toast.error("Passwords should match!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Link to="/login">
        <BiArrowBack
          style={{
            color: "black",
            marginLeft: "10px",
            fontSize: "25px",
            marginTop: "10px",
          }}
        />
      </Link>
      <div className="signuptop">
        <div style={{ marginTop: "6rem" }}>
          <img
            src="https://logolook.net/wp-content/uploads/2021/06/Twitter-Log%D0%BE.png"
            alt=""
            height={300}
            width={400}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1
            style={{
              fontSize: "50px",
              letterSpacing: "2px",
              marginBottom: "0.75rem",
            }}
          >
            Happening Now
          </h1>
          <h2 style={{ fontSize: "30px", marginBottom: "0.3rem" }}>
            Join Today.
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="inputdiv">
              <label htmlFor="username" className="label">
                Username:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={credentials.username}
                placeholder="Enter your username"
                onChange={onChange}
                required
                minLength={5}
              />
            </div>
            <div className="inputdiv">
              <label htmlFor="fullname" className="label">
                Full Name:
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Enter your full name"
                onChange={onChange}
                required
                minLength={6}
                value={credentials.fullname}
              />
            </div>
            <div className="inputdiv">
              <label htmlFor="email" className="label">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                onChange={onChange}
                value={credentials.email}
                required
                minLength={12}
              />
            </div>
            <div className="inputdiv">
              <label htmlFor="password" className="label">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                onChange={onChange}
                value={credentials.password}
                required
                minLength={5}
              />
            </div>
            <div className="inputdiv">
              <label htmlFor="cpassword" className="label">
                Confirm Password:
              </label>
              <input
                type="password"
                id="cpassword"
                name="cpassword"
                placeholder="confirm your password"
                onChange={onChange}
                value={credentials.cpassword}
                required
                minLength={5}
              />
            </div>
            <div className="inputdiv">
              <label htmlFor="profileimage" className="label">
                Profile Image:
              </label>
              <input
                type="text"
                id="profileimage"
                name="profileimage"
                placeholder="enter your profile image URL"
                onChange={onChange}
                value={credentials.profileimage}
                required
              />
            </div>
            <div className="inputdiv">
              <label htmlFor="status" className="label">
                Status:
              </label>
              <input
                type="text"
                id="status"
                name="status"
                placeholder="enter your profile status"
                onChange={onChange}
                value={credentials.status}
                required
              />
            </div>
            <div className="inputdiv">
              <label htmlFor="contact" className="label">
                Contact:
              </label>
              <input
                type="number"
                id="contact"
                name="contact"
                value={credentials.contact}
                placeholder="Enter your contact information"
                pattern="[0-9]*"
                inputMode="numeric"
                onChange={onChange}
                className="numbertotext"
                minLength={9}
              />
            </div>

            <button
              type="submit"
              style={{
                color: "white",
                backgroundColor: "rgb(29, 155, 240)",
                padding: "10px 16px",
                borderRadius: "15px",
                border: "transparent",
                cursor: "pointer",
                fontWeight: "bold",
                marginTop: "15px",
                width: "50%",
                marginLeft: "6rem",
              }}
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;

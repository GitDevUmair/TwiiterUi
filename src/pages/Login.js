import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
const Login = () => {
  let navigate = useNavigate();
  const navigatetoforget = () => {
    navigate("/forgot");
  };
  useEffect(() => {
    if (localStorage.getItem("auth-token")) {
      navigate("/newsfeed");
    }
  }, []);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    if (json.success) {
      localStorage.setItem("auth-token", json.authtoken);
      toast.success("Logged in Successfully!", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/newsfeed");
    } else {
      toast.error("Invalid Credentials!", {
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
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="logintop">
      <div>
        <img
          src="https://logolook.net/wp-content/uploads/2021/06/Twitter-Log%D0%BE.png"
          alt=""
          height={300}
          width={400}
        />
      </div>
      <form onSubmit={handleSubmit} className="myform">
        <h1>Login</h1>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={credentials.email}
          onChange={onChange}
          required
          minLength={12}
          style={{ width: "100%" }}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={credentials.password}
          onChange={onChange}
          required
          minLength={5}
          style={{ width: "100%" }}
        />
        <span style={{ display: "flex", justifyItems: "flex-end" }}>
          {" "}
          <p
            style={{
              marginLeft: "14rem",
              fontSize: "14px",
              color: "black",
              cursor: "pointer",
            }}
            onClick={navigatetoforget}
          >
            forgot password?
          </p>
        </span>
        <button className="login" type="submit">
          LOGIN
        </button>
        <div
          style={{
            display: "flex",
            marginTop: "2.7rem",
            gap: "5rem",
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: "16px", color: "black" }}>
            Dont have an account?
          </p>
          <Link to="/signup">
            {" "}
            <button
              style={{
                color: "white",
                backgroundColor: "black",
                padding: "7px",
                borderRadius: "15px",
                border: "transparent",
                cursor: "pointer",
                width: "6rem",
                marginBottom: "1rem",
              }}
            >
              Signup
            </button>{" "}
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;

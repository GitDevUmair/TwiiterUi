import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
const Forgot = () => {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    console.log(credentials);
  };
  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (credentials.password === credentials.confirmpassword) {
      const response = await fetch(
        "http://localhost:5000/api/auth/forgotpassword",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
          }),
        }
      );
      const json = await response.json();
      if (json.success) {
        toast.success("Changed Password Successfully!", {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate("/");
      } else {
        toast.error(json.error, {
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
    } else {
      toast.error("Passwords should match!", {
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
      <div
        style={{
          display: "flex",
          paddingTop: "2rem",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "white",
          color: "black",
          height: "100vh",
        }}
      >
        <h2 style={{ color: "rgb(29, 155, 240)" }}>
          Forgot your password? <br />
          <span style={{ fontSize: "15px" }}>We've got you covered.</span>
        </h2>

        <form
          onSubmit={handleChangePassword}
          style={{
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)",
            padding: "2rem 3rem",
            marginTop: "1rem",
            borderRadius: "15px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "4.5rem",
              gap: "20px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <label htmlFor="email">Email:</label>
              <input
                placeholder="Enter Your Email"
                id="email"
                name="email"
                minLength={12}
                value={credentials.email}
                onChange={onChange}
                required
                style={{
                  width: "18rem",
                  padding: "8px 12px",
                  border: "transparent",
                  borderBottom: "2px solid lightgray",
                  borderRadius: "8px",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <label htmlFor="password" style={{ marginRight: "1.5rem" }}>
                Password:
              </label>
              <input
                placeholder="Enter Your New Password"
                type="password"
                id="password"
                name="password"
                required
                minLength={5}
                onChange={onChange}
                value={credentials.password}
                style={{
                  width: "18rem",
                  padding: "8px 12px",
                  border: "transparent",
                  borderBottom: "2px solid lightgray",
                  borderRadius: "8px",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <label
                htmlFor="confirmpassword"
                style={{ marginRight: "1.5rem" }}
              >
                Confirm Password:
              </label>
              <input
                placeholder="Confirm Your New Password"
                type="password"
                id="confirmpassword"
                name="confirmpassword"
                required
                minLength={5}
                value={credentials.confirmpassword}
                onChange={onChange}
                style={{
                  width: "18rem",
                  padding: "8px 12px",
                  border: "transparent",
                  borderBottom: "2px solid lightgray",
                  borderRadius: "8px",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              />
            </div>

            <button
              style={{
                color: "white",
                backgroundColor: "rgb(29, 155, 240)",
                padding: "10px 12px",
                borderRadius: "15px",
                border: "transparent",
                marginLeft: "10rem",
                width: "40%",
                marginTop: "1rem",
                cursor: "pointer",
              }}
              type="submit"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Forgot;

import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  AiOutlineHeart,
  AiOutlineShareAlt,
  AiFillDelete,
} from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { useRef, useState } from "react";

const Tweet = (props) => {
  const editRef = useRef();
  const closeEditRef = useRef();
  const { image, text, heading, _id } = props.tweet;
  const { deleteTweet, gettweets, setAddstate, addState } = props;
  // const [editState, setEditstate] = useState({
  //   edittext: "",
  //   editimage: "",
  //   editheading: "",
  // });
  const [editid, setEditid] = useState("");
  const getToken = () => {
    let token = localStorage.getItem("auth-token");
    return token;
  };
  const handleEditchange = (e) => {
    setAddstate({ ...addState, [e.target.name]: e.target.value });
  };
  const submitChanges = async () => {
    let token = getToken();
    let data = {
      text: addState.text,
      heading: addState.heading,
      image: addState.image,
    };
    try {
      const response = await fetch(
        `http://localhost:5000/api/tweets/updatetweet/${editid}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "auth-token": token,
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      setEditid("");
      toast.success("Tweet Updated!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      closeEditRef.current.click();
      gettweets(token);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const editTweet = (id, text, image, heading) => {
    editRef.current.click();
    setAddstate({
      text,
      image,
      heading,
    });
    setEditid(id);
  };
  return (
    <div className="card mb-4" style={{ width: "24rem", margin: "0px auto" }}>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModalEdit"
        ref={editRef}
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModalEdit"
        tabIndex="-1"
        aria-labelledby="exampleModalEditLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalEditLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                ref={closeEditRef}
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="text"
                  id="edittext"
                  value={addState.text}
                  placeholder="your tweet text"
                  onChange={(e) => handleEditchange(e)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="heading"
                  id="editheading"
                  value={addState.heading}
                  placeholder="your tweet heading"
                  onChange={(e) => handleEditchange(e)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="image"
                  id="editimage"
                  value={addState.image}
                  placeholder="your tweet image URL"
                  onChange={(e) => handleEditchange(e)}
                />
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={submitChanges}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        src={image}
        className="card-img-top"
        alt="tweetimage"
        height={"200px"}
        width={"100px"}
      />
      <div className="card-body">
        <h5 className="card-title">{heading}</h5>
        <p className="card-text">{text}</p>
        <div className="icons d-flex">
          <AiOutlineHeart style={{ cursor: "pointer" }} />
          <FaRegComment style={{ marginLeft: "20px", cursor: "pointer" }} />
          <AiOutlineShareAlt
            style={{ marginLeft: "20px", cursor: "pointer" }}
          />
          <AiFillDelete
            style={{ marginLeft: "13rem", cursor: "pointer" }}
            onClick={() => {
              deleteTweet(_id);
            }}
          />
          <FiEdit
            style={{ marginLeft: "20px", cursor: "pointer" }}
            onClick={() => {
              editTweet(_id, text, image, heading);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Tweet;

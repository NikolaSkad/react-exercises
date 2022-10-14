import axios from "axios";
import React, { useReducer } from "react";
import { INITIAL_STATE, postReducer } from "../reducers/postReducer";
import "./Post.css";
import { STATUS_TYPE } from "../reducers/statusType";

const Post = () => {
  // dispatch functions allows us to send actions to the reducer
  const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);

  const handleFetch = () => {
    dispatch({ type: STATUS_TYPE.FETCH_START });
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => {
        dispatch({ type: STATUS_TYPE.FETCH_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: STATUS_TYPE.FETCH_ERROR });
      });
  };

  return (
    <div className="container">
      <button className="button" onClick={handleFetch}>
        {state.loading ? "Wait..." : "Fetch the data"}
      </button>
      <p>{state.post?.title}</p>
      <span className="error">{state.error && "Something went wrong!"}</span>
    </div>
  );
};

export default Post;

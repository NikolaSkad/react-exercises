import React, { useReducer, useRef } from "react";
import "./Form.css";
import { formReducer, INITIAL_STATE } from "../reducers/formReducer";
import { FORM_TYPE } from "../reducers/statusType";

const Form = () => {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);
  const tagRef = useRef();

  const handleChange = (e) => {
    dispatch({
      type: FORM_TYPE.CHANGE_INPUT,
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleTags = (e) => {
    const tags = tagRef.current.value.split(",");
    tags.forEach((tag) => {
      dispatch({ type: FORM_TYPE.ADD_TAG, payload: tag });
    });
  };

  console.log(state);

  return (
    <div className="container">
      <form>
        <div className="inputs">
          <input
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Desc"
            name="desc"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Price"
            name="price"
            onChange={handleChange}
          />
        </div>
        <div className="categories">
          <p>Category:</p>
          <select name="category" onChange={handleChange}>
            <option value="sneakers">Sneakers</option>
            <option value="tshirt">T-shirt</option>
            <option value="jeans">Jeans</option>
          </select>
        </div>
        <div className="tag_container">
          <p>Tags:</p>
          <textarea
            ref={tagRef}
            placeholder="Seperate tags with commas..."
          ></textarea>
          <button type="button" onClick={handleTags}>
            Add Tags
          </button>
        </div>
        <div className="tags">
          {state.tags.map((tag, i) => (
            <small
              key={i}
              onClick={() =>
                dispatch({ type: FORM_TYPE.REMOVE_TAG, payload: tag })
              }
            >
              {tag}
            </small>
          ))}
        </div>
        <div className="quantity">
          <button
            type="button"
            onClick={() => dispatch({ type: FORM_TYPE.INCREASE })}
          >
            +
          </button>
          <p>Quantity ({state.quantity})</p>
          <button
            type="button"
            onClick={() => dispatch({ type: FORM_TYPE.DECREASE })}
          >
            -
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  console.log(input);

  let navigate = useNavigate();

  function submitHandler(event) {
    event.preventDefault();
    console.log(input);
    navigate("/searched/" + input);
  }

  return (
    <FormStyle onSubmit={submitHandler}>
      <form>
        <FaSearch></FaSearch>
        <input
          onChange={(e) => {
            // e.preventDefault();
            setInput(e.target.value);
            console.log(input);
          }}
          type="text"
          value={input}
        />
      </form>
    </FormStyle>
  );
}

const FormStyle = styled.div` 
		margin: 3rem;
		max-width: 100%;
		position: relative;

		input {
			background: linear-gradient(35deg, #494949, #313131);
			font-size: 1.5rem;
			color: white;
			padding: 1rem 3rem;
			border: none;
			border-radius 1rem; 
			outline: none;
			width: 100%;
			
			
		}
		svg {
			position: absolute;
			top: 50%;
			left: 0%;
			transform: translate(100%, -50%);
			color: white;
		}
	`;

export default Search;

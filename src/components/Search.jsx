import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";


function Search() {
  return (
    <FormStyle>
        
        <input type="text" />

        
    </FormStyle>
  )
}


const FormStyle = styled.div`
    margin: 0rem 10rem;
    position: relative;
    width: 100%;
    
    
    input {
        border: none;
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
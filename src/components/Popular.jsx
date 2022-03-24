
import { Splide, SplideSlide } from "@splidejs/react-splide";
import React, { useEffect, useState } from "react";
import styled from 'styled-components';

import "@splidejs/splide/dist/css/splide.min.css";


function Popular() {

    // const apiKey = process.env.REACT_APP_API_KEY;

    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    }, []);

    const getPopular = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=4`);
        const data = await api.json(); 
        console.log(data);
        setPopular(data.recipes);
        console.log(data.recipes);
    }

    return (
        <Wrapper>
            <h3>Popular Picks</h3>

            <Splide options={{
                perPage: 4,
                // arrows: false,
                pagination: false,
                drag: 'free',
                gap: '5rem'
            }}>
                {popular.map((recipe) => {
                    return (
                        <SplideSlide key={recipe.id}>
                            <Card>
                                <p>{recipe.title}</p>
                                <img src={recipe.image} alt={recipe.title} />
                            </Card>
                        </SplideSlide>
                    );
                })};
            </Splide>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    margin: 4rem 0rem;
`;

const Card = styled.div`
    min-height: 25rem;
    border-radius: 2rem;
    overflow: hidden;

    img {
        border-radius: 2rem;
    }
`;


export default Popular
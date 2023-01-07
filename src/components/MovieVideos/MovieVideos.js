import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../lib/ApiKey";
import Slider from "react-slick";

const MovieVideos = ({movieId, }) => {
    const [videos, setVideos] = useState([])

    const getVideos = async (id,apiKey) => {
        const url = await axios (`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`)
        const {data} = await url
        await setVideos(data.results)
    }
    useEffect(() => {
        getVideos(movieId, APIKEY)
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };


    return (
        <Slider {...settings}>
            {
                videos.map(el => (
                    <div>
                        <iframe width="360" height="215" src= {`https://www.youtube.com/embed/${el.key}`}
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                    </div>
                ))
            }
        </Slider>
    );
};

export default MovieVideos;


//https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US
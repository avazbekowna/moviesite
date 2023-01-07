import React, {useEffect, useState} from 'react';
import axios, {get} from "axios";
import {useParams} from "react-router-dom";
import {APIKEY} from "../../../lib/ApiKey";
import Slider from "react-slick";
import CastMovies from "../../MovieVideos/CastMovies/CastMovies";

const DetailCast = () => {
    const {castId} = useParams()
    const [detailCast,setDetailCast] = useState({})
    const [movie,setMovies] = useState([])
    const getDetailCast = async (id,apiKey) => {
        const url = await axios(`https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}&language=en-US`)
        const {data} = await url
        await setDetailCast(data)
    }

    const getMovies = async (id,apiKey) => {
        const url = await axios(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${apiKey}&language=en-US`)
        const {data} = await url
        await setMovies(data.cast.slice(0,10))
    }

    useEffect(() => {
        getDetailCast(castId,APIKEY)
        getMovies(castId,APIKEY)
    }, [])
    console.log("movie",movie)

    const {biography, profile_path, name, birthday, place_of_birth} = detailCast

    return (
        <div id="detail-cast">
            <div className="container">
                <div className="detail-cast">
                    <div>
                        <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${profile_path}`} alt=""/>
                    </div>

                    <div className="detail-cast--desc">
                        <h1>{name}</h1>
                        <h3>{place_of_birth}</h3>
                        <h3>Биография</h3>
                        <p style={{margin:'10px 0 30px 0', height:"120px", width:"100%", border:"1px solid #ccc", font:"16px/26px Georgia, Garamond, Serif", overflow:"auto", padding:"10px"}}>{biography}</p>

                    </div>
                </div>
                <div className="detail-cast--desc--movies">
                    <CastMovies movie={movie}/>
                </div>

            </div>
        </div>
    );
};

export default DetailCast;


//https://api.themoviedb.org/3/person/{person_id}/movie_credits?api_key=<<api_key>>&language=en-US

//https://api.themoviedb.org/3/person/${actorId}?api_key=${ApiKey}&append_to_response=combined_credits











import React, {useEffect, useState,useContext} from 'react';

import {useParams} from "react-router-dom";
import axios, {get} from "axios";
import {APIKEY} from "../../lib/ApiKey";
import Slider from "react-slick";
import CastSlider from "./CastSlider";
import ModalWindow from "./ModalWindow";
import MovieVideos from "../MovieVideos/MovieVideos";
import {LanguageContext} from "../../context";

//useParams

const DetailPage = () => {

    const[detail,setDetail] = useState({})
    const[cast,setCast] = useState([])
    const[modal,setModal] = useState(false)



    const {movieId} = useParams()
    const {language} = useContext(LanguageContext)

    const  getDetail = async (id,key) => {
        try {
            const url = await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=${language}`)
            const {data} = await url
            await setDetail(data)
        }catch(e) {
            console.log(e)
        }
    }

    const getCast = async (id,key) =>{
       try{
           const url = await axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=${language}`)
           const {data} = url
           await setCast(data.cast)
       }catch (e){
           console.error(e)
       }
    }



    useEffect(() => {
        getDetail(movieId,APIKEY)
        getCast(movieId,APIKEY)

    }, [language])



    const {title, poster_path, backdrop_path, overview, vote_average, release_date, genres} = detail



    return (
       <>
           <div style={{
               background: `url("https://www.themoviedb.org/t/p/w1000_and_h450_multi_faces${backdrop_path}") no-repeat left/cover`
           }}  id="detail-page">
               <div className="container">
                   <div className="detail-page">


                       <ModalWindow el={detail} setModal={setModal} modal={modal}/>

                       <div className='detail-page--description'>
                           <h1 style={{margin:" 20px 0 "}}>{title}</h1>
                           <p>{overview}</p>
                           <div className='rating'>
                               {Math.round(vote_average * 10)}%
                           </div>

                       </div>
                   </div>
               </div>

           </div>

           <div className="container">
               <div className="cast">
                   <CastSlider cast={cast}/>
               </div>

               <div className="videos">
                   <MovieVideos movieId={movieId}/>
               </div>
           </div>

       </>
    );
};

export default DetailPage;


//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../lib/ApiKey";
import MovieCard from "./page/MovieCard";
import {LanguageContext} from "../context"

const Popular = () => {

    const [popular,setPopular] = useState([])
    const {language} = useContext(LanguageContext)
    const buttons = [1,2,3,4,5,6,7,8,9,10]
    const [currentPage,setcrrentPage] = useState(1)
    const getPopular = async () => {
        const url = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=${language}&page=${currentPage}`)
        const {data} = await url
        await setPopular(data.results)
        window.scroll(0,0)
    }

    useEffect(() => {
        getPopular()
    }, [language,currentPage])



    return (
      <div id="movies">
          <div className="container">
              <div className="movies">
                  {
                      popular.map(el => (
                          <MovieCard el ={el} key={el.id}/>
                      ))
                  }
              </div>

             <div className="pagination">
                 {
                     buttons.map((el,idx) =>(
                         <button className={currentPage === idx+1 ? "active" : "" } onClick={() =>setcrrentPage(el)}>{el}</button>
                     ))
                 }
             </div>

          </div>
      </div>
    );
};

export default Popular;
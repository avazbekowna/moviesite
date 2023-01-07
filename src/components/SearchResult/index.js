import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {APIKEY} from "../../lib/ApiKey";
import MovieCard from "../page/MovieCard";
import {LanguageContext} from "../../context";



const SearchResult = () => {
    const [result, setResult] = useState([])
    const [totalPages, setTotalPages] = useState(1)
    const [currentPage,setCurrentPage] = useState(1)
    const {movieName} = useParams()
    const {language} = useContext(LanguageContext)
    const getResults = async (name,apiKey) =>{
        const url = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${name}&language=${language}&page=${currentPage}`)
        const {data} = await url
        setTotalPages(data.total_pages)

        window.scroll(0,0)
        console.log(data)
        setResult(data.results)
    }
    useEffect(() => {
        getResults(movieName,APIKEY)
    }, [movieName,currentPage,language])

    useEffect(() =>{
        setCurrentPage(1)
    }, [movieName])

    console.log(result)
    return (
       <div id="movies">
           <div className='container'>
               <div className="movies">
                   {
                       result.map(el => <MovieCard  el={el}/>)
                   }
               </div>
               <div style={{display: "flex" ,justifyContent: "space-between", padding: "0 0 5% 0"}}>
                   <button style={{
                       visibility:currentPage === 1 ? "hidden" : "visible"
                   }} onClick={() => setCurrentPage(currentPage-1)} className="page-btn">prev</button>

                   <button style={{
                       visibility:currentPage === totalPages ? "hidden" : "visible"
                   }} onClick={() => setCurrentPage(currentPage+1)} className="page-btn">next</button>
               </div>
           </div>
       </div>
    );
};

export default SearchResult;

//https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
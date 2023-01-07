import React from 'react';
import {AiOutlineStar} from "react-icons/ai";
import {Link} from "react-router-dom";


const MovieCard = ({el}) => {

    return (
        <div className='card'>
            <Link to={`/movies/movie-detail/${el.id}`}>
                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`} alt=""/>
            </Link>


            <div style={{margin:"0 20px"}}>
                <h4 style={{width:"200px"}}>{el.title}</h4>
                <h5>{el.release_date}</h5>
                <p>{el.vote_average}</p>

                <div>
                    <AiOutlineStar/>
                    <AiOutlineStar/>
                    <AiOutlineStar/>
                    <AiOutlineStar/>
                    <AiOutlineStar/>
                </div>

                {/*<div className="stars" >*/}
                {/*    {*/}
                {/*        arr.map(el =>(*/}
                {/*            <div key={el} onClick={() =>{*/}
                {/*                setStar(el)*/}
                {/*            }}*/}
                {/*                 style={{color: star >= el ? "yellow" : ""*/}
                {/*                 }} className="star">★</div>*/}
                {/*        ))*/}
                {/*    }*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default MovieCard;
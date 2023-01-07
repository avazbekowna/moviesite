import React from 'react';
import Slider from "react-slick";
import {Link} from "react-router-dom";

const CastMovies = ({movie}) => {
    const settings = {
        dots: false ,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 5
    };

    return (
        <Slider {...settings}>
            {
                movie.map(el => (
                    <div>
                        {
                            el.poster_path ? <div>
                               <Link to={`/movies/movie-detail/${el.id}`}>
                                   <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${el.poster_path}`} width={150} alt=""/>
                               </Link>
                                <p>{el.title}</p>
                            </div> : ""
                        }
                    </div>
                ))
            }
        </Slider>
    );
};

export default CastMovies;
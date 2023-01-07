import React from 'react';
import Slider from "react-slick";
import PERSON from "../../img/person.webp"
import {Link} from "react-router-dom";

const CastSlider = ({cast}) => {

    const settings = {
        dots: false ,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 5
    };
    console.log(cast)


    return (
        <Slider {...settings}>
            {
                cast.map(el => (
                    <Link to={`/actors/actor-info/${el.id}`}>

                        <div>
                            {
                                el.profile_path ?
                                    <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face${el.profile_path}`} alt=""/> :
                                    <img src={PERSON} width={150} height={175} alt=""/>
                            }
                            <p>{el.name}</p>
                        </div>

                    </Link>


                ))
            }
        </Slider>

    );
};

export default CastSlider;
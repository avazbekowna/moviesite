import React, {useContext, useState} from 'react';
import {NavLink,Link, useNavigate} from "react-router-dom";
import {LanguageContext} from "../context";


const Header = ({changeMode , mode}) => {
    const[value, setValue] = useState('')
    const {setLanguage} = useContext(LanguageContext)
    const changeLanguage = (e) => {setLanguage(e.target.value)
    }

    const navigate = useNavigate()

    const handleClick = (name) => {
        if (value !== ""){
            navigate(`/movie/search-result/${name}`)
        }

    }
    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <div className="header-logo">
                        <h1>TMDB</h1>
                    </div>

                    <div className="search-movie">
                        <input onChange={(e) => setValue(e.target.value)} type="search "/>
                        <button onClick={() => handleClick(value)}>search</button>

                    </div>

                    <div className="right-side">
                        <nav className="header-nav">
                            <NavLink to={'/'}>Home</NavLink>
                            <NavLink to={'/recipes'}>Recipes</NavLink>
                            <NavLink to={'/popular'} >Popular</NavLink>
                            <NavLink to={'/nowPlaying'}>NowPlaying</NavLink>

                        </nav>


                        <div className="header-buttons">
                            <button  onClick={() => changeMode(mode)} className="dark-mode">{mode ? "Light mode" : "Dark mode"}</button>
                            <select name="" id="" onChange={changeLanguage} style={{margin: "0 20px"}}>
                                <option value="en-US">English</option>
                                <option value="ru-RU">Russian</option>
                                <option value="tr-TR">Turkish</option>
                                <option value="fr-FR">France</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Header;
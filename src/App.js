import React, {useEffect, useState} from "react"
import './App.scss';
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import {Routes,Route} from "react-router-dom"
import Home from "./components/Home"
import Popular from "./components/Popular"
import NowPlaying from "./components/NowPlaying";
import Blog from "./components/SearchResult/Blog";
import Support from "./components/Support";
import DetailPage from "./components/page/DetailPage";
import DetailCast from "./components/page/DetailCast/DetailCast";
import SearchResult from "./components/SearchResult";



function App() {
    const [mode, setMode] = useState(JSON.parse(localStorage.getItem('mode')) || false)

    const changeMode = (mode) => {
        localStorage.setItem('mode' , JSON.stringify(!mode))
        setMode(!mode)
    }

  return (
    <div className="App" style={{
        background: mode ? "black" : "",
        color: mode ? "white" : ""
    }}>
      <Header changeMode={changeMode} mode={mode}/>
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/recipes'} element={<Recipes/>}/>
            <Route path={'/popular'} element={<Popular/>}/>
            <Route path={'/nowPlaying'} element={<NowPlaying/>}/>
            <Route path={'/blog'} element={<Blog/>}/>
            <Route path={'/support'} element={<Support/>}/>
            <Route path={'/movies/movie-detail/:movieId'} element={<DetailPage/>}/>
            <Route path={'/actors/actor-info/:castId'} element={<DetailCast/>}/>
            <Route path={'/movie/search-result/:movieName'} element={<SearchResult/>}/>
        </Routes>

    </div>
  );
}

export default App;


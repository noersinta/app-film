import React from "react"
import { useEffect, useState } from 'react';
import "./Header.css"
import { Link } from "react-router-dom"


const Header = () => {
    const [movieList, setMovieList] = useState([])
    const [ term, setTerm] = useState ('')

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }, [])


    const handleSearch = (e) => {
        e.preventDefault()

        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US" + term)
         .then(res => res.json())
         .then(data => setMovieList(data.results))
    }
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" /></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
               
            </div>
            <div className="search-btn">
                <input type='text' placeholder="Search" className="inputTerm">
                </input>
                <button><i class='fas fa-search'></i></button>
        
       
        </div>
          
        </div>
    )
}

export default Header
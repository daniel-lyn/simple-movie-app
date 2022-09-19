
import { useState } from "react";
import { NavLink } from "react-router-dom";

function MovieListPage(){

    const[searchTerm, setSearchTerm] = useState('');
    const[movies, setMovies] = useState([]);

    const handleSearchTermChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const fetchMovies = (movieName) => {

        const searchURL = `https://www.omdbapi.com/?s=${movieName}&apikey=82b690b9`

        fetch(searchURL)
        .then(response => response.json())
        .then(result => {
            setMovies(result.Search)
        })

    }

    

    const movieItems = movies.map(movie => {
        return(
            
            <div>
                <img src={movie.Poster}></img>
                <h3>{movie.Title}</h3>
                <NavLink to = {`/${movie.imdbID}`}>Details</NavLink>
            </div>
        )
    })

    return(
        <div>
            <h1>Movie List Page</h1>
            Search: <input type="text" onChange={handleSearchTermChange}></input>
            <button type="button" class="btn btn-success" onClick={ ()=> fetchMovies(searchTerm)}>Search</button>

            {movieItems}
        </div>
    );
}

export default MovieListPage;

import { useEffect } from "react";
import { useParams } from "react-router-dom";


function MovieDetailPage(props) {

    useEffect(() => {
        const imdbId = props.match.params.imdbId
        fetchMovieDetailById(imdbId)
    })

    const fetchMovieDetailById = (imdbId) => {

        const movieDetailsURL = `https://www.omdbapi.com/?i=${imdbId}&apikey=82b690b9`
        fetchMovieDetailById(movieDetailsURL)
        .then(response => response.json())
        .then(result => {
            console.log(result)
        })
    }

    return (
        <h1>Movie Detail Page</h1>
    );
}

export default MovieDetailPage;
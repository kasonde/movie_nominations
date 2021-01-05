import {Movie} from "../utils/models";
import tempImage from "../images/temp.png";


type MovieItemProps = {
    movie: Movie,
}
const MovieItem = (props: MovieItemProps) =>{
    const {movie} = props;
    const getPoster = () =>{
        if (movie.Poster === "N/A"){
            return tempImage;
        }else{
            return movie.Poster;
        }
    }
    return <li className="result" >
        <img src={getPoster()} alt={`${movie.Title} Poster`} />
        <h4>{movie.Title} <span style={{color: "grey"}} className="movie_year">({movie.Year})</span></h4>
        <button>Nominate</button>
    </li>
}

export default MovieItem;

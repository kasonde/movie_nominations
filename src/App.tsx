import {useState} from "react";
import "./App.css"
import MovieItem from "./components/MovieItem";
import logo from './images/logo.png';
import {Movie} from "./utils/models";


const App = () =>{
    const [searchText, setSearchText] = useState(""); // store the search text
    const [searchResults, setSearchResults] = useState<Movie[]>([{
        Year: "2008",
        Title: "The Incredible Hulk",
        imdbID: "tt0800080",
        Poster: "https://m.media-amazon.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMTE1Njg2MQ@@._V1_SX300.jpg"
    }]); // store the search results in an array

    const search = async (event:any) =>{
        event.preventDefault(); // prevent the page from reloading on submit
        let url = new URL(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`);
        url.searchParams.append("s", searchText)
        // let httpRequest = await fetch(url.toString()); // this return request information 
        // if (!httpRequest.ok){
        //     alert("Unable to perform request");
        //     return;
        // }
        // let responseData = await httpRequest.json();
        // console.log(responseData);
    }

    return <div id="main">
        <div id="search-section">
            <header style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <img src={logo} alt="Shoppies Logo" />
            </header>
            <div id="main-page">
                <form onSubmit={search}>
                    <input value={searchText} onChange={(event:any)=>{
                        setSearchText(event.target.value);
                    }}type="text" placeholder="Search for a movie" />
                </form>
                <div id="results">
                    <h3>Search Results for <span className="highlight">{searchText}</span></h3>
                    <ul>
                        {searchResults.map((result:Movie)=><MovieItem movie={result} key={result.imdbID} />)}
                    </ul>
                </div>
            </div>
        </div>
        <div id="nominations-section">
            <h3>Nominations</h3>
        </div>
    </div>
}
export default App

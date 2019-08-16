import React from "react";
import Searchbar from "./Components/SearchBar";
import MovieItem from "./Components/MovieItem";
import "./Styles/App.css";

class App extends React.Component {
  state = {
    movie: "The Avengers",
    movieSuggestions: [],
    backdrop: {
      backgroundImage: ""
    }
  };

  componentDidMount = () => {
    this.fetchMovie(this.state.movie);
    let i = 2;
  };

  fetchMovie = async input => {
    // https://api.themoviedb.org/3/search/movie?api_key=56ca23a609362538544caeeeae436828&query=
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=56ca23a609362538544caeeeae436828&query=${input}`
    );
    const response = await data.json();
    if (response.results.length === 0) {
      console.log("error");
    } else {
      this.setState({
        movie: response.results[0],
        backdrop: `url('http://image.tmdb.org/t/p/original${
          response.results[0].backdrop_path
        }')`
      });
    }
  };

  // Background for container div

  // Map over state and output a movieitem for every item in array

  render() {
    return (
      <div className="container">
        <Searchbar fetchMovie={this.fetchMovie} />
        <MovieItem
          title={this.state.movie.original_title}
          poster={this.state.movie.poster_path}
          backdrop={this.state.movie.backdrop_path}
          description={this.state.movie.overview}
          rating={this.state.movie.vote_average}
          ratingCount={this.state.movie.vote_count}
          genre={this.state.movie.genre_ids}
          release={this.state.movie.release_date}
        />
        <div
          className="background-container"
          style={{ background: this.state.backdrop }}
        />
      </div>
    );
  }
}

export default App;

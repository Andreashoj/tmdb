import React from "react";
import "../Styles/MovieItem.css";

const MovieItem = ({
  title,
  poster,
  backdrop,
  description,
  rating,
  ratingCount,
  genre,
  release
}) => {
  const image = `http://image.tmdb.org/t/p/original/${poster}`;
  const background = `http://image.tmdb.org/t/p/original/${backdrop}`;
  const genreData = [
    {
      id: 28,
      name: "Action"
    },
    {
      id: 12,
      name: "Adventure"
    },
    {
      id: 16,
      name: "Animation"
    },
    {
      id: 35,
      name: "Comedy"
    },
    {
      id: 80,
      name: "Crime"
    },
    {
      id: 99,
      name: "Documentary"
    },
    {
      id: 18,
      name: "Drama"
    },
    {
      id: 10751,
      name: "Family"
    },
    {
      id: 14,
      name: "Fantasy"
    },
    {
      id: 36,
      name: "History"
    },
    {
      id: 27,
      name: "Horror"
    },
    {
      id: 10402,
      name: "Music"
    },
    {
      id: 9648,
      name: "Mystery"
    },
    {
      id: 10749,
      name: "Romance"
    },
    {
      id: 878,
      name: "Science Fiction"
    },
    {
      id: 10770,
      name: "TV Movie"
    },
    {
      id: 53,
      name: "Thriller"
    },
    {
      id: 10752,
      name: "War"
    },
    {
      id: 37,
      name: "Western"
    }
  ];

  if (genre == undefined) {
    return "";
  }

  const listedGenre = genreData.filter(genreID => {
    for (var i = 0; i < genre.length; i++) {
      if (genreID.id == genre[i]) {
        return genreID.name;
      }
    }
  });

  return (
    <div className="movie-container">
      <div className="movie-content">
        <h2 className="title">{title}</h2>
        <p className="release">{release}</p>
        <p className="description">{description}</p>
        <p className="voteDesc">Voting average</p>
        <h3 className="rating">{rating} / 10</h3>
        <h5 className="ratingCount">{ratingCount} votes</h5>
        <div className="genreContainer">
        {listedGenre.map(genre => {
          return <p key={genre.id} className="genre">{genre.name}</p>;
        })}
        </div>
      </div>
      <div className="movie-poster">
        <img src={image} className="poster" />
      </div>
    </div>
  );
};

export default MovieItem;


"use client";

import Movie from "./_components/movie";
import MovieInfo from "./_components/movieinfo";
import MovieList from "./_components/movielist";
// import randomMovie from "./_components/inception.json";
import Modal from "./_components/modal";
import { useState, useEffect } from "react";

export default function Page() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movieList, setMovieList] = useState([]);

  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  const handleSearch = async (query) => {
    try {
      const response = await fetch(
        `https://imdb.iamidiotareyoutoo.com/search?q=${query}`
      );
      const data = await response.json();

      if (data.ok) {
        setMovieList(data.description);
        console.log(movieList);
      } else {
        alert("No Movies Found");
        setMovieList([]);
      }
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };

  const handleClear = () => {
    setMovieList([]);
    alert("Cleared!");
  };

  return (
    <main className="bg-slate-400 flex flex-row justify-center align-middle">
      <div className="m-2">
        <Movie onSearch={handleSearch} onClear={handleClear} />
        <MovieList
          data={{ description: movieList }}
          onSelect={handleSelectMovie}
        />
        {/* <MovieInfo data={randomMovie} /> */}

        {selectedMovie && (
          <Modal movie={selectedMovie} onClose={handleCloseModal} />
        )}
      </div>
    </main>
  );
}

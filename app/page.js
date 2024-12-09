"use client";

import Movie from "./_components/movie";
import MovieInfo from "./_components/movieinfo";
import MovieList from "./_components/movielist";
import randomMovie from "./_components/inception.json";
import Modal from "./_components/modal";
import { useState } from "react";

export default function Page() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  return (
    <main className="bg-slate-400 flex flex-row justify-center align-middle">
      <div className="m-2">
        {/* <Movie /> */}
        <MovieList data={randomMovie} onSelect={handleSelectMovie} />
        {/* <MovieInfo data={randomMovie} /> */}

        {selectedMovie && (
          <Modal movie={selectedMovie} onClose={handleCloseModal} />
        )}
      </div>
    </main>
  );
}

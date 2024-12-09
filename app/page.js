"use client";

import Movie from "./_components/movie";
import MovieInfo from "./_components/movieinfo";
import MovieList from "./_components/movielist";
import randomMovie from "./_components/inception.json";
import { useState } from "react";

export default function Page() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <main className="bg-slate-400">
      <div className="m-2">
        <p>Hello World!</p>
        {/* <Movie /> */}
        <MovieList data={randomMovie} onSelect={handleSelectMovie} />
        {/* <MovieInfo data={randomMovie} /> */}

        {selectedMovie && <MovieInfo movie={selectedMovie} />}
      </div>
    </main>
  );
}

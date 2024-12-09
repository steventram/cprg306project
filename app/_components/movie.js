"use client";

import { useState } from "react";

export default function NewMovie() {
  const [movieName, setMovieName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let movie = { movieName: movieName };

    setMovieName("");

    alert(`Name: ${movie.movieName}`);
  };

  const handleNameChange = (event) => setMovieName(event.target.value);

  return (
    <div className="m-1">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter Movie Name"
            className="rounded-md text-center w-full border-2 border-slate-400"
            onChange={handleNameChange}
            value={movieName}
            required
          />
        </div>
      </form>
    </div>
  );
}

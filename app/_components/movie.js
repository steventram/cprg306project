"use client";

import { useState } from "react";

export default function Movie({ onSearch, onClear }) {
  const [movieName, setMovieName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let movie = { movieName: movieName };

    setMovieName("");
    onSearch(movieName);

    alert(`Name: ${movie.movieName}`);
  };

  const handleNameChange = (event) => setMovieName(event.target.value);
  const handleClear = () => {
    setMovieName("");
    onClear();
  };

  return (
    <div className="m-1 flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center m-1">
          <input
            type="text"
            placeholder="Enter Movie Name"
            className="rounded-md text-center w-full border-2 border-slate-400 m-1"
            onChange={handleNameChange}
            value={movieName}
            required
          />
          <button className="rounded-md text-center w-32 border-2 border-black bg-green-200 hover:bg-green-300">
            Search
          </button>
        </div>
      </form>
      <button
        className="rounded-md text-center w-32 border-2 border-black bg-indigo-200 hover:bg-indigo-300"
        onClick={handleClear}
      >
        Clear
      </button>
    </div>
  );
}

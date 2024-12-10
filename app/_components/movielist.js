import Link from "next/link";

//component that displays the list of movies which the matching search query
//fetched from the api
export default function MovieList({ data, onSelect }) {
  return (
    <section>
      {data.description.map((movie, index) => (
        <div
          onClick={() => onSelect(movie)}
          key={index}
          className="mb-5 border-2 border-solid border-black p-2 flex flex-col items-center bg-slate-200"
        >
          <h2 className="text-center">{movie["#TITLE"]}</h2>
          <img
            src={movie["#IMG_POSTER"]}
            alt="Movie's poster"
            width={150}
            className=""
          />
        </div>
      ))}
    </section>
  );
}

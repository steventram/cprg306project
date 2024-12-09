import Link from "next/link";

export default function MovieInfo({ data }) {
  return (
    <div>
      {data.description.map((movie, index) => (
        <div
          key={index}
          className="mb-5 border-2 border-solid border-black p-2"
        >
          <h2>{movie["#TITLE"]}</h2>
          <img src={movie["#IMG_POSTER"]} alt="Movie's poster" width={150} />
          <p>
            <b>Year:</b> {movie["#YEAR"]}
          </p>
          <p>
            <b>IMDB ID:</b> {movie["#IMDB_ID"]}
          </p>
          <p>
            <b>IMDB Rank:</b> {movie["#RANK"]}
          </p>
          <p>
            <b>Actors:</b> {movie["#ACTORS"]}
          </p>
          <Link
            href={movie["#IMDB_URL"]}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-500 rounded-sm hover:bg-slate-300 active:bg-sky-200"
          >
            View on IMDB
          </Link>
        </div>
      ))}
    </div>
  );
}

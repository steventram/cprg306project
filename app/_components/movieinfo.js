import Link from "next/link";

//component that renders information based on the selected movie
export default function MovieInfo({ movie }) {
  return (
    <div>
      {movie && (
        <div className="mb-5 border-2 border-solid border-black p-2 flex flex-col items-center">
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
            className="bg-slate-500 rounded-sm hover:bg-cyan-200 active:bg-sky-200"
          >
            View on IMDB
          </Link>
        </div>
      )}
    </div>
  );
}

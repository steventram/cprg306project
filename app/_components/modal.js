import MovieInfo from "./movieinfo";

export default function Modal({ movie, onClose }) {
  return (
    <div className="fixed top-2 right-5 w-auto h-auto flex justify-center items-center">
      <div className="bg-slate-300 p5 rounded-lg w-auto relative flex flex-col justify-center">
        <button onClick={onClose} className="hover:bg-red-400 rounded-md">
          Close
        </button>
        <MovieInfo movie={movie} />
      </div>
    </div>
  );
}

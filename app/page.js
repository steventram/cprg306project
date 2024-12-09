import Movie from "./_components/movie";
import MovieInfo from "./_components/movieinfo";
import MovieList from "./_components/movielist";
import randomMovie from "./_components/inception.json";

export default function Page() {
  return (
    <main className="bg-slate-400">
      <div>
        <p>Hello World!</p>
        <Movie />
        {/* <MovieList /> */}
        <MovieInfo data={randomMovie} />
      </div>
    </main>
  );
}

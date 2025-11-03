import ErrorAlert from "./ErrorAlert";
import MovieCard from "./MovieCard";

const MovieList = ({
  movies,
  loading,
  error,
  onEdit,
  onDelete,
  onViewDetail,
}) => {
  if (error) {
    return <ErrorAlert message={error} />;
  }

  if (loading) {
    return (
      <div className="col-span-full text-center py-12">
        <p className="text-gray-600 dark:text-gray-400 font-medium">
          Memuat data film...
        </p>
      </div>
    );
  }

  if (movies.length === 0) {
    return (
      <div className="col-span-full text-center py-12">
        <p className="text-gray-600 dark:text-gray-400 font-medium">
          Belum ada film 🎬
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onEdit={onEdit}
          onDelete={onDelete}
          onViewDetail={onViewDetail}
        />
      ))}
    </div>
  );
};

export default MovieList;

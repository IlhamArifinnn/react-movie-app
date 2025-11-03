import { Edit2, Trash2, Clock, Calendar, User } from "lucide-react";

const MovieCard = ({ movie, onEdit, onDelete }) => {
  const genres = Array.isArray(movie.genre) ? movie.genre : [];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition border border-gray-200 dark:border-slate-700 flex flex-col h-full">
      <div className="relative h-56 overflow-hidden bg-linear-to-br from-green-500 to-emerald-600 dark:from-green-600 dark:to-emerald-700">
        {movie.poster_url ? (
          <img
            src={movie.poster_url}
            alt={movie.title}
            className="w-full h-full object-cover hover:scale-105 transition duration-300"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-6xl">🎬</span>
          </div>
        )}

        <div className="absolute top-3 right-3 bg-amber-100 text-amber-900 px-3 py-1 rounded-full font-bold text-sm flex items-center gap-1">
          <span>⭐</span>
          {movie.rating}
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 line-clamp-2">
          {movie.title}
        </h3>

        {movie.director && (
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm mb-3">
            <User size={14} />
            <span>{movie.director}</span>
          </div>
        )}

        {genres.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {genres.map((genre, idx) => (
              <span
                key={idx}
                className="bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 px-2 py-1 rounded text-xs font-semibold"
              >
                {genre}
              </span>
            ))}
          </div>
        )}

        {movie.description && (
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2 flex-1">
            {movie.description}
          </p>
        )}

        <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 text-xs mb-4 py-2 border-t border-gray-200 dark:border-slate-700">
          {movie.release_date && (
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>
                {new Date(movie.release_date).toLocaleDateString("id-ID")}
              </span>
            </div>
          )}
          {movie.duration_minutes && (
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{movie.duration_minutes} min</span>
            </div>
          )}
        </div>

        <div className="flex gap-2 mt-auto">
          <button
            onClick={() => onEdit(movie)}
            className="flex-1 flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-lg font-semibold transition-colors"
          >
            <Edit2 size={16} />
            Edit
          </button>
          <button
            onClick={() => onDelete(movie.id)}
            className="flex-1 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-semibold transition-colors"
          >
            <Trash2 size={16} />
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

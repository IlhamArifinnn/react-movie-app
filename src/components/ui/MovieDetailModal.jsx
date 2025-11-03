import {
  X,
  Clock,
  Calendar,
  User,
  Star,
  Film,
  Edit2,
  Trash2,
} from "lucide-react";

const MovieDetailModal = ({ isOpen, movie, onClose, onEdit, onDelete }) => {
  if (!isOpen || !movie) return null;

  const genres = Array.isArray(movie.genre) ? movie.genre : [];

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-slate-800 rounded-xl w-full max-w-4xl max-h-[96vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-slate-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Film size={24} />
            Detail Film
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-140px)]">
          <div className="p-6">
            {/* Poster and Basic Info */}
            <div className="flex flex-col lg:flex-row gap-6 mb-6">
              {/* Poster */}
              <div className="lg:w-[40%]">
                <div className="relative aspect-[2/3] rounded-xl overflow-hidden bg-linear-to-br from-green-500 to-emerald-600 dark:from-green-600 dark:to-emerald-700">
                  {movie.poster_url ? (
                    <img
                      src={movie.poster_url}
                      alt={movie.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextElementSibling.style.display = "flex";
                      }}
                    />
                  ) : null}
                  <div
                    className={`w-full h-full flex items-center justify-center ${
                      movie.poster_url ? "hidden" : "flex"
                    }`}
                  >
                    <span className="text-6xl">🎬</span>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-3 right-3 bg-amber-100 text-amber-900 px-3 py-2 rounded-full font-bold text-sm flex items-center gap-1 shadow-lg">
                    <Star size={16} className="fill-amber-400" />
                    <span>{movie.rating}/10</span>
                  </div>
                </div>
              </div>

              {/* Basic Info */}
              <div className="lg:w-[60%]">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {movie.title}
                </h1>

                {/* Director */}
                {movie.director && (
                  <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 mb-4">
                    <User size={20} className="text-green-600" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Sutradara
                      </p>
                      <p className="font-semibold">{movie.director}</p>
                    </div>
                  </div>
                )}

                {/* Meta Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {movie.release_date && (
                    <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                      <Calendar size={20} className="text-green-600" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Tanggal Rilis
                        </p>
                        <p className="font-semibold">
                          {new Date(movie.release_date).toLocaleDateString(
                            "id-ID",
                            {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </p>
                      </div>
                    </div>
                  )}

                  {movie.duration_minutes && (
                    <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                      <Clock size={20} className="text-green-600" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Durasi
                        </p>
                        <p className="font-semibold">
                          {movie.duration_minutes} menit
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Genres */}
                {genres.length > 0 && (
                  <div className="mb-6">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      Genre
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {genres.map((genre, idx) => (
                        <span
                          key={idx}
                          className="bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 px-3 py-1.5 rounded-lg text-sm font-semibold border border-green-200 dark:border-green-800"
                        >
                          {genre}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Description */}
                {movie.description && (
                  <div className="border-t border-gray-200 dark:border-slate-700 pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Sinopsis
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                      {movie.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex gap-3 p-6 border-t border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900/50">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 bg-gray-300 hover:bg-gray-400 dark:bg-slate-700 dark:hover:bg-slate-600 text-gray-700 dark:text-white rounded-lg font-semibold transition-colors"
          >
            Tutup
          </button>
          <button
            onClick={() => onEdit(movie)}
            className="flex-1 px-4 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
          >
            <Edit2 size={18} />
            Edit Film
          </button>
          <button
            onClick={() => onDelete(movie.id)}
            className="flex-1 px-4 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
          >
            <Trash2 size={18} />
            Hapus Film
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailModal;

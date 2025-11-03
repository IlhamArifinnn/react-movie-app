import { Plus } from "lucide-react";
import { MovieModal, MovieList } from "../components";
import { useMovieList, useMovieModal } from "../hooks";

const MoviePage = () => {
  const { movies, loading, error, createMovie, updateMovie, deleteMovie } =
    useMovieList();

  const {
    isModalOpen,
    editingMovie,
    openAddModal,
    openEditModal,
    closeModal,
    saveMovie,
    removeMovie,
  } = useMovieModal(createMovie, updateMovie, deleteMovie);

  return (
    <>
      <div className="flex justify-between items-center mb-12 pt-16">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Daftar Film
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Kelola koleksi film favorit Anda
          </p>
        </div>
        <button
          onClick={openAddModal}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          <Plus size={20} />
          Tambah Film
        </button>
      </div>

      <MovieList
        movies={movies}
        loading={loading}
        error={error}
        onEdit={openEditModal}
        onDelete={removeMovie}
      />

      <MovieModal
        isOpen={isModalOpen}
        title={editingMovie ? "Edit Film" : "Tambah Film Baru"}
        initialData={editingMovie}
        onSubmit={saveMovie}
        onClose={closeModal}
      />
    </>
  );
};

export default MoviePage;

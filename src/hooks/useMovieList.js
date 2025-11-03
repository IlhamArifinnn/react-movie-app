// import hooks, useState, useEffect, useCallback dari reactimport { useState, useEffect, useCallback } from 'react';
import { useState, useEffect, useCallback } from "react";

// import movieService untuk berinteraksi dengan API movie
import * as movieService from "../services/movieService";

/**
 * Hook untuk mengelola daftar movie
 * @returns { movies, loading, error, createMovie, updateMovie, deleteMovie, loadMovies }
 */
export const useMovieList = () => {
  // Membuat state untuk menyimpan daftar movie
  const [movies, setMovies] = useState([]);
  // Membuat state untuk menyimpan status loading
  const [loading, setLoading] = useState(true);
  // Membuat state untuk menyimpan error
  const [error, setError] = useState(null);

  // Function untuk memuat daftar movie dari API
  const loadMovies = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await movieService.getAllMovies();
      setMovies(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err.message);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // Memuat daftar movie saat hook pertama kali digunakan
  useEffect(() => {
    loadMovies();
  }, [loadMovies]);

  // Function untuk menambah movie
  const createMovie = useCallback(
    async (formData) => {
      try {
        const newMovie = await movieService.createMovie(formData);
        setMovies((prevMovies) => [...prevMovies, newMovie]);
        loadMovies();
        return { success: true };
      } catch (err) {
        return { success: false, error: err.message };
      }
    },
    [loadMovies]
  );

  // Function untuk mengupdate movie
  const updateMovie = useCallback(
    async (id, formData) => {
      try {
        const updatedMovie = await movieService.updateMovie(id, formData);
        setMovies((prevMovies) =>
          prevMovies.map((movie) => (movie.id === id ? updatedMovie : movie))
        );
        loadMovies();
        return { success: true };
      } catch (err) {
        return { success: false, error: err.message };
      }
    },
    [loadMovies]
  );

  // Function untuk menghapus movie
  const deleteMovie = useCallback(
    async (id) => {
      try {
        await movieService.deleteMovie(id);
        setMovies((prevMovies) =>
          prevMovies.filter((movie) => movie.id !== id)
        );
        loadMovies();
        return { success: true };
      } catch (err) {
        return { success: false, error: err.message };
      }
    },
    [loadMovies]
  );

  return {
    movies,
    loading,
    error,
    createMovie,
    updateMovie,
    deleteMovie,
    loadMovies,
  };
};

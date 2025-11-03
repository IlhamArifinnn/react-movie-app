// import ky library for HTTP requests
import ky from "ky";

// import API_BASE_URL from constants
import { API_BASE_URL } from "../utils/constants";

// membuat instance ky dengan konfigurasi dasar
const api = ky.create({
  prefixUrl: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
  timeout: 10000,
  retry: {
    limit: 2,
    methods: ["get", "post", "put", "delete"],
    statusCodes: [408, 500, 502, 503, 504],
  },
});

// Membuat fungsi GetAllMovies untuk mengambil semua data film
export const getAllMovies = async () => {
  try {
    const res = await api.get("movies").json();
    return res.data;
  } catch (error) {
    throw new Error(`Gagal ambil film: ${error.message}`);
  }
};

// Membuat fungsi GetMovieById untuk mengambil satu data film
export const getMovieById = async (id) => {
  try {
    const res = await api.get(`movies/${id}`).json();
    return res.data;
  } catch (error) {
    throw new Error(`Gagal ambil film: ${error.message}`);
  }
};

// Membuat fungsi CreateMovie untuk menambah data film
export const createMovie = async (movieData) => {
  try {
    return await api.post("movies", { json: movieData }).json();
  } catch (error) {
    throw new Error(`Gagal tambah film: ${error.message}`);
  }
};

// Membuat fungsi UpdateMovie untuk mengubah data film
export const updateMovie = async (id, movieData) => {
  try {
    return await api.put(`movies/${id}`, { json: movieData }).json();
  } catch (error) {
    throw new Error(`Gagal update film: ${error.message}`);
  }
};

// Membuat fungsi DeleteMovie untuk menghapus data film
export const deleteMovie = async (id) => {
  try {
    await api.delete(`movies/${id}`);
    return { success: true };
  } catch (error) {
    throw new Error(`Gagal hapus film: ${error.message}`);
  }
};

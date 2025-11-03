// import hooks, useEffect dari react
import { useEffect } from "react";

// import useForm dari react-hook-form
import { useForm } from "react-hook-form";

// import zodResolver dari @hookform/resolvers/zod
import { zodResolver } from "@hookform/resolvers/zod";

// import movieSchema untuk validasi form
import { movieSchema } from "../schemas/movieSchema";

/**
 * Hook untuk mengelola form movie
 * @param {*} initialData
 * @param {*} onSubmit
 * @returns { register, formState: { errors }, handleFormSubmit }
 */
export const useMovieForm = (initialData, onSubmit) => {
  // Membuat form dengan react-hook-form dan zodResolver
  // Destructuring form methods dan state
  // Effect untuk mereset form saat initialData berubah
  // Handle submit form
  const form = useForm({
    resolver: zodResolver(movieSchema),
    defaultValues: formatInitialData(initialData),
  });

  const { reset, handleSubmit } = form;

  useEffect(() => {
    if (initialData) {
      reset(formatInitialData(initialData));
    }
  }, [initialData, reset]);

  const handleFormSubmit = handleSubmit((data) => {
    const formatted = formatSubmitData(data);
    onSubmit(formatted);
    reset();
  });

  return { ...form, handleFormSubmit };
};

/* 🔧 Helper untuk format data masuk */
// function formatInitialData() {
// jika data kosong, kembalikan objek kosong
// return data dengan format release_date dan genre yang sesuai
// }
function formatInitialData(data) {
  if (!data) return {};

  return {
    ...data,
    release_date: data.release_date
      ? new Date(data.release_date).toISOString().split("T")[0]
      : "",
    genre: Array.isArray(data.genre) ? data.genre.join(", ") : data.genre || "",
  };
}

/* 🔧 Helper untuk format data keluar (kirim ke backend) */
// function formatSubmitData() {
// return data dengan format genre yang sesuai
// }
function formatSubmitData(data) {
  return {
    ...data,
    genre: Array.isArray(data.genre)
      ? data.genre
      : data.genre
      ? data.genre.split(",").map((g) => g.trim())
      : [],
  };
}

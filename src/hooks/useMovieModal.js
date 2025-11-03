import { useState } from "react";

/**
 * Hook untuk mengatur state & logika modal Add/Edit Movie
 * @param {*} onCreate
 * @param {*} onUpdate
 * @param {*} onDelete
 * @returns { isModalOpen, editingMovie, openAddModal, openEditModal, closeModal, saveMovie, removeMovie }
 */
export const useMovieModal = (onCreate, onUpdate, onDelete) => {
  // Membuat state untuk mengatur apakah modal terbuka atau tidak
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Membuat state untuk menyimpan data film yang sedang diedit (null jika menambah film baru)
  const [editingMovie, setEditingMovie] = useState(null);

  // Membuka modal untuk menambah film baru
  const openAddModal = () => {
    setEditingMovie(null);
    setIsModalOpen(true);
  };

  // Membuka modal untuk mengedit film yang sudah ada
  const openEditModal = (movie) => {
    setEditingMovie(movie);
    setIsModalOpen(true);
  };

  // Menutup semua modal dan mengosongkan data editingMovie
  const closeModal = () => {
    setIsModalOpen(false);
    setEditingMovie(null);
  };

  // Handle submit form untuk menambah atau mengedit film
  const saveMovie = async (formData) => {
    const result = editingMovie
      ? await onUpdate(editingMovie.id, formData)
      : await onCreate(formData);

    if (result.success) closeModal();
    else alert("Gagal menyimpan film: " + result.error);
  };

  // Handle menghapus film
  const removeMovie = async (id) => {
    if (!confirm("Hapus film ini?")) return;
    await onDelete(id);
  };

  return {
    isModalOpen,
    editingMovie,
    openAddModal,
    openEditModal,
    closeModal,
    saveMovie,
    removeMovie,
  };
};

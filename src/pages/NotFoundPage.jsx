import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
          404 - Halaman Tidak Ditemukan
        </h1>
        <p className="text-2xl text-gray-600 dark:text-gray-400 mb-8">
          Maaf, halaman yang Anda cari tidak ada.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          Kembali ke Beranda
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;

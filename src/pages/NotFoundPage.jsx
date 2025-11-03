import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">
          404 - Halaman Tidak Ditemukan
        </h1>
        <p className="text-2xl text-slate-400 mb-8">
          Maaf, halaman yang Anda cari tidak ada.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Kembali ke Beranda
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;

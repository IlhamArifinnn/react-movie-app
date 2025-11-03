import { X } from "lucide-react";
import MovieForm from "./MovieForm";

const MovieModal = ({ isOpen, title, initialData, onSubmit, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-slate-800 rounded-xl w-full max-w-lg p-6 border border-gray-300 dark:border-slate-700 max-h-[90vh] overflow-y-auto shadow-xl">
        <div className="flex justify-between items-center mb-4 sticky top-0 bg-white dark:bg-slate-800 pb-3">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <MovieForm
          initialData={initialData}
          onSubmit={onSubmit}
          onCancel={onClose}
        />
      </div>
    </div>
  );
};

export default MovieModal;

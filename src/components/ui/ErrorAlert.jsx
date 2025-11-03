import { AlertCircle, X } from "lucide-react";

const ErrorAlert = ({ message, onClose }) => {
  return (
    <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-600 rounded-lg flex items-center justify-between">
      <div className="flex items-center gap-3">
        <AlertCircle className="text-red-500 dark:text-red-400" size={20} />
        <span className="text-red-700 dark:text-red-300">{message}</span>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="text-red-500 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors"
        >
          <X size={20} />
        </button>
      )}
    </div>
  );
};

export default ErrorAlert;

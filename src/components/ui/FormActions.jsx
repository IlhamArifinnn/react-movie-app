import { Check, Plus } from "lucide-react";

const FormActions = ({ onCancel, isEdit = false }) => {
  const submitLabel = isEdit ? "Simpan Perubahan" : "Buat Film";

  return (
    <div className="flex gap-2 mt-4">
      <button
        type="button"
        onClick={onCancel}
        className="flex-1 px-3 py-2.5 bg-gray-300 hover:bg-gray-400 dark:bg-slate-700 dark:hover:bg-slate-600 text-gray-700 dark:text-white rounded font-semibold text-sm transition-colors"
      >
        Batal
      </button>
      <button
        type="submit"
        className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded font-semibold text-sm transition-colors"
      >
        <Check size={16} />
        {submitLabel}
      </button>
    </div>
  );
};

export default FormActions;

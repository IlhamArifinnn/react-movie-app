const TextArea = ({ label, name, placeholder, register, errors, rows = 2 }) => {
  const errorMessage = errors?.[name]?.message;
  return (
    <div>
      <label className="block text-gray-700 dark:text-gray-300 text-xs font-semibold mb-1">
        {label} <span className="text-red-500">*</span>
      </label>
      <textarea
        placeholder={placeholder}
        rows={rows}
        {...register?.(name)}
        className={`w-full bg-white dark:bg-slate-800 text-gray-900 dark:text-white px-3 py-1.5 rounded text-sm border ${
          errorMessage
            ? "border-red-500"
            : "border-gray-300 dark:border-slate-600"
        } focus:border-green-500 outline-none resize-none transition-colors`}
      />
      {errorMessage && (
        <p className="text-red-500 text-xs mt-0.5">{errorMessage}</p>
      )}
    </div>
  );
};

export default TextArea;

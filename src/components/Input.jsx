const Input = ({
  label,
  name,
  type = "text",
  placeholder,
  step,
  register,
  errors,
}) => {
  const errorMessage = errors?.[name]?.message;
  return (
    <div>
      <label className="block text-gray-700 dark:text-gray-300 text-xs font-semibold mb-1">
        {label} <span className="text-red-500">*</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        step={step}
        {...register?.(name)}
        className={`w-full bg-white dark:bg-slate-800 text-gray-900 dark:text-white px-3 py-1.5 rounded text-sm border ${
          errorMessage
            ? "border-red-500"
            : "border-gray-300 dark:border-slate-600"
        } focus:border-green-500 outline-none transition-colors`}
      />
      {errorMessage && (
        <p className="text-red-500 text-xs mt-0.5">{errorMessage}</p>
      )}
    </div>
  );
};

export default Input;

import ErrorMessage from "../lib/ErrorMsg";

export default function RadioField({
  label,
  name,
  register,
  error,
  options,
  type = "radio",
}) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <p className="text-sm font-bold">{label}</p>
      <div className="flex flex-wrap gap-4">
        {options.map((opt) => (
          <label key={opt.value} className="flex items-center gap-1">
            <input className="accent-amber-600" type={type} value={opt.value} {...register(name)} />
            {opt.label}
          </label>
        ))}
      </div>
    <ErrorMessage message={error}/>
    </div>
  );
}

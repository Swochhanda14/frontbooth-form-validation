import ErrorMessage from "../lib/ErrorMsg";

export default function FileField ({ label, name, register, error}){
    return(
        <div className="flex flex-col gap-1 w-full">
            <label className="text-sm font-bold">{label}</label>
            <input 
              type="file" 
              aria-invalid={!!error}
              className={`w-full rounded-lg border p-2 shadow-sm focus:outline-none focus:ring-2 ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-amber-500'}`}
              {...register(name)} />
            <ErrorMessage message={error}/>
        </div>
    )
}

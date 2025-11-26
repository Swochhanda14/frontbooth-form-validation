import ErrorMessage from "../lib/ErrorMsg"

export default function CheckboxField({label, name, register, value, error}){
    return(
        <div className="flex flex-col gap-1">
            <label className="flex items-center gap-2 text-sm">
                <input className="accent-amber-600" type="checkbox" {...register(name)} value={value}/>
                {label}
            </label>
            <ErrorMessage message={error}/>
        </div>
    )
}

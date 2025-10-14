import { Colors } from "../lib/theme";

interface FormFieldProps {
  id: string;
  label: string;
  type?: "text" | "email" | "textarea";
  placeholder: string;
  rows?: number;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

export const FormField = ({ 
  id, 
  label, 
  type = "text", 
  placeholder, 
  rows = 5,
  required = false,
  disabled = false,
  className = "" 
}: FormFieldProps) => {
  const baseInputClasses = "w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-60 disabled:cursor-not-allowed";
  const textareaClasses = `${baseInputClasses} resize-none`;

  return (
    <div className={`space-y-2 ${className}`}>
      <label 
        htmlFor={id} 
        className={`block text-sm font-semibold`}
        style={{ color: Colors.primary }}
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      {type === "textarea" ? (
        <textarea
          id={id}
          name={id}
          rows={rows}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          className={textareaClasses}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={id}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          className={baseInputClasses}
        />
      )}
    </div>
  );
};

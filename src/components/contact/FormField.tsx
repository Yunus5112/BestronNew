import { Colors, Typography } from "../lib/theme";

interface FormFieldProps {
  id: string;
  label: string;
  type?: "text" | "email" | "textarea";
  placeholder: string;
  rows?: number;
  required?: boolean;
  className?: string;
}

export const FormField = ({ 
  id, 
  label, 
  type = "text", 
  placeholder, 
  rows = 5,
  required = false,
  className = "" 
}: FormFieldProps) => {
  const baseInputClasses = "w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent";
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
          className={textareaClasses}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={id}
          placeholder={placeholder}
          required={required}
          className={baseInputClasses}
        />
      )}
    </div>
  );
};

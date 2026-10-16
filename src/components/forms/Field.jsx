/** Label + control + hint/error wrapper */
export default function Field({ label, required, hint, error, htmlFor, className, children }) {
  return (
    <div className={className}>
      {label && (
        <label htmlFor={htmlFor} className="mb-2 block text-sm font-semibold">
          {label}
          {required && <span className="ml-1 text-danger">*</span>}
        </label>
      )}
      {children}
      {error ? (
        <p role="alert" className="mt-2 text-xs text-danger">
          {error}
        </p>
      ) : (
        hint && <p className="mt-2 text-xs leading-5 text-muted/80">{hint}</p>
      )}
    </div>
  );
}
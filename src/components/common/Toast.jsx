/** Small confirmation message at the bottom of the screen. Render only while it should be visible. */
export default function Toast({ message }) {
  if (!message) return null;
  return (
    <div
      role="status"
      className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-white shadow-lg"
    >
      {message}
    </div>
  );
}
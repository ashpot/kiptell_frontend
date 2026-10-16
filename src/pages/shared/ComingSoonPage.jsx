import { useLocation } from "react-router-dom";

/** Temporary stand-in for screens that haven't been built yet. */
export default function ComingSoonPage() {
  const { pathname } = useLocation();
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center py-24 text-center">
      <h1 className="text-2xl font-semibold">This page isn't built yet</h1>
      <p className="mt-2 text-muted">
        <code className="rounded bg-white px-1.5 py-0.5 text-sm">{pathname}</code> will be added
        when its design is ready.
      </p>
    </div>
  );
}

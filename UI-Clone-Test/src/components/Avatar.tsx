export function Avatar({
  name,
  url,
  size = 32,
}: {
  name: string;
  url?: string;
  size?: number;
}) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const dimension = `${size}px`;

  if (url) {
    return (
      <img
        src={url}
        alt={name}
        className="rounded-full object-cover"
        style={{ width: dimension, height: dimension }}
      />
    );
  }

  return (
    <div
      className="rounded-full bg-gradient-to-br from-slate-200 to-slate-300 text-slate-700 font-medium grid place-items-center"
      style={{ width: dimension, height: dimension }}
    >
      {initials}
    </div>
  );
}

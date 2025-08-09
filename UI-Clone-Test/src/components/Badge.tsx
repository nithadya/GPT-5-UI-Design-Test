export function Badge({
  children,
  color,
  className = "",
}: {
  children: React.ReactNode;
  color?: string;
  className?: string;
}) {
  const base =
    "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium";
  const palette = color ?? "bg-slate-100 text-slate-700";
  return <span className={`${base} ${palette} ${className}`}>{children}</span>;
}

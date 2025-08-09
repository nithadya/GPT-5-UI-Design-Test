export type BadgeProps = {
  children: React.ReactNode;
  color?:
    | "slate"
    | "violet"
    | "green"
    | "blue"
    | "pink"
    | "amber"
    | "neutral";
  className?: string;
} & React.HTMLAttributes<HTMLSpanElement>;

const colorToClasses: Record<NonNullable<BadgeProps["color"]>, string> = {
  slate: "bg-slate-100 text-slate-700",
  violet: "bg-violet-100 text-violet-700",
  green: "bg-emerald-100 text-emerald-700",
  blue: "bg-sky-100 text-sky-700",
  pink: "bg-pink-100 text-pink-700",
  amber: "bg-amber-100 text-amber-800",
  neutral: "bg-neutral-100 text-neutral-700",
};

export function Badge({ children, color = "neutral", className = "", ...rest }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium ${colorToClasses[color]} ${className}`}
      {...rest}
    >
      {children}
    </span>
  );
}



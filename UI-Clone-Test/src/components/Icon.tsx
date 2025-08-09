type IconName =
  | "inbox"
  | "star"
  | "send"
  | "file"
  | "archive"
  | "trash"
  | "search"
  | "menu"
  | "compose"
  | "attachment"
  | "dot";

export function Icon({
  name,
  className = "w-5 h-5",
}: {
  name: IconName;
  className?: string;
}) {
  const common = "stroke-current";
  switch (name) {
    case "inbox":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path
            className={common}
            strokeWidth="1.5"
            d="M3 12V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5h-5a3 3 0 0 0-3 3h-2a3 3 0 0 0-3-3H3z"
          />
          <path
            className={common}
            strokeWidth="1.5"
            d="M3 12v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5"
          />
        </svg>
      );
    case "star":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    case "send":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path
            className={common}
            strokeWidth="1.5"
            d="M4 4l16 8-16 8 4-8-4-8z"
          />
        </svg>
      );
    case "file":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path
            className={common}
            strokeWidth="1.5"
            d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12V9l-4-6z"
          />
        </svg>
      );
    case "archive":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path
            className={common}
            strokeWidth="1.5"
            d="M3 7h18v4H3zM5 11h14v8H5z"
          />
        </svg>
      );
    case "trash":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path
            className={common}
            strokeWidth="1.5"
            d="M6 7h12M9 7V5h6v2m-8 3v9m4-9v9m4-9v9"
          />
        </svg>
      );
    case "search":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="11" cy="11" r="7" className={common} strokeWidth="1.5" />
          <path className={common} strokeWidth="1.5" d="M20 20l-3.5-3.5" />
        </svg>
      );
    case "menu":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path
            className={common}
            strokeWidth="1.5"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      );
    case "compose":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path
            className={common}
            strokeWidth="1.5"
            d="M4 17.25V20h2.75l8.09-8.09-2.75-2.75L4 17.25z"
          />
          <path className={common} strokeWidth="1.5" d="M14.5 6.5l2.75 2.75" />
        </svg>
      );
    case "attachment":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path
            className={common}
            strokeWidth="1.5"
            d="M16.5 6.5l-7.5 7.5a3 3 0 1 0 4.24 4.24l7-7a5 5 0 0 0-7.07-7.07l-9 9"
          />
        </svg>
      );
    case "dot":
      return (
        <svg viewBox="0 0 8 8" className={className}>
          <circle cx="4" cy="4" r="4" fill="currentColor" />
        </svg>
      );
    default:
      return null;
  }
}

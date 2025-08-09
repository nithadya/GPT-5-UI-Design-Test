import type { EmailMessage } from "../types";
import { Avatar } from "./Avatar";
import { Badge } from "./Badge";
import { Icon } from "./Icon";

export function MailList({
  emails,
  activeId,
  onSelect,
  onToggleStar,
  onToggleRead,
}: {
  emails: EmailMessage[];
  activeId?: string;
  onSelect: (id: string) => void;
  onToggleStar: (id: string) => void;
  onToggleRead: (id: string) => void;
}) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between px-3 py-2 border-b border-slate-200">
        <div className="text-sm text-slate-500">
          {emails.length} conversations
        </div>
        <div className="flex items-center gap-2 text-slate-500">
          <button className="px-2 py-1 rounded hover:bg-slate-100">
            Newest
          </button>
          <button className="px-2 py-1 rounded hover:bg-slate-100">
            Oldest
          </button>
        </div>
      </div>
      <div className="overflow-auto">
        {emails.map((m) => (
          <div
            key={m.id}
            className={`group grid grid-cols-[auto,1fr,auto] items-center gap-3 px-3 py-3 border-b border-slate-100 cursor-pointer hover:bg-slate-50 ${
              activeId === m.id ? "bg-indigo-50" : ""
            }`}
            onClick={() => onSelect(m.id)}
          >
            <Avatar name={m.from.name} size={36} />
            <div className="min-w-0">
              <div className="flex items-center gap-2 min-w-0">
                <span
                  className={`truncate font-medium ${
                    m.isRead ? "text-slate-700" : "text-slate-900"
                  }`}
                >
                  {m.from.name}
                </span>
                {!m.isRead && (
                  <Icon name="dot" className="w-2 h-2 text-indigo-500" />
                )}
                {m.labels.slice(0, 2).map((label) => (
                  <Badge key={label}>{label}</Badge>
                ))}
                {m.hasAttachments && (
                  <Icon
                    name="attachment"
                    className="w-4 h-4 text-slate-400 ml-1"
                  />
                )}
              </div>
              <div className="text-sm text-slate-500 truncate">
                <span className="font-medium text-slate-700 mr-1">
                  {m.subject}
                </span>
                — {m.previewText}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-xs text-slate-400 w-20 text-right">
                {new Date(m.receivedAt).toLocaleDateString(undefined, {
                  month: "short",
                  day: "numeric",
                })}
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleStar(m.id);
                }}
                className={`p-2 rounded hover:bg-slate-100 ${
                  m.isStarred ? "text-amber-500" : "text-slate-400"
                }`}
                aria-label="Star"
              >
                <Icon name="star" className="w-4 h-4" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleRead(m.id);
                }}
                className="px-2 py-1 text-xs rounded border border-slate-200 text-slate-600 hover:bg-slate-50"
              >
                {m.isRead ? "Mark unread" : "Mark read"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

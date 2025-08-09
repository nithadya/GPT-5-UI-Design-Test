import type { EmailMessage } from "../types";
import { Avatar } from "./Avatar";
import { Badge } from "./Badge";
import { Icon } from "./Icon";

export function MailDetail({
  email,
  onBack,
  onToggleStar,
  onToggleRead,
}: {
  email: EmailMessage | undefined;
  onBack: () => void;
  onToggleStar: (id: string) => void;
  onToggleRead: (id: string) => void;
}) {
  if (!email) {
    return (
      <div className="h-full grid place-items-center text-slate-500">
        Select a conversation to view details
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200">
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={onBack}
            className="md:hidden p-2 rounded hover:bg-slate-100"
          >
            ←
          </button>
          <h2 className="text-lg font-semibold text-slate-900 truncate">
            {email.subject}
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onToggleStar(email.id)}
            className={`p-2 rounded hover:bg-slate-100 ${
              email.isStarred ? "text-amber-500" : "text-slate-500"
            }`}
          >
            <Icon name="star" />
          </button>
          <button
            onClick={() => onToggleRead(email.id)}
            className="px-2 py-1 text-xs rounded border border-slate-200 text-slate-600 hover:bg-slate-50"
          >
            {email.isRead ? "Mark unread" : "Mark read"}
          </button>
        </div>
      </div>

      <div className="flex items-start gap-3 px-4 py-4 border-b border-slate-100">
        <Avatar name={email.from.name} size={40} />
        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-medium text-slate-900">
              {email.from.name}
            </span>
            <span className="text-slate-500 text-sm">{email.from.email}</span>
            <span className="text-slate-400 text-xs">•</span>
            <span className="text-slate-500 text-sm">
              {new Date(email.receivedAt).toLocaleString()}
            </span>
            {email.labels.map((l) => (
              <Badge key={l}>{l}</Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-auto px-6 py-6 prose prose-slate max-w-none">
        <div dangerouslySetInnerHTML={{ __html: email.bodyHtml }} />
      </div>

      {email.attachments && email.attachments.length > 0 && (
        <div className="border-t border-slate-200 px-4 py-3">
          <div className="text-sm font-medium text-slate-700 mb-2">
            Attachments
          </div>
          <div className="flex flex-wrap gap-2">
            {email.attachments.map((a) => (
              <div
                key={a.id}
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 text-sm"
              >
                <Icon name="file" className="w-4 h-4 text-slate-400" />
                <span>{a.filename}</span>
                <span className="text-slate-400">{a.sizeKB} KB</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

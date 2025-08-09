import { useEffect, useRef, useState } from "react";

export function ComposeModal({
  open,
  onClose,
  onSend,
  onSaveDraft,
  defaultTo = "someone@example.com",
}: {
  open: boolean;
  onClose: () => void;
  onSend: (to: string, subject: string, body: string) => void;
  onSaveDraft: (to: string, subject: string, body: string) => void;
  defaultTo?: string;
}) {
  const [to, setTo] = useState(defaultTo);
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => ref.current?.focus(), 0);
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/20 flex items-end md:items-center justify-center p-4">
      <div className="w-full md:max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="px-4 py-3 border-b border-slate-200 flex items-center justify-between">
          <div className="text-sm font-medium">New message</div>
          <button onClick={onClose} className="p-2 rounded hover:bg-slate-100">
            ✕
          </button>
        </div>
        <div className="p-4 space-y-3">
          <div className="grid grid-cols-[72px,1fr] items-center gap-3">
            <label className="text-sm text-slate-500">To</label>
            <input
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full rounded-lg border border-slate-200 px-3 py-2"
            />
          </div>
          <div className="grid grid-cols-[72px,1fr] items-center gap-3">
            <label className="text-sm text-slate-500">Subject</label>
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full rounded-lg border border-slate-200 px-3 py-2"
            />
          </div>
          <textarea
            ref={ref}
            rows={10}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2"
            placeholder="Write your message..."
          />
        </div>
        <div className="px-4 py-3 border-t border-slate-200 flex items-center justify-between">
          <div className="space-x-2">
            <button
              onClick={() => {
                onSend(to, subject, body);
                onClose();
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500"
            >
              Send
            </button>
            <button
              onClick={() => {
                onSaveDraft(to, subject, body);
                onClose();
              }}
              className="px-4 py-2 rounded-lg border border-slate-200 hover:bg-slate-50"
            >
              Save draft
            </button>
          </div>
          <div className="text-xs text-slate-400">Local only (no backend)</div>
        </div>
      </div>
    </div>
  );
}

import { Avatar } from "./avatar";
import { Badge } from "./badge";
import { IconAttachment, IconMore, IconSend } from "./icons";
import type { Message } from "../data/messages";

type MessageDetailProps = {
  message: Message;
};

export function MessageDetail({ message }: MessageDetailProps) {
  return (
    <div className="flex min-w-0 flex-1 flex-col">
      <div className="flex items-center gap-3 border-b border-neutral-200/70 px-8 py-5">
        <Avatar src={message.avatar} className="size-10" />
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <div className="truncate text-[15px] font-semibold">
              {message.sender}
            </div>
            {message.tags?.map((t) => (
              <Badge
                // eslint-disable-next-line react/jsx-key
                color={
                  t === "App" ? "green" : t === "Social" ? "slate" : "violet"
                }
              >
                {t}
              </Badge>
            ))}
          </div>
          <div className="text-sm text-neutral-500">
            {message.date} • {message.time}
          </div>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <button className="rounded-full p-2 text-neutral-500 hover:bg-neutral-100">
            <IconMore className="size-5" />
          </button>
        </div>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto px-10 py-8">
        <h1 className="text-[28px] font-semibold tracking-tight">
          {message.subject} <span className="align-middle">🚀</span>
        </h1>
        <div className="mt-6 space-y-4 text-[15px] leading-7 text-neutral-700">
          {(message.body ?? "").split("\n\n").map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {message.attachments && message.attachments.length > 0 && (
          <div className="mt-6">
            <div className="mb-3 flex items-center justify-between text-sm text-neutral-500">
              <span>Attachments ({message.attachments.length} Files)</span>
              <button className="rounded-md px-2 py-1 text-neutral-600 hover:bg-neutral-100">
                Download All
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {message.attachments.map((a) => (
                <div
                  key={a.id}
                  className="overflow-hidden rounded-xl bg-neutral-100 ring-1 ring-neutral-200"
                >
                  <img
                    src={a.thumbnail ?? "/emailclient.webp"}
                    className="h-28 w-full object-cover"
                  />
                  <div className="flex items-center justify-between px-3 py-2 text-sm">
                    <div className="truncate">
                      <div className="truncate font-medium">{a.name}</div>
                      <div className="text-xs text-neutral-500">{a.size}</div>
                    </div>
                    <IconAttachment className="size-4 text-neutral-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-neutral-200/70 px-8 py-5">
        <div className="rounded-2xl border border-neutral-200/70 bg-white p-3 shadow-sm">
          <div className="flex items-start gap-3">
            <Avatar src={message.avatar} className="size-8" />
            <div className="flex-1">
              <div className="flex items-center gap-2 text-sm text-neutral-500">
                <span>Reply</span>
                <span className="text-neutral-300">|</span>
                <span>whitecompanyalabe.com</span>
              </div>
              <textarea
                placeholder={`Hi, ${message.sender.split(" ")[0]} 👋`}
                className="mt-2 h-24 w-full resize-none rounded-lg bg-neutral-50 p-3 text-sm outline-none ring-1 ring-transparent focus:ring-violet-300"
              />
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-2 text-neutral-500">
                  <button className="rounded-md px-2 py-1 text-sm hover:bg-neutral-100">
                    B
                  </button>
                  <button className="rounded-md px-2 py-1 text-sm hover:bg-neutral-100">
                    I
                  </button>
                  <button className="rounded-md px-2 py-1 text-sm hover:bg-neutral-100">
                    U
                  </button>
                </div>
                <button className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-violet-500">
                  <IconSend className="size-4" />
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

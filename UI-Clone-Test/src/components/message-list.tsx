import { Avatar } from "./avatar";
import { Badge } from "./badge";
import { IconClock, IconChevronRight } from "./icons";
import type { Message } from "../data/messages";

type MessageListProps = {
  items: Message[];
  selectedId?: string;
};

export function MessageList({ items, selectedId }: MessageListProps) {
  return (
    <div className="flex h-full w-[37rem] flex-col border-r border-neutral-200/70">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="text-[22px] font-semibold tracking-tight">
          Inboxes <span className="text-neutral-400">(16)</span>
        </div>
        <div className="text-sm text-neutral-500">All Messages</div>
      </div>
      <div className="flex-1 overflow-y-auto px-4 pb-4">
        <ul className="space-y-3">
          {items.map((m) => (
            <li key={m.id}>
              <button
                className={`group flex w-full items-start gap-3 rounded-2xl bg-white/90 p-4 text-left shadow-sm ring-1 ring-neutral-200/70 transition hover:shadow-md ${
                  selectedId === m.id ? "ring-violet-300" : ""
                }`}
              >
                <Avatar src={m.avatar} className="size-10" />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <div className="truncate text-[15px] font-semibold">
                      {m.sender}
                    </div>
                    {m.tags?.slice(0, 2).map((t) => (
                      <Badge
                        // eslint-disable-next-line react/jsx-key
                        color={
                          t === "Work"
                            ? "violet"
                            : t === "Social"
                            ? "slate"
                            : "green"
                        }
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-0.5 truncate text-[13px] text-neutral-500">
                    {m.subject}
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-[12px] text-neutral-400">
                    <IconClock className="size-3.5" />
                    <span>{m.date}</span>
                    <span className="text-neutral-300">•</span>
                    <span>{m.time}</span>
                  </div>
                </div>
                <IconChevronRight className="mt-1 size-4 text-neutral-300 group-hover:text-neutral-400" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

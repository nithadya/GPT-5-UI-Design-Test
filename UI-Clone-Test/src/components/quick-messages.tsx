import { Avatar } from "./avatar";
import { IconChevronLeft, IconChevronRight, IconSparkle } from "./icons";

const users = [
  {
    id: "1",
    name: "Ester A.",
    avatar:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=128&h=128&fit=crop&auto=format",
  },
  {
    id: "2",
    name: "Liza E.",
    avatar:
      "https://images.unsplash.com/photo-1558898260-9563e56c5b2b?q=80&w=128&h=128&fit=crop&auto=format",
  },
  {
    id: "3",
    name: "Gay R.",
    avatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=128&h=128&fit=crop&auto=format",
  },
  {
    id: "4",
    name: "Robert R.",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=128&h=128&fit=crop&auto=format",
  },
  {
    id: "5",
    name: "Wade W.",
    avatar:
      "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?q=80&w=128&h=128&fit=crop&auto=format",
  },
];

export function QuickMessages() {
  return (
    <div className="flex items-center gap-3 px-6 py-3">
      <div className="inline-flex items-center gap-1 rounded-full bg-neutral-900 px-3 py-1 text-xs font-medium text-white">
        <IconSparkle className="size-3" />
        Quick Messages
        <span className="ml-1 rounded-full bg-white/15 px-1.5 text-[10px]">
          Beta
        </span>
      </div>
      <button className="rounded-full p-1 text-neutral-400 hover:bg-neutral-100">
        <IconChevronLeft className="size-4" />
      </button>
      <div className="flex items-center gap-3">
        {users.map((u) => (
          <div
            key={u.id}
            className="flex items-center gap-2 rounded-full bg-white px-2 py-1 shadow-sm ring-1 ring-neutral-200"
          >
            <Avatar src={u.avatar} className="size-6" />
            <span className="text-xs font-medium text-neutral-700">
              {u.name}
            </span>
          </div>
        ))}
      </div>
      <button className="rounded-full p-1 text-neutral-400 hover:bg-neutral-100">
        <IconChevronRight className="size-4" />
      </button>
    </div>
  );
}

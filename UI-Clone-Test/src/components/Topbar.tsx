import { Avatar } from "./avatar";
import { IconSearch, IconSparkle, IconStar } from "./icons";

export function TopBar() {
  const user = {
    avatar:
      "https://images.unsplash.com/photo-1531123414780-f7429f4d7e11?q=80&w=256&h=256&fit=crop&auto=format",
  };

  return (
    <header className="sticky top-0 z-10 flex h-[68px] items-center gap-3 border-b border-neutral-200/60 bg-white/70 px-8 backdrop-blur">
      <div className="text-[22px] font-semibold tracking-tight">Inbox</div>

      <div className="ml-4 hidden items-center gap-2 rounded-full bg-neutral-100 px-4 py-2 text-neutral-500 shadow-sm ring-1 ring-neutral-200 sm:flex">
        <IconSearch className="size-4" />
        <input
          placeholder="Search..."
          className="w-64 bg-transparent text-sm outline-none placeholder:text-neutral-400"
        />
      </div>

      <div className="ml-auto flex items-center gap-2">
        <button className="inline-flex items-center gap-1 rounded-full bg-neutral-900 px-3.5 py-1.5 text-sm text-white shadow">
          <IconSparkle className="size-4" />
          Quick Messages
          <span className="ml-1 rounded-full bg-violet-500/20 px-1.5 text-[11px] text-violet-700">Beta</span>
        </button>
        <button className="rounded-full p-2 text-neutral-500 hover:bg-neutral-100">
          <IconStar className="size-4" />
        </button>
        <Avatar src={user.avatar} className="size-8" />
      </div>
    </header>
  );
}



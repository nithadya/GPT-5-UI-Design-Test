import { Icon } from "./Icon";
import { Avatar } from "./Avatar";

export function Topbar({ onSearch, onCompose }: { onSearch: (q: string) => void; onCompose: () => void }) {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4">
        <button className="md:hidden p-2 rounded-lg hover:bg-slate-100 text-slate-600">
          <Icon name="menu" />
        </button>
        <div className="relative flex-1 max-w-2xl">
          <Icon
            name="search"
            className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            placeholder="Search mail, people, labels..."
            onChange={(e) => onSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <button onClick={onCompose} className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500">
          <Icon name="compose" className="w-4 h-4" />
          <span className="text-sm">Compose</span>
        </button>
        <Avatar name="You" />
      </div>
    </header>
  );
}

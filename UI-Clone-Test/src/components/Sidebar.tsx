import { Avatar } from "./avatar";
import {
  IconFolder,
  IconInbox,
  IconLogout,
  IconSettings,
  IconShield,
} from "./icons";

type SidebarItem = {
  id: string;
  label: string;
  count?: number | string;
  active?: boolean;
  icon?: React.ReactNode;
};

const navItems: SidebarItem[] = [
  { id: "inbox", label: "Inbox", count: 16, active: true, icon: <IconInbox className="size-4" /> },
  { id: "outgoing", label: "Outgoing", count: 9 },
  { id: "drafts", label: "Drafts", count: 21 },
  { id: "reminders", label: "Reminders" },
  { id: "favorites", label: "Favorites" },
  { id: "settings", label: "Settings", icon: <IconSettings className="size-4" /> },
];

export function Sidebar() {
  const userAvatar =
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&h=256&fit=crop&auto=format";

  return (
    <aside className="flex h-full w-[280px] flex-col rounded-l-3xl bg-neutral-950/95 text-neutral-100">
      <div className="flex items-center gap-3 px-6 pt-6 pb-4">
        <img src="/vite.svg" className="size-6" alt="logo" />
        <div className="text-sm leading-tight">
          <div className="font-semibold">Google Account</div>
          <div className="text-neutral-400">offdesignarea@gmail.com</div>
        </div>
        <div className="ml-auto rounded-full bg-neutral-800 px-2 py-1 text-[10px] text-neutral-300">Folder</div>
      </div>

      <div className="px-4">
        <div className="rounded-xl bg-neutral-900 p-2">
          <div className="px-2 text-xs text-neutral-400">Inbox</div>
          <nav className="mt-2 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                className={`group flex items-center gap-2 rounded-lg px-2.5 py-2 text-sm hover:bg-neutral-800 ${
                  item.active ? "bg-neutral-800" : ""
                }`}
                href="#"
              >
                <span className="text-neutral-400">{item.icon ?? <IconFolder className="size-4" />}</span>
                <span className="flex-1">{item.label}</span>
                {item.count !== undefined && (
                  <span className="rounded-md bg-neutral-800 px-2 py-0.5 text-xs text-neutral-300">
                    {item.count}
                  </span>
                )}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="mt-4 px-4">
        <div className="rounded-xl bg-neutral-900 p-3">
          <div className="text-xs text-neutral-400">My Services</div>
          <div className="mt-2 space-y-2">
            <div className="flex items-center gap-2 rounded-lg bg-neutral-800/60 p-2 text-sm">
              <img
                src="https://cdn.worldvectorlogo.com/logos/dribbble-icon-1.svg"
                alt="Dribbble"
                className="size-4"
              />
              <span>Dribbble</span>
              <span className="ml-auto rounded-md bg-violet-500/20 px-1.5 py-0.5 text-[10px] text-violet-300">
                Verified
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-neutral-800/60 p-2 text-sm">
              <img
                src="https://www.svgrepo.com/show/475656/google-drive-color.svg"
                className="size-4"
                alt="Drive"
              />
              <span>Google Disc</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 px-4">
        <div className="rounded-xl bg-neutral-900 p-3">
          <div className="text-xs text-neutral-400">My Notes</div>
          <div className="mt-3 rounded-lg bg-neutral-800/60 p-3 text-sm">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Send Documents</div>
                <div className="text-neutral-400">02.09.2023</div>
              </div>
              <button className="rounded-md bg-neutral-700 px-2 py-1 text-xs">Open</button>
            </div>
            <p className="mt-3 text-neutral-400">
              Send the documents for the sale to the manager in the next hour.
            </p>
            <button className="mt-3 w-full rounded-lg bg-neutral-700 py-2 text-sm">Report to Supervisor</button>
          </div>
        </div>
      </div>

      <div className="mt-auto px-4 pb-5">
        <div className="rounded-xl bg-neutral-900 p-3">
          <div className="flex items-center gap-3">
            <div className="relative">
              <IconShield className="size-8 text-emerald-400" />
            </div>
            <div className="flex-1 text-sm">
              <div>Your Cloud</div>
              <div className="text-neutral-400">You have 13 gigabytes left</div>
            </div>
            <div className="text-lg font-semibold text-emerald-400">64%</div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <button className="rounded-lg bg-neutral-800 px-3 py-2 text-sm">Sign Out</button>
            <Avatar src={userAvatar} className="size-8" />
          </div>
        </div>
        <div className="mt-2 flex items-center justify-between px-1 text-[10px] text-neutral-500">
          <span>Version: 1.20.12</span>
          <button className="inline-flex items-center gap-1 text-neutral-400 hover:text-neutral-200">
            <IconLogout className="size-3" />
            Log out
          </button>
        </div>
      </div>
    </aside>
  );
}



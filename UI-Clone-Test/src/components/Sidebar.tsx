import React from "react";
import { Icon } from "./Icon";
import { Badge } from "./Badge";

export type SidebarItem = {
  id: string;
  name: string;
  icon: React.ReactNode;
  count?: number;
  active?: boolean;
  onClick?: () => void;
};

export function Sidebar({
  items,
  labels,
}: {
  items: SidebarItem[];
  labels: { id: string; name: string; color: string; count?: number }[];
}) {
  return (
    <aside className="hidden md:flex md:w-64 lg:w-72 xl:w-80 shrink-0 border-r border-slate-200 bg-white">
      <div className="w-full h-full p-4 space-y-6">
        <button className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 text-white py-3 hover:bg-indigo-500">
          <Icon name="compose" className="w-4 h-4" />
          <span className="font-medium">Compose</span>
        </button>

        <nav className="space-y-1">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={item.onClick}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50 text-sm ${
                item.active ? "bg-slate-100 text-slate-900" : "text-slate-700"
              }`}
            >
              <span className="text-slate-500">{item.icon}</span>
              <span className="flex-1 text-left">{item.name}</span>
              {item.count ? <Badge>{item.count}</Badge> : null}
            </button>
          ))}
        </nav>

        <div className="pt-2">
          <h3 className="px-3 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            Labels
          </h3>
          <div className="space-y-1">
            {labels.map((l) => (
              <div
                key={l.id}
                className="flex items-center gap-2 px-3 py-1.5 text-sm text-slate-700 rounded-lg hover:bg-slate-50"
              >
                <span
                  className={`w-2 h-2 rounded-full inline-block ${
                    l.color.replace("text", "bg").split(" ")[0]
                  }`}
                ></span>
                <span className="flex-1">{l.name}</span>
                {typeof l.count === "number" && l.count > 0 ? (
                  <Badge>{l.count}</Badge>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}

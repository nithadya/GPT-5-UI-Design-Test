import { useMemo, useState } from "react";
import "./index.css";
import { Topbar } from "./components/Topbar";
import { Sidebar } from "./components/Sidebar";
import { MailList } from "./components/MailList";
import { MailDetail } from "./components/MailDetail";
import { ComposeModal } from "./components/ComposeModal";
import {
  allByMailbox,
  inbox as inboxSeed,
  drafts as draftsSeed,
  sent as sentSeed,
  labels as labelDefs,
} from "./data/mockEmails";
import type { EmailMessage, MailboxType } from "./types";
import { Icon } from "./components/Icon";

export default function App() {
  const [mailbox, setMailbox] = useState<MailboxType>("inbox");
  const [search, setSearch] = useState("");
  const [activeId, setActiveId] = useState<string | undefined>();
  const [composeOpen, setComposeOpen] = useState(false);

  // Local state for messages by mailbox (mutable for toggles and compose)
  const [messages, setMessages] = useState<Record<MailboxType, EmailMessage[]>>(
    {
      ...allByMailbox,
      inbox: inboxSeed,
      drafts: draftsSeed,
      sent: sentSeed,
    }
  );

  const activeList = messages[mailbox];

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return activeList;
    return activeList.filter((m) =>
      [m.subject, m.previewText, m.from.name, m.from.email, ...m.labels]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [activeList, search]);

  const activeMail = useMemo(() => {
    if (!activeId) return undefined;
    return activeList.find((m) => m.id === activeId);
  }, [activeId, activeList]);

  function updateMessage(
    id: string,
    updater: (m: EmailMessage) => EmailMessage
  ) {
    setMessages((prev) => ({
      ...prev,
      [mailbox]: prev[mailbox].map((m) => (m.id === id ? updater(m) : m)),
    }));
  }

  function toggleStar(id: string) {
    updateMessage(id, (m) => ({ ...m, isStarred: !m.isStarred }));
  }
  function toggleRead(id: string) {
    updateMessage(id, (m) => ({ ...m, isRead: !m.isRead }));
  }

  function handleSend(to: string, subject: string, body: string) {
    const newEmail: EmailMessage = {
      id: `s-${Date.now()}`,
      subject: subject || "(no subject)",
      from: { name: "You", email: "you@client.app" },
      to: [{ name: to, email: to }],
      bodyHtml: `<p>${body || ""}</p>`,
      previewText: body.slice(0, 80),
      receivedAt: new Date().toISOString(),
      isRead: true,
      isStarred: false,
      hasAttachments: false,
      labels: ["Personal"],
      mailbox: "sent",
    };
    setMessages((prev) => ({ ...prev, sent: [newEmail, ...prev.sent] }));
    setMailbox("sent");
    setActiveId(newEmail.id);
  }

  function handleSaveDraft(to: string, subject: string, body: string) {
    const newDraft: EmailMessage = {
      id: `d-${Date.now()}`,
      subject: subject || "(no subject)",
      from: { name: "You", email: "you@client.app" },
      to: [{ name: to, email: to }],
      bodyHtml: `<p>${body || ""}</p>`,
      previewText: body.slice(0, 80),
      receivedAt: new Date().toISOString(),
      isRead: true,
      isStarred: false,
      hasAttachments: false,
      labels: ["Personal"],
      mailbox: "drafts",
    };
    setMessages((prev) => ({ ...prev, drafts: [newDraft, ...prev.drafts] }));
    setMailbox("drafts");
    setActiveId(newDraft.id);
  }

  const sidebarItems = [
    {
      id: "inbox",
      name: "Inbox",
      icon: <Icon name="inbox" />,
      count: messages.inbox.filter((m) => !m.isRead).length,
    },
    {
      id: "starred",
      name: "Starred",
      icon: <Icon name="star" />,
      count: messages.inbox.filter((m) => m.isStarred).length,
    },
    {
      id: "sent",
      name: "Sent",
      icon: <Icon name="send" />,
      count: messages.sent.length,
    },
    {
      id: "drafts",
      name: "Drafts",
      icon: <Icon name="file" />,
      count: messages.drafts.length,
    },
    {
      id: "archive",
      name: "Archive",
      icon: <Icon name="archive" />,
      count: messages.archive.length,
    },
    {
      id: "trash",
      name: "Trash",
      icon: <Icon name="trash" />,
      count: messages.trash.length,
    },
  ].map((i) => ({
    ...i,
    active: mailbox === (i.id as MailboxType),
    onClick: () => {
      setMailbox(i.id as MailboxType);
      setActiveId(undefined);
    },
  }));

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Topbar onSearch={setSearch} onCompose={() => setComposeOpen(true)} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-[auto,1fr,1fr] gap-4 h-[calc(100vh-7rem)]">
          <Sidebar
            items={sidebarItems}
            labels={labelDefs.map((l) => ({
              id: l.id,
              name: l.name,
              color: l.color,
            }))}
          />

          <section className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <MailList
              emails={filtered}
              activeId={activeId}
              onSelect={setActiveId}
              onToggleStar={toggleStar}
              onToggleRead={toggleRead}
            />
          </section>

          <section className="bg-white border border-slate-200 rounded-2xl overflow-hidden hidden md:block">
            <MailDetail
              email={activeMail}
              onBack={() => setActiveId(undefined)}
              onToggleStar={toggleStar}
              onToggleRead={toggleRead}
            />
          </section>
        </div>
      </div>

      <ComposeModal
        open={composeOpen}
        onClose={() => setComposeOpen(false)}
        onSend={handleSend}
        onSaveDraft={handleSaveDraft}
      />

      <button
        onClick={() => setComposeOpen(true)}
        className="fixed bottom-6 right-6 md:hidden inline-flex items-center gap-2 px-4 py-3 rounded-full shadow-lg bg-indigo-600 text-white"
      >
        <Icon name="compose" className="w-5 h-5" />
        Compose
      </button>
    </div>
  );
}

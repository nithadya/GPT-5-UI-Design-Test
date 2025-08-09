import type { EmailMessage, Label, MailboxType, Person } from "../types";

function makePerson(name: string, email: string, avatarUrl?: string): Person {
  return { name, email, avatarUrl };
}

export const labels: Label[] = [
  { id: "l1", name: "Work", color: "bg-blue-100 text-blue-700" },
  { id: "l2", name: "Personal", color: "bg-rose-100 text-rose-700" },
  { id: "l3", name: "Important", color: "bg-amber-100 text-amber-700" },
  { id: "l4", name: "Travel", color: "bg-emerald-100 text-emerald-700" },
];

function randomFrom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

const people = [
  makePerson("Elizabeth Claire", "elizabeth@example.com"),
  makePerson("Christopher O.", "chris@startup.dev"),
  makePerson("Felicity Jane", "felicity@design.studio"),
  makePerson("Hannah G.", "hannah@remote.co"),
  makePerson("Hemings d.", "hemi@music.fm"),
];

function makeEmail(id: number, mailbox: MailboxType): EmailMessage {
  const from = randomFrom(people);
  const to = [makePerson("You", "you@client.app")];
  const subjectOptions = [
    "Project kickoff and timelines",
    "Design review notes and next steps",
    "June statement and invoice",
    "Travel itinerary update",
    "Invitation: Product Council Meeting",
    "Quick question about the contract",
    "Status update: Sprint goals",
    "Bug triage summary and fixes",
  ];
  const subject = randomFrom(subjectOptions);
  const preview =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Cras ornare...";
  const now = Date.now() - id * 36e5;
  const labelIds = labels.filter(() => Math.random() > 0.6).map((l) => l.name);
  const attachments =
    Math.random() > 0.7
      ? [
          {
            id: "a" + id,
            filename: "spec.pdf",
            sizeKB: 320,
            kind: "pdf" as const,
          },
        ]
      : undefined;

  return {
    id: String(id),
    subject,
    from,
    to,
    bodyHtml: `<p><strong>${subject}</strong></p><p>${preview.repeat(4)}</p>`,
    previewText: preview,
    receivedAt: new Date(now).toISOString(),
    isRead: Math.random() > 0.4,
    isStarred: Math.random() > 0.8,
    hasAttachments: Boolean(attachments),
    attachments,
    labels: labelIds,
    mailbox,
  };
}

export const inbox: EmailMessage[] = Array.from({ length: 24 }, (_, i) =>
  makeEmail(i + 1, "inbox")
);
export const starred: EmailMessage[] = inbox.filter((e) => e.isStarred);
export const sent: EmailMessage[] = Array.from({ length: 6 }, (_, i) =>
  makeEmail(200 + i, "sent")
);
export const drafts: EmailMessage[] = Array.from({ length: 3 }, (_, i) => ({
  ...makeEmail(300 + i, "drafts"),
  isRead: true,
}));

export const allByMailbox: Record<MailboxType, EmailMessage[]> = {
  inbox,
  starred,
  sent,
  drafts,
  archive: [],
  spam: [],
  trash: [],
};

export type MailboxType =
  | "inbox"
  | "starred"
  | "sent"
  | "drafts"
  | "archive"
  | "spam"
  | "trash";

export type Attachment = {
  id: string;
  filename: string;
  sizeKB: number;
  kind: "image" | "pdf" | "doc" | "sheet" | "other";
};

export type Person = {
  name: string;
  email: string;
  avatarUrl?: string;
};

export type EmailMessage = {
  id: string;
  subject: string;
  from: Person;
  to: Person[];
  cc?: Person[];
  bodyHtml: string;
  previewText: string;
  receivedAt: string; // ISO date string
  isRead: boolean;
  isStarred: boolean;
  hasAttachments: boolean;
  attachments?: Attachment[];
  labels: string[];
  mailbox: MailboxType;
};

export type Label = {
  id: string;
  name: string;
  color: string; // tailwind color class e.g. 'bg-emerald-100 text-emerald-700'
};

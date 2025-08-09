export type Attachment = {
  id: string;
  name: string;
  type: "image" | "pdf" | "file";
  size: string;
  url: string;
  thumbnail?: string;
};

export type Message = {
  id: string;
  sender: string;
  avatar: string;
  subject: string;
  preview: string;
  date: string; // e.g. "Today, Monday" or time
  time: string; // e.g. "13:45 PM"
  tags?: string[];
  isStarred?: boolean;
  isRead?: boolean;
  category?: "Work" | "Social" | "App" | "Team" | "Security" | "Payment";
  attachments?: Attachment[];
  body?: string;
};

const avatars = {
  brooklyn:
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&h=256&fit=crop&auto=format",
  team: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=256&h=256&fit=crop&auto=format",
  spotify:
    "https://images.unsplash.com/photo-1614680376742-5f7b0bcd2d2c?q=80&w=256&h=256&fit=crop&auto=format",
  discord:
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=256&h=256&fit=crop&auto=format",
};

export const messages: Message[] = [
  {
    id: "1",
    sender: "Team Meeting - Alex S, Liza E",
    avatar: avatars.team,
    subject: "Project: Discussion of the new project design",
    preview: "Colleagues, it is important for all those who are marked...",
    date: "Today, Monday",
    time: "13:45 PM",
    tags: ["Work"],
    category: "Team",
    isRead: false,
  },
  {
    id: "2",
    sender: "Brooklyn Simmons",
    avatar: avatars.brooklyn,
    subject: "Mobile booking design edits",
    preview: "Hello, Vitaliy! We really like the design of the applicatio...",
    date: "Today, Monday",
    time: "13:45 PM",
    tags: ["App", "Work"],
    category: "App",
    isRead: true,
    isStarred: true,
    attachments: [
      {
        id: "a1",
        name: "Payment Data",
        type: "file",
        size: "2.3 MB",
        url: "#",
        thumbnail:
          "https://images.unsplash.com/photo-1551281044-8c87d8d6f3df?q=80&w=600&auto=format&fit=crop",
      },
      {
        id: "a2",
        name: "Booking App",
        type: "image",
        size: "3.7 MB",
        url: "#",
        thumbnail:
          "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=600&auto=format&fit=crop",
      },
      {
        id: "a3",
        name: "UX-Flow",
        type: "image",
        size: "920 kB",
        url: "#",
        thumbnail:
          "https://images.unsplash.com/photo-1527430253228-e93688616381?q=80&w=600&auto=format&fit=crop",
      },
    ],
    body: "We really like the design of the application you sent us. To understand the completeness of the project, I will send you the old design of the app. There you can see the current state of the project.\n\nBrooklyn Simmons, CPO\nSite: whitecompany.com",
  },
  {
    id: "3",
    sender: "Spotify",
    avatar: avatars.spotify,
    subject: "Unidentified device",
    preview: "Dear offdesignarea, someone tried to log into your ac...",
    date: "Yesterday, Sunday",
    time: "09:32 AM",
    tags: ["Social"],
    category: "Security",
  },
  {
    id: "4",
    sender: "Team - Michael B, Sergey A",
    avatar: avatars.team,
    subject: "Working build",
    preview: "Hi, Serge and I have prepared a working build. You can...",
    date: "Fri, Sep 5",
    time: "06:52 AM",
    tags: ["Team"],
  },
  {
    id: "5",
    sender: "Discord",
    avatar: avatars.discord,
    subject: "Name change",
    preview: "You changed your name to a new name. If it wasn't you...",
    date: "Thu, Sep 4",
    time: "—",
    tags: ["Social"],
  },
];

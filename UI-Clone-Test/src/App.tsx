import "./App.css";
import { Sidebar } from "./components/sidebar";
import { TopBar } from "./components/topbar";
import { QuickMessages } from "./components/quick-messages";
import { MessageList } from "./components/message-list";
import { MessageDetail } from "./components/message-detail";
import { messages } from "./data/messages";

function App() {
  const selected = messages[1];
  return (
    <div className="flex min-h-screen w-full items-stretch bg-neutral-100/60 p-4">
      <div className="mx-auto flex w-full max-w-[120rem] rounded-3xl bg-white shadow-2xl ring-1 ring-black/5">
        <Sidebar />
        <div className="flex min-w-0 flex-1 flex-col rounded-r-3xl bg-neutral-50">
          <TopBar />
          <QuickMessages />
          <div className="flex min-h-0 flex-1">
            <MessageList items={messages} selectedId={selected.id} />
            <MessageDetail message={selected} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

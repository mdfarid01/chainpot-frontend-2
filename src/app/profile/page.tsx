import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import { ProfileClient } from "./ProfileClient";

export default function ProfilePage() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr] bg-gradient-to-br from-background via-background to-muted/20">
      <Topbar />
      <div className="grid grid-cols-[240px_1fr]">
        <Sidebar />
        <main className="relative px-6 py-6 space-y-6 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-5">
            <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-xl" />
            <div className="absolute bottom-40 left-40 w-48 h-48 bg-accent/10 rounded-full blur-2xl" />
          </div>
          <h2 className="text-2xl font-semibold relative z-10">Profile</h2>
          <div className="relative z-10">
            <ProfileClient />
          </div>
        </main>
      </div>
    </div>
  );
}
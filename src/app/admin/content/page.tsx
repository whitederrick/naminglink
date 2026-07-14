import { AdminContentManager } from "@/components/AdminContentManager";

export default function AdminContentPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto w-full max-w-6xl px-5 py-6 sm:px-8 lg:px-10">
        <AdminContentManager />
      </section>
    </main>
  );
}

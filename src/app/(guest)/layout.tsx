export default function GuestLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="flex h-screen items-center justify-center bg-slate-300">
      <div className="flex min-w-80 flex-col gap-4 rounded-lg bg-white p-5 text-center">
        {children}
      </div>
    </main>
  );
}

import { HydrateClient } from "@/trpc/server";
import { Header } from "../_components/header";
import { getServerAuthSession } from "@/server/auth";

export default async function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await getServerAuthSession();

  return (
    <HydrateClient>
      <main className="">
        <Header isAuth={!!session} />
        {children}
      </main>
    </HydrateClient>
  );
}

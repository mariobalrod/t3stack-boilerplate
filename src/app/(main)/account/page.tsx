import { LogoutButton } from "@/app/_components/authButtons";
import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation";

export default async function Account() {
  const session = await getServerAuthSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex flex-col items-start gap-4">
      <h2>Account</h2>
      <LogoutButton />
    </div>
  );
}

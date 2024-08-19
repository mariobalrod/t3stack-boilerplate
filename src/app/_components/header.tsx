import Link from "next/link";

export function Header({ isAuth }: { isAuth: boolean }) {
  return (
    <header className="bg-white/10 p-4">
      <nav className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">My App</h1>

        <ul className="flex gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="posts">Posts</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>

        <ul className="flex gap-4">
          {isAuth && (
            <li>
              <Link href="/account">Account</Link>
            </li>
          )}
          {!isAuth && (
            <li>
              <Link href="/login">Login</Link>
            </li>
          )}
          {!isAuth && (
            <li>
              <Link href="/register">Register</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

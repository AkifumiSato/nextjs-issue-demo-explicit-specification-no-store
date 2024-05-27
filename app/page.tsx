import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>Next.js@RC issue demo explicit specification `no-store`</h1>
      <ul>
        <li>
          <Link href="/default">default</Link>
        </li>
        <li>
          <Link href="/no-store">cache: no-store</Link>
        </li>
        <li>
          <Link href="/force-dynamic">dynamic: force-dynamic</Link>
        </li>
      </ul>
    </>
  );
}

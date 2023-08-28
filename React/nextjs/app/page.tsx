import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Next.js",
};

export default function Page() {
  return (
    <div>
      <h1>Next.js</h1>
      <Link href="/dashboard">Dashboard</Link>
    </div>
  );
}

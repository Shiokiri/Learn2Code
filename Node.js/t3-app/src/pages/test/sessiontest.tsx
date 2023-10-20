import { useSession } from "next-auth/react";

export default function Component() {
  const { data: session, status } = useSession();

  console.log({ session, status });

  if (status === "authenticated") {
    return <p>Signed in as {session.user.email}</p>;
  }
}

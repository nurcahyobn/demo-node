import Image from "next/image";
import {prisma} from "@/lib/prisma";

export default async function Home() {
  const posts = await prisma.jurusan.findMany({});

  return (
    <>
    <pre className="text-xs">{JSON.stringify(posts, null, 3)}</pre>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <Link href="/hakkimizda">Hakkımızda</Link>
        <br />
        <Link href="/docs/post1"> Documentation </Link>
      </div>
    </>
  );
}

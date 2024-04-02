import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <Link href="/hakkimizda">Hakkımızda</Link>
        <br />
        <Link href="/docs/post1"> Documentation </Link>
        <br />
        <Link 
        target="_blank"
        className="test"
        href={{
          pathname:"/hakkimizda",
          query:{
            name:"Nextjs",
            surname:"javascript",
          }
        }}
        > Hakkımızda with object </Link>
      </div>
    </>
  );
}

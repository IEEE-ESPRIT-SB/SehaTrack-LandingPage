import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.png";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-4 ml-4" aria-label="Cruip">
        <Image src={logo} alt="Cruip Logo"  height={50}/>
    </Link>
  );
}

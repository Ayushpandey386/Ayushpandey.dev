import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link
      href="/"
      className="relative flex items-center"
    >
      <Image
        src="/signature.png"
        alt="Ayush Pandey"
        width={120}
        height={48}
        className="h-8 w-auto mix-blend-multiply dark:hidden"
        priority
      />
      <Image
        src="/signature.png"
        alt="Ayush Pandey"
        width={120}
        height={48}
        className="hidden h-8 w-auto invert mix-blend-screen dark:block"
        priority
      />
    </Link>
  );
}

import Image from "next/image";
export default function Navbar() {
  return (
    <div className="pt-4 flex items-center justify-center">
      <Image
        src="/assets/icons/logo.svg"
        alt="Next.js logo"
        width={220}
        height={74}
        priority
        className="m-auto"
      />
    </div>
  );
}

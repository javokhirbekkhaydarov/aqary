import Image from "next/image";
export default function Hero() {
  return (
    <div
      className="flex items-center justify-center relative"
      style={{ width: "100%", maxWidth: "1440px", height: "auto" }}
    >
      <div className="hero-text absolute z-10 left-8 top-8 font-geologica text-white">
        A simple way to <br /> Real Estate!
      </div>
      <Image
        src="/assets/images/hero.png"
        alt="Next.js logo"
        width={0}
        height={0}
        sizes="100vw"
        priority
        className="relative z-0"
        style={{ width: "100%", maxWidth: "1440px", height: "auto" }}
        draggable={false}
      />
    </div>
  );
}

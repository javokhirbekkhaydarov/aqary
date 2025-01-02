import Image from "next/image";
import Filter from "./filter/FilterUi";
import Map from "./map/Map";
export default function Hero() {
  return (
    <div
      className="hero flex items-center justify-center relative sm:flex-col"
      style={{ width: "100%", maxWidth: "1440px", height: "auto" }}
    >
      <div className="hero-text sm:text-2xl absolute z-10 left-8 top-8 font-geologica text-white">
        A simple way to <br /> Real Estate!
      </div>
      <Image
        src="/assets/images/hero.png"
        alt="Next.js logo"
        width={0}
        height={0}
        sizes="100vw"
        priority
        className="hero-bg z-0"
        style={{ width: "100%", maxWidth: "1440px", height: "auto" }}
        draggable={false}
      />
      <div className="bottom_side   absolute bottom-4 left-4 flex items-start justify-start gap-4">
        <Map />
        <Filter />
      </div>
    </div>
  );
}

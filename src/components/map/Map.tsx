import Image from "next/image";

export default function Map() {
  return (
    <a
      href="https://www.google.com/maps?ll=24.499331,54.403032&z=16&t=m&hl=en&gl=AE&mapclient=embed&cid=13349558746722241523"
      className="map rounded-2xl relative"
      target="_blank"
    >
      <Image
        src="/assets/images/map.png"
        alt="Map"
        width={220}
        height={74}
        priority
        className=""
        draggable={false}
      />
      <button className="bg-primary font-geologica rounded-lg py-[10px] px-[16px]  text-white text-[14px] absolute  bottom-4 left-4 right-4">
        Go To Map
      </button>
    </a>
  );
}

import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OutPut from "@/components/output/OutPut";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-4 ">
      <Navbar />
      <main>
        <Hero />
      </main>
      <OutPut />
    </div>
  );
}

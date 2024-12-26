import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="flex flex-col">
      <main >
      
     <Image
          className={styles.logo}
          src="/assets/images/hero.png"
          alt="Next.js logo"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', maxWidth: '1440px',  height: 'auto' }}
          priority
          draggable={false} 
        />
    
      </main>
    </div>
  );
}

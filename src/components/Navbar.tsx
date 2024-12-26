import Image from 'next/image'
import styles from "./page.module.css";
export default function Navbar() {
  return (
    <div className='pt-20'>
     <Image
          className={styles.logo}
          src="/assets/icons/logo.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
    </div>
  )
}
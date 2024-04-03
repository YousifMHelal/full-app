import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          <span>Ooops!</span> <br />
          Nothing Here
        </h1>
        <p className={styles.desc}>
          the requested URL was rejected. please, consult with your
          administrator Error is that your {`site's`} Coockie in your browser is
          corrupt. this happens for various reasons
        </p>
        <Link href="/" className={styles.btn}>
          Go back!
        </Link>
      </div>
      <div className={styles.imageContainer}>
        <Image
          className={styles.img}
          src="/error.png"
          width={450}
          height={450}
          alt="404"
        />
      </div>
    </div>
  );
}

import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";


// Comment out Runner base path for production and uncomment the other one.
const theBasePath = "/Runner";
// const theBasePath = ".";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>


      <div
        className={styles.page}
      >
        <main className={styles.main}>
          <Image
            className={styles.logo}
            src={theBasePath + "/next.svg"}
            alt="Next.js logo"
            width={100}
            height={20}
            priority
          />
          <div className={styles.intro}>
            <h1>To get started, edit the index.tsx file.</h1>
            <p>
              Looking for a starting point?
            </p>
          </div>
          <div className={styles.ctas}>
            <a
              className={styles.primary}
              href="https:google.com"
            >
              <Image
                className={styles.logo}
                src={theBasePath + "/vercel.svg"}
                alt="Vercel logomark"
                width={16}
                height={16}
              />
              Deploy Now
            </a>
            <a
              className={styles.secondary}
              href="https:google.com"
            >
              Documentation
            </a>
          </div>
        </main>
      </div>
    </>
  );
}

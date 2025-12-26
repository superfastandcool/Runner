import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Heading } from "@chakra-ui/react";
import { Text } from '@chakra-ui/react'
import GameComp from "@/components/Game";


// Comment out Runner base path for production and uncomment the other one.
// const theBasePath = "/Runner";
const theBasePath = ".";

export default function Home() {
  return (
    <>
      <Head>
        <title>Runner</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>



      <main>
        <div className={styles.overall}>

          <Heading className={styles.chakraheading}>Welcome to Runner!</Heading>

          <Text fontSize='lg' className={styles.chakratext}>
            The game is called Runner. It is basic.The game is called Runner. It is basic.The game is called Runner. It is basic.
            The game is called Runner. It is basic.The game is called Runner. It is basic.The game is called Runner. It is basic.
            The game is called Runner. It is basic.The game is called Runner. It is basic.The game is called Runner. It is basic.
            The game is called Runner. It is basic.The game is called Runner. It is basic.The game is called Runner. It is basic.
            The game is called Runner. It is basic.The game is called Runner. It is basic.The game is called Runner. It is basic.
          </Text>

          <GameComp></GameComp>

        </div>
      </main>

    </>
  );
}

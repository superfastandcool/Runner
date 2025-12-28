import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

// Comment out Runner base path for production and uncomment the other one.
const theBasePath = "/Runner";
// const theBasePath = ".";

export default function GameLogic() {

    // This delay rendering technique is from ai.
    const [show, setShow] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setShow(true), 1000); // delay 1s
        return () => clearTimeout(t);
    }, []);


  return (
    <>
    {show ? (
    <div className={styles.gameinnerdiv}>
        
        <Image  
        className={styles.bubble1}
        src={theBasePath + "/globe.svg"}
        alt="bubble"
        width={150}
        height={190}></Image>

        <Image  
        className={styles.bubble2}
        src={theBasePath + "/globe.svg"}
        alt="bubble"
        width={150}
        height={190}></Image>
    </div>
    ) : (
    <div className={styles.gameinnerdiv}>
    </div>
    )}
    </>
  );
}
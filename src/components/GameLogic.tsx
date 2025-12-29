import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

// Comment out Runner base path for production and uncomment the other one.
const theBasePath = "/Runner";
// const theBasePath = ".";

export default function GameLogic() {

  let xpos = 15;
  let ypos = 0;

  // This delay rendering technique is from ai.
  const [show, setShow] = useState(false);
  const [xposState, setXPosState] = useState(xpos);
  const [yposState, setYPosState] = useState(ypos);

  


  useEffect(() => {
    const id = setInterval(() => {
      xpos = xpos + 1;
      ypos = ypos + 1;

      setXPosState(xpos);
      setYPosState(ypos);
    }, 1000);

    return () => clearInterval(id); // cleanup
  }, []);


  return (
    <>
    <div className={styles.gameinnerdiv}>
        
        <Image  
        className={styles.bubble1}
        src={theBasePath + "/globe.svg"}
        alt="bubble"
        width={150}
        height={190}></Image>

        <pre>{yposState +"%"}</pre>

        <Image  
        className={styles.bubble2}
        src={theBasePath + "/globe.svg"}
        alt="bubble"
        width={150}
        height={190}
        style={{  top: yposState +"%", left: "45%"}}></Image>
    </div>
    </>
  );
}
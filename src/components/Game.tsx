import styles from "@/styles/Home.module.css";
import { Button } from "@chakra-ui/react";
import { useRef, useState } from "react";


export default function GameComp() {

  const [showPlayButton, setShowPlayButton] = useState<boolean>(true);


  const handlePlayClick = () => {
    if (divRef.current) {
      divRef.current.requestFullscreen();
      setShowPlayButton(false);
    }
  }

  const divRef = useRef<HTMLDivElement>(null);



  return (
    <div className={styles.gamecomp} ref={divRef}>

      {/* The fullscreen functionality is based on AI. */}
      {showPlayButton && <Button className={styles.playbutton} onClick={handlePlayClick}>Play</Button>}

    </div>
  );
}

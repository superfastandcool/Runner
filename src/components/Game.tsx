import styles from "@/styles/Home.module.css";
import { Button } from "@chakra-ui/react";
import { useRef, useState } from "react";


export default function GameComp() {

  const [showPlayButton, setShowPlayButton] = useState<boolean>(true);


  const divRef = useRef<HTMLDivElement>(null);

  const handlePlayClick = () => {
    const theElement = divRef.current as any;

    if (theElement) {

      if (theElement.requestFullscreen) {
        theElement.requestFullscreen();
        setShowPlayButton(false);
      }
      else if (theElement.webkitRequestFullscreen) {
        theElement.webkitRequestFullscreen();
        setShowPlayButton(false);
      }
      else if (theElement.msRequestFullscreen) {
        theElement.msRequestFullscreen();
        setShowPlayButton(false);
      }
      
    }
  }

  



  return (
    <div className={styles.gamecomp} ref={divRef}>

      {/* The fullscreen functionality is based on AI. */}
      {showPlayButton && <Button className={styles.playbutton} onClick={handlePlayClick}>Play</Button>}

    </div>
  );
}

import styles from "@/styles/Home.module.css";
import { Button } from "@chakra-ui/react";
import { useRef, useState } from "react";


export default function GameComp() {

  const [showPlayButton, setShowPlayButton] = useState<boolean>(true);
  const [showPauseButton, setShowPauseButton] = useState<boolean>(false);
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
  const [iosFullScreenRequested, setIosFullScreenRequested] = useState<boolean>(false);

  const divRef = useRef<HTMLDivElement>(null);

  const handlePlayClick = () => {
    
    const theElement = divRef.current as any;
    


    if (isIOS) {
      setIosFullScreenRequested(true);
    }
    else {

      if (theElement.requestFullscreen) {
        theElement.requestFullscreen();
        setShowPlayButton(false);
      }

    }

  }

  



  return (
    <div className={iosFullScreenRequested ? styles.gamecompiosfull : styles.gamecomp} ref={divRef}>

      {/* The fullscreen functionality is based on AI. */}
      {showPlayButton && <Button className={styles.playbutton} onClick={handlePlayClick}>Play</Button>}
      {showPauseButton && <Button className={styles.pausebutton} onClick={handlePlayClick}>Pause</Button>}

    </div>
  );
}

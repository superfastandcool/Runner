import styles from "@/styles/Home.module.css";
import { Button } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";


export default function GameComp() {

  const [showPlayButton, setShowPlayButton] = useState<boolean>(true);
  const [showPauseButton, setShowPauseButton] = useState<boolean>(false);
  const [isIOS, setIsIOS] = useState(false);
  
  const [iosFullScreenRequested, setIosFullScreenRequested] = useState<boolean>(false);

  // From ai: useEffect prevents a SSR error as useEffect never runs in SSR.
  useEffect(() => {
    const ua = navigator.userAgent; setIsIOS(/iPhone|iPad|iPod/i.test(ua));
  }, []);

  const divRef = useRef<HTMLDivElement>(null);

  const handlePlayClick = () => {
    
    const theElement = divRef.current as any;
    


    if (isIOS) {
      setIosFullScreenRequested(true);
    }
    else {

      if (theElement.requestFullscreen) {
        theElement.requestFullscreen();
      }
    }
    setShowPlayButton(false);
    setShowPauseButton(true);

  }

  



  return (
    <>
    {isIOS ?
    <video>
      <div className={styles.video}>

        {/* The fullscreen functionality is based on AI. */}
        {showPlayButton && <Button className={styles.playbutton} onClick={handlePlayClick}>Play</Button>}
        {showPauseButton && <Button className={styles.pausebutton} onClick={handlePlayClick}>Pause</Button>}

      </div>
    </video>
    :
      <div className={styles.gamecomp} ref={divRef}>

        {/* The fullscreen functionality is based on AI. */}
        {showPlayButton && <Button className={styles.playbutton} onClick={handlePlayClick}>Play</Button>}
        {showPauseButton && <Button className={styles.pausebutton} onClick={handlePlayClick}>Pause</Button>}

      </div>
    }
    </>
  );
}

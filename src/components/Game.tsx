import styles from "@/styles/Home.module.css";
import { Button } from "@chakra-ui/react";
import { useState } from "react";


export default function GameComp() {

  const [showPlayButton, setShowPlayButton] = useState<boolean>(true);
  const [showPauseButton, setShowPauseButton] = useState<boolean>(false);
  
  const [fullscreenRequested, setFullscreenRequested] = useState<boolean>(false);



  const handlePlayClick = () => {

    setFullscreenRequested(true);

    setShowPlayButton(false);
    setShowPauseButton(true);

  }

  const handlePauseClick = () => {
    setFullscreenRequested(false);

    setShowPlayButton(true);
    setShowPauseButton(false);
  }

  



  return (
    <div className={fullscreenRequested ? styles.gamecompfull : styles.gamecomp}>

      {/* The fullscreen functionality is based on AI. */}
      {showPlayButton && <Button className={styles.playbutton} onClick={handlePlayClick}>Play</Button>}
      {showPauseButton && <Button className={styles.pausebutton} onClick={handlePauseClick}>Pause</Button>}


    </div>
  );
}
import styles from "@/styles/Home.module.css";
import { Button, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack } from "@chakra-ui/react";
import { useState } from "react";
import GameLogic from "@/components/GameLogic";



export default function GameComp() {

  const [showPlayButton, setShowPlayButton] = useState<boolean>(true);
  const [showPauseButton, setShowPauseButton] = useState<boolean>(false);
  
  const [fullscreenRequested, setFullscreenRequested] = useState<boolean>(false);

  const slider1defaultvalue = 3000;
  const [slider1val, setSlider1Val] = useState<number>(slider1defaultvalue); // The value of the label.
  const [slider1finalval, setSlider1FinalVal] = useState<number>(slider1defaultvalue); // The value once the slider has stopped being changed.



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
      

      <div className={styles.bottomright}>
        {showPauseButton && <Button className={styles.pausebutton} onClick={handlePauseClick}>Pause</Button>}
      </div>

      {/* Frequency of new bubbles being generated. */}
      {showPlayButton && 
        <Slider defaultValue={slider1defaultvalue} aria-label='slider-ex-1' step={1} 
          min={250}
          max={3000}
          onChange={(val) => setSlider1Val(val)} 
          onChangeEnd={(val) => setSlider1FinalVal(val)}>
          <SliderMark
            value={1500} // The position where the label displays.
            textAlign='center'
            bg='blue.500'
            color='white'
            mt='-10'
            ml='-5'
            w='12'
          >
            {slider1val}
          </SliderMark>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      }

      <GameLogic bubbleFrequency={slider1finalval}></GameLogic>


    </div>
  );
}
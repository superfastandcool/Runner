import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

// Comment out Runner base path for production and uncomment the other one.
const theBasePath = "/Runner";
// const theBasePath = ".";

export default function GameLogic() {

  const [refresh, setRefresh] = useState(1);
  const [bubblesHTML, setBubblesHTML] = useState<any>(<p>loading</p>)
  
  const bubblesArray = [
    {id: 1, display: true, xposition: 0, yposition: 10},
    {id: 2, display: true, xposition: 0, yposition: 0},
    {id: 3, display: true, xposition: 0, yposition: 0},
    {id: 4, display: false, xposition: 0, yposition: 0},
    {id: 5, display: false, xposition: 0, yposition: 0},
    {id: 6, display: false, xposition: 0, yposition: 0},
    {id: 7, display: false, xposition: 0, yposition: 0},
    {id: 8, display: false, xposition: 0, yposition: 0},
    {id: 9, display: false, xposition: 0, yposition: 0},
    {id: 10, display: false, xposition: 0, yposition: 0},
    {id: 11, display: false, xposition: 0, yposition: 0},
    {id: 12, display: false, xposition: 0, yposition: 0},
    {id: 13, display: false, xposition: 0, yposition: 0},
    {id: 14, display: false, xposition: 0, yposition: 0},
    {id: 15, display: false, xposition: 0, yposition: 0},
    {id: 16, display: false, xposition: 0, yposition: 0},
    {id: 17, display: false, xposition: 0, yposition: 0},
    {id: 18, display: false, xposition: 0, yposition: 0},
    {id: 19, display: false, xposition: 0, yposition: 0},
    {id: 20, display: false, xposition: 0, yposition: 0},
  ]



  // This useEffect is for movement of the bubbles down the screen.
  useEffect(() => {
    const id = setInterval(() => {
      // Check if pause is true.
      // If not:
      // For bubble in list, if display is true, then increment y position.

      for (let i = 0; i < bubblesArray.length; i++) {
        if (bubblesArray[i].display == true) {
          bubblesArray[i].yposition = bubblesArray[i].yposition + 1;
        }
      }


    setBubblesHTML(bubblesArray.map(bubble => 
      <Image
      key={bubble.id}
      className={styles.bubble2}
      src={theBasePath + "/globe.svg"}
      alt="" width={150}
      height={190}
      style={{ display: bubble.display ? "inline" : "none",  top: bubble.yposition +"%", left: "45%"}}>

      </Image>
    ));


      // Make a change to state so that the component re renders.
      setRefresh(refresh + 1);
    }, 1000);

    return () => clearInterval(id); // cleanup
  }, []);






  return (
    <>
    <div className={styles.gameinnerdiv}>
        {bubblesHTML}
    </div>
    </>
  );
}
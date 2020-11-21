import React, { useEffect, useState } from "react";
import { ColorfulMsg } from "./components/ColorfulMsg";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceFlag, setFaceFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickFaceFlag = () => {
    setFaceFlag(!faceFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceFlag || setFaceFlag(true);
      } else {
        faceFlag && setFaceFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>Hello!</h1>
      <ColorfulMsg color="blue">Are you ready?</ColorfulMsg>
      <ColorfulMsg color="pink">Yes!</ColorfulMsg>
      <button onClick={onClickCountUp}>Count up</button>
      <p>{num}</p>
      <button onClick={onClickFaceFlag}>On/Off</button>
      {faceFlag && <p>orz</p>}
    </>
  );
};

export default App;

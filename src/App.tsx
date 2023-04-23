import React, { useCallback, useState } from 'react';
import Webcam from "react-webcam";
import './App.css'

function App() {
  const ref = React.useRef() as React.MutableRefObject<Webcam>;
  const [photoCapture, setPhotoCapture] = useState<string | undefined>();

  const capture = useCallback(() => {
    const makeScreenshot = ref.current.getScreenshot();
    if (makeScreenshot)
      setPhotoCapture(makeScreenshot)
  }, [])

  return (
    <>
      <img src={photoCapture} alt="foto" />
      <Webcam
        //espelhar imagem
        mirrored={true}
        screenshotFormat="image/jpeg"
        ref={ref}
      />
      <button onClick={capture}>Tirar foto</button>
    </>
  )
}

export default App

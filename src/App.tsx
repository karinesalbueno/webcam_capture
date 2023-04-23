import React, { useState } from 'react';
import Webcam from "react-webcam";
import './App.css'

function App() {
  const ref = React.useRef() as React.MutableRefObject<Webcam>;
  const [photoCapture, setPhotoCapture] = useState<string | undefined>();

  const capture = () => {
    const makeScreenshot = ref.current.getScreenshot();
    if (makeScreenshot)
      setPhotoCapture(makeScreenshot)
  }

  return (
    <div className='container'>

      <Webcam
        mirrored={true} //espelhar imagem
        screenshotFormat="image/jpeg"
        ref={ref}
        className='webcam'
      />

      <div className='buttons'>
        <button onClick={() => capture()}>Tirar foto</button>
        <button onClick={() => { '' }}>Gravar vídeo</button>
      </div>

      {
        photoCapture ?
          <img src={photoCapture} alt="foto" />
          :
          <small>Sua foto ou vídeo serão exibidos aqui! Vamos lá?</small>
      }

    </div>
  )
}

export default App

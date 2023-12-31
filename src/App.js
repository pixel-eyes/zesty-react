import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import cabbage from './assets/image1.jpeg'
import mango from './assets/image2.jpeg'
import fig from './assets/image3.jpeg'
import gaze from './assets/image4.jpeg'
import peach from './assets/image5.jpeg'
import avocado from './assets/image6.jpeg'

const images = [ cabbage, mango, fig, gaze,peach, avocado ];


const App = () => {
  const [currentImage, setCurrentImage] = useState (0);
  
  const handClick = () => {
    const length = images.length - 1;

    setCurrentImage ((currentImage) => {
      if (currentImage < length) {
      return currentImage + 1; 
      } else {
        return 0;
      }
    });
  };

  return (
    <section>
     <header>
        <h1>Zesty</h1>
        <h2>A photography project <br/>by Ella
        Fieldling
        </h2>
        </header>

        <figure> 
        <figcaption>
          {currentImage + 1} / {images.length}
        </figcaption>
        <img alt="" src={images[currentImage]} onClick={handClick} />
    </figure>

    </section>
  );
};

export default App;

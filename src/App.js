import logo from './logo.svg';
import React, { useState } from 'react';
import Slider from "react-slick";
import './App.css';

const slidesData = [
  "Slide 1 Content <h2>Can I put html?</h2>",
  "Slide 2 Content <p>If not - how am I going to style it?</p>",
  "Slide 3 Content",
  // ... Add as many slides as you want
];

function App() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,  // This prop will enable the fade transition.
  };




  const [currentSlide, setCurrentSlide] = useState(0);

  const goNext = () => {
    if (currentSlide < slidesData.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const goPrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };


  return (
    <div className="App">
            <h1>Slide Show App</h1>
            <p>the "slider" from react-slick - just a test</p>
            <Slider {...settings}>
            {slidesData.map((slideContent, idx) => (
          <div key={idx} className="slide-content">
            {slideContent}
          </div>
        ))}
      </Slider>

<p> a home brew slider that works on next and left buttons</p>
<div className="slide-content">
  {slidesData[currentSlide]}
</div>




<button onClick={goPrev} disabled={currentSlide === 0}>
  Previous
</button>
<button onClick={goNext} dsiabled={currentSlide === slidesData.length -1}>
  Next
</button>

    </div>
  );
}

export default App;

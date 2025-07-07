import React, {useRef} from "react";
import Product from "./Product";
import "./Slider.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";

function Slider({products}) {
  const sliderRef = useRef();

  // scroll u kontrol etmek için
  const scrollLeft = () => {
    sliderRef.current.scrollBy({left: -300, behavior: "smooth"});
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({left: 300, behavior: "smooth"});
  };

  return (
    <div className="slider-wrapper">
      <button className="arrow left" onClick={scrollLeft}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <div className="slider-container" ref={sliderRef}>
        <div className="slider-track">
          {products.map((product, index) => (
            <div className="slide" key={index}>
              <Product product={product} />
            </div>
          ))}
        </div>
      </div>
      <button className="arrow right" onClick={scrollRight}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
}

export default Slider;

import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ images }) => {
  /* You will need to  use  state to mnage the current image */
  const [current, setCurrent] = useState(0);
  const first = 0;
  const last = images.length - 1;

  /* You will need to hanle the click on left and right button */
  const left=()=>{
    if(current === first)setCurrent(last);
  else setCurrent(current-1);}
  const right=()=>{
    if(current === last)setCurrent(first);
  else setCurrent(current+1);}
  /* You will need to manage the cases when we are on the last image or first image*/

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left"  onClick={left} />

      {/* YOu will need to display the current image, not the first one.. */}
      <img src={images[current].src} alt={images[current].alt} className="slide" />

      <BsArrowRightCircleFill className="arrow arrow-right" onClick={right} />
    </div>
  );
};

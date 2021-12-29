import * as React from "react";
import { gsap } from "gsap";
import { useEffect, useState } from "react";

import "./infiniteText.css"

const InfiniteText = () => {

  // GSAP Animations (JS)

  useEffect(() => {
    const vw = window.innerWidth

    // const updateWindowDimensions = () => {
    //   setVw(window.innerWidth);
    // };

    // window.addEventListener("resize", updateWindowDimensions);

    gsap.to(".infiniteElement", {
      duration: 10,
      ease: "none",
      x: `+=${vw + (vw/5)}`, //move each box 500px to right
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % (vw  + (vw/5))) //force x value to be between 0 and 500 using modulus
      },
      repeat: -1
    });

    // return () => window.removeEventListener("resize", updateWindowDimensions) 
  }, []);

  return(
  <div className="infiniteWrapper">
    <div className="infiniteElement">
      <div className="indieFlower">
        "Incredible"
      </div>
      - Anonymous
    </div>
    <div className="infiniteElement" style={{transform: "translateX(calc(100vw / 5))"}}>
    <div className="windSong">
        "Refreshing"
      </div>
      - Anonymous
    </div>
    <div className="infiniteElement" style={{transform: "translateX(calc(200vw / 5))"}}>
      <div className="robotoMono">
        "Brilliant"
      </div>
      - Noel Thomas
    </div>
    <div className="infiniteElement" style={{transform: "translateX(calc(300vw / 5))"}}>
    <div className="monteCarlo">
        "Stunning"
      </div>
      - Anonymous
    </div>
    <div className="infiniteElement" style={{transform: "translateX(calc(400vw / 5))"}}>
    <div className="bebasNeue">
        "Gorgeous"
      </div>
      - Anonymous
    </div>
    <div className="infiniteElement" style={{transform: "translateX(calc(500vw / 5))"}}>
    <div className="dancingScript">
        "Moving"
      </div>
      - Anonymous
    </div>
  </div>
  )
}

export default InfiniteText

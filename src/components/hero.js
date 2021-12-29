import * as React from "react";
import { gsap } from "gsap";
import { useEffect, useState } from "react";
import "./hero.css";

import ArtLottie from "../components/lottieAnims/artLottie";
import artJson from '../components/lottieAnims/art.json';

import { Link } from "gatsby";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


const Hero = () => {

  // GSAP Animations (JS)
  useEffect(() => {
    gsap.to('.hero', {
      y: -15,
      opacity: 1,
      duration: 5,
      pause: true,
      ease: "power4"
  });

  }, []);

  // AOS Animations (CSS)
  useEffect(() => {
    AOS.init({
      duration: 1000,
      disable:'mobile'
      
     });
  }, []);

  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const [cursorSize, setCursorSize] = useState(10);
  const [offset, setOffset] = useState(5);

  // Cursor
  useEffect(() => {
    
    const getMousePos = (e) => {
      setMouseX(e.clientX - offset);
      setMouseY(e.clientY - offset);
    };

    window.addEventListener('mousemove', getMousePos);

    return function cleanupListener() {
       window.removeEventListener('mousemove', getMousePos);
     }
 }, [offset]);

 const [textColor, setTextColor] = useState("black");
 const [lottie] = useState(artJson);
 const [heroText, setHeroText] = useState("");
 const [heroTextOpacity, setHeroTextOpacity] = useState(0);
 const [HeroFontSize, setHeroFontSize] = useState("4vw");

  const OnHoverStore = () => {
    setTextColor("var(--n-purple)");
    cursorBig();
    setHeroText("Portfolio");
    setHeroTextOpacity(1);
    setHeroFontSize("6vw");
  }

  const OnHoverMission = () => {
    setTextColor("var(--n-light-brown)"); 
    cursorBig();
    setHeroText("About");
    setHeroTextOpacity(1);
    setHeroFontSize("6vw");
  }

  const OnHoverContact = () => {
    setTextColor("var(--n-yellow-brown)"); 
    cursorBig();
    setHeroText("Contact");
    setHeroTextOpacity(1);
    setHeroFontSize("6vw");
  }

  const OffHover = () => {
    setTextColor("black")
    cursorSmall();
    setHeroText("");
    setHeroTextOpacity(0);
    setHeroFontSize("4vw");
  }


  const cursorBig = () => {
    setCursorSize(50);
    setOffset(25);
  }

  const cursorSmall = () => {
    setCursorSize(10);
    setOffset(5);
  }

  return(
  <div>
    <div className="menu" 
    data-aos="fade"
    data-aos-anchor="#top"
    data-aos-mirror="true"
    data-aos-anchor-placement="top-top">
      {/* SHOPIFY MODEL */}
      {/* <div role="none" className="menuItem" style={{color: `${textColor}`}} onMouseOver={OnHoverStore} onFocus={OnHoverStore} onMouseLeave={OffHover}>
        <Link
        to="/home/"
        aria-label={`Store`}
        className="crosshair"
        >Store
        </Link>
      </div> */}
      <div role="none" className="menuItem" style={{color: `${textColor}`}} onMouseOver={OnHoverStore} onFocus={OnHoverStore} onMouseLeave={OffHover}>
        <Link
        to="/portfolio"
        aria-label={`Portfolio`}
        className="crosshair"
        >Portfolio
        </Link>
      </div> 
      <div role="none" className="menuItem" style={{color: `${textColor}`}} onMouseOver={OnHoverMission} onFocus={OnHoverStore} onMouseLeave={OffHover}>
        <Link
        to="/about"
        aria-label={`About`}
        className="crosshair"
        >About
        </Link>
      </div> 
      <div role="none" className="menuItem" style={{color: `${textColor}`}} onMouseOver={OnHoverContact} onFocus={OnHoverContact}  onMouseLeave={OffHover}>
        <Link
          to="/contact/"
          aria-label={`Contact`}
          className="crosshair"
          >Contact</Link>
      </div>
    </div>

    <div className="menuTrigger" id="top"></div>

    <div className="hero">
      <ArtLottie className="heroLottie" lottie={lottie} />
      <div className="textCol">
        <h1 className="heroText">Lilli's</h1>
        <h1 className="heroTextSecond" style={{color: `${textColor}`, opacity: `${heroTextOpacity}`, fontSize: `${HeroFontSize}`, transition: "font-size 0.3s, color 2.5s, opacity 2s"}}>{heroText}</h1>
      </div>
    </div>
    <div className="filler"></div>
    <div className="dot" style={{top: `${mouseY}px`, left: `${mouseX}px`, width: `${cursorSize}px`, height: `${cursorSize}px`}}></div>

  </div>
  )
}

export default Hero

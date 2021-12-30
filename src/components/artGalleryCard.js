import * as React from "react"
import { Link } from "gatsby"
import { useEffect } from "react"

import "./artGallery.css"


export function ArtGalleryCard({image, eager }) {

  useEffect(() => {
    (function(src, cb) {
      var s = document.createElement('script'); s.setAttribute('src', src);
      s.onload = cb; (document.head || document.body).appendChild(s);
    })('https://ucarecdn.com/libs/blinkloader/3.x/blinkloader.min.js', function() {
      window.Blinkloader.optimize({
        pubkey:'c249ebd45dcd4fd41737',
        fadeIn:true,
        lazyload:true,
        smartCompression:true,
        responsive:true,
        retina:true,
        webp:true
      });
    })
  }, [])


  return (
    <Link
      to="/portfolio/"
      aria-label={`View`}
    >
      <div className="crosshair">
        <img data-blink-src={image} alt="" style={{objectFit:"cover", backgroundColor: "white"}} loading={eager ? "eager" : "lazy"}/>
      </div>
    </Link>
  )
}
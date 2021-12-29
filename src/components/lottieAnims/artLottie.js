import React from "react";
import Lottie from 'react-lottie-player';

function ArtLottie(props) {
    return(
    <Lottie
      loop
      animationData={props.lottie}
      play
    />
    )
  }

export default ArtLottie;
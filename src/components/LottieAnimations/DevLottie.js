// src/components/DevLottie/DevLottie.js
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "../../Assets/dev-animation.json.json";

const DevLottie = () => {
  return (
    <div className="lottie-wrapper">
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};


export default DevLottie;

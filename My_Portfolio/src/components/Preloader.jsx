import React, { useRef } from "react";
import Lottie from "lottie-react";
import { loadingAnimation } from "../assets";


export const Preloader = () => {
  const loadingRef = useRef(null);

  return (
    <div className="fade-out min-h-screen w-full fixed p-0 z-50 font-['Poppins'] text-white bg-primary flex flex-col items-center justify-center">
      <div className="w-[400px] h-[400px] ">
        <Lottie lottieRef={loadingRef} animationData={loadingAnimation} />
      </div>
      <div className="wrapper">
        <div className="static-text">I'm</div>
        <ul className="typing-txts">
          <li>
            <span data-content="">a Developer</span>
          </li>
          <li>
            <span data-content="">a Creator</span>
          </li>
          <li>
            <span data-content="">a Designer</span>
          </li>
          <li>
            <span data-content="">Jaynik Parsotomo.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Preloader;

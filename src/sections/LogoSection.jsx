import React from "react";
import Lottie from "react-lottie";
import animationData from "../components/lottie/cat.json";
import { useMediaQuery } from "react-responsive";

const LogoSection = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="md:my-20 my-10 relative">
      <div className="gradient-edge"></div>
      <div className="gradient-edge"></div>

      <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-5">
          {Array.from({ length: isMobile ? 2 : 5 }, (_, i) => (
            <Lottie
              isClickToPauseDisabled="true"
              options={defaultOptions}
              height={100}
              width={100}
            />
          ))}
          {Array.from({ length: isMobile ? 2 : 5 }, (_, i) => (
            <Lottie
              isClickToPauseDisabled="true"
              options={defaultOptions}
              height={100}
              width={100}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSection;

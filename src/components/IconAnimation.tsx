import Lottie from "lottie-react";
import { IIconAnimationProps } from "../interfaces/IIconProps";
import { useEffect } from "react";

export const IconAnimation = ({ iconRef, data, autoplay, loop, width = 24, height = 24, speed = 1, className }: IIconAnimationProps) => {
 
  useEffect(() => {
    iconRef.current?.setSpeed(speed)
  }, [])
  
  return (
    <Lottie className={className}
      lottieRef={iconRef}
      animationData={data}
      style={{ width, height }}
      autoplay={!autoplay ? false : autoplay}
      loop={!loop ? false : loop}
    />
  );
};

import Lottie from "lottie-react"
import { MutableRefObject } from "react"

interface IIconAnimationProps {
    iconRef: MutableRefObject<any>
    data: any
}

export const IconAnimation = ({ iconRef, data }: IIconAnimationProps) => {
  
    return (
    <Lottie lottieRef={iconRef} animationData={data} style={{ width: 24, height: 24 }} autoplay={false} loop={false}/>
  )
}

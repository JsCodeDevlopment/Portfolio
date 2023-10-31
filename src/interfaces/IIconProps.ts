import { LottieRef } from "lottie-react"

export interface IIconAnimationProps {
    iconRef: LottieRef
    data: any
    autoplay?: boolean
    loop?: boolean
    width?: number
    height?: number
    speed?: number
    className?: string
}
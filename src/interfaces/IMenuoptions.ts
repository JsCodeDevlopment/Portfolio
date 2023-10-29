import { MutableRefObject } from "react"

export interface IMenuOptions {
    icon: any
    title: string
    href: string
    iconRef: MutableRefObject<any>
}
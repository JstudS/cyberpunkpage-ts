export type ThumbsContent = {
    id: number
    img: string
    alt: string
}


export type SliderContent = {
    img: string
    alt: string
    title: string
    text: string
    btn?: {
        title: string
        href: string
    }
    thumbsImages?: ThumbsContent[] 
}

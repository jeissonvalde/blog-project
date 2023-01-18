declare global {
    interface Window {
        mainInterval: any,
        Article: any
    }
}

export interface BlogInterface {
    title: string,
    url: string,
    id: string,
    introduction: any[],
    messages: any[],
    content: string,
    bgImage: string,
    bgImageAuthor: string,
    alt: string,
    meta: {}[],
    createdAt: string,
    className: string,
    images: [],
    createdBy: {}
}


export type Article = {
    title: string,
    url: string,
    id: string,
    introduction: any[],
    messages: any[],
    content: string,
    bgImage: string,
    bgImageAuthor: string,
    alt: string,
    meta: {}[],
    createdAt: Date,
    className: string,
    images: {}[],
    createdBy: {}
}


export type Headline = {
    title: string,
    url: string,
    headlineId: string,
    introduction: any[],
    bgImage: string,
    bgImageAuthor: string,
    alt: string,
    meta: {}[],
    createdAt: Date,
}

export interface BlogInterfaceElem {
    title: string,
    content: string,
    images: any[]
}

export type BlogInterfaceEv = BlogInterface<Omit, 'url' | 'id' | 'introduction' | 'messages' | 'bgImage' | 'bgImageAuthor' | 'alt' | 'meta' | 'createdAt' | 'createdBy' | 'className'>

export interface BgImageInterface {
    src: string,
    alt: string
}
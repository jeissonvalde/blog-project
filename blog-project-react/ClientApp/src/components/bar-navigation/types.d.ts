import { Component } from 'react'

export interface Route {
    path: string,
    Container: Component,
    label: string,
}

// declare global {
//     interface location {
//         pathname: string,
//     }
//     interface history {
//         replaceState: any
//     }
// }
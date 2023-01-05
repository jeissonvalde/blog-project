import Home from './pages/Home'
import Sheet from './pages/Article'

// Res
import images from './assets/images.json'

/**
 * No end paths with a slash (/) except home page.
 */

export default [
    {
        index: true,
        Container: Home,
        path: '/',
        label: 'Inicio',
        icon: {
            tag: 'img',
            value: images.routes.home,
            alt: 'home image'
        }
    },
    {
        Container: Sheet,
        path: 'article',
        label: 'Publicación',
        icon: {
            tag: 'img',
            value: images.routes.post,
            alt: 'publication image'
        }
    },
];
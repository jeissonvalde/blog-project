import { Home } from './pages/Home'
import { Publication } from './pages/Article'

// Res
import imagesData from './assets/images.json'

type AppRouteInterface = {
  index: boolean,
  label: string,
  route: string,
  icon: {
    value: string,
    alt: string
  },
  Element: any
}

const AppRoutes = [
  {
    index: true,
    Element: Home,
    icon: {
      tag: 'img',
      value: imagesData.routes.home,
      alt: 'home image'
    },
    path: '/',
    label: 'Inicio'
  },
  {
    index: false,
    Element: Publication,
    icon: {
      tag: 'img',
      value: imagesData.routes.article,
      alt: 'article image'
    },
    path: '/article',
    label: 'Leer'
  },
];

export default AppRoutes;

import {
    Navigate
} from 'react-router-dom';
import {
    stopPresentation
} from '../../pages/Home/controllers/animations';

export function navigate (setRedirect: any, path: string) {
    stopPresentation({ navigating: true })

    setTimeout(() => {
        setRedirect(path)
    }, 400)
}

export function navigateTo(this: any, route: { Container: any, path: string }) {
    // Clear intervals
    for (let i = 0; i < 100; i++) { console.log(window.clearInterval(i)) }

    /**
     * Handle history
     * Handle replace location
     * Handle url params
     * Handle Get data
     * Handle make server queries
     */

    // Verifications
    if (route.path.substring(0, 1) != '/' && route.path.substring(1, 2) == '') {

        console.error(route)
        return alert('URL inválida')
    }
    // if (location.pathname == route.path) return null


    let 
        // pathName = location.pathname.split('/'),
        pathRoute = route.path as string,
        pathRouteSplited = pathRoute.split('/')

    let routeAndParams = pathRouteSplited[1] ? pathRouteSplited[1].split('?') : [],
        paramList = routeAndParams[1] ? routeAndParams[1].split('&') : []

    // Page
    let currentPath = routeAndParams[0] ? routeAndParams[0] : pathRoute,
        params = {} as any

    if (pathRouteSplited[0] == '' && pathRouteSplited[1] == '') currentPath = route.path // Considerado como home


    // Params
    for (let idx = 0; idx < paramList.length; idx++) {
        const prm = paramList[idx].split('=') as string[]
        params[prm[0]] = prm[1]
    }

    // this.props.setCurrentPath({ path: currentPath, req: { body: params } })
    // history.replaceState({}, '', pathRoute)
}

export default {
    navigateTo,
    navigate
}

// Types
type NavigationParams = {
    path: string,
}
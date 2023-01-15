import {
    stopPresentation
} from './animations';


export function clickHeadline (articleId: string) {
    let markerElem = document.querySelector('#home-headline-list li.marker') as any,
        liElem = document.getElementById(articleId) as HTMLElement,
        previewToFocus = document.getElementById('img-preview-' + articleId)

    // Clear intervals and remove preview animation
    stopPresentation({})
    
    setTimeout(() => {
        markerElem.style.transform = `translate(0px, ${liElem.offsetTop}px)`
        liElem?.classList.add('pointer')
        previewToFocus?.classList.add('bring-the-picture-here')
    }, 400)
}
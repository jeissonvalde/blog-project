/*
  The item list pointer can be managed from the title list, located at the top left. 
  Selecting a title brings up each article submission with "bring-the-picture-here" css. 
  After a moment it is removed with "take-away-photography" css.

  Selecting a title to preview disables automatic viewing.
*/

// Start or restart presentation
export function presentation (props: Props) {
    const { setMainInterval } = props

    // let This = this as any
    setTimeout(() => {
        let interv = setInterval(() => {
            const headlineListElem = document.getElementById('home-headline-list') as HTMLElement
            console.log('Animar')

            if (headlineListElem) {
                /**
                 * pointer is Li that showing up.
                 * next, if the next item is undefined then choose the first.
                 * markerElem is the white background.
                 */
                let headlineItems = headlineListElem.getElementsByClassName('headline') as HTMLCollectionOf<HTMLElement>,
                    pointer = headlineListElem.querySelector('.pointer') as HTMLElement,
                    pointer_index = Number(pointer.getAttribute('data-idx')),
                    next = headlineItems[pointer_index + 1] || headlineItems[0],
                    markerElem = headlineListElem.querySelector('li.marker') as HTMLElement


                // Take away
                pointer?.classList.remove('pointer')
                let imgPointer = document.getElementById('img-preview-' + pointer?.getAttribute('id'))
                imgPointer?.classList.remove('bring-the-picture-here')
                imgPointer?.classList.add('take-away-photography')
                setTimeout(() => imgPointer?.classList.remove('take-away-photography'), 7000)

                // Bring here
                next?.classList.add('pointer')
                let nextPreviewId = 'img-preview-' + next?.getAttribute('id')
                let nextPreviewElem = document.getElementById(nextPreviewId) as HTMLElement
                nextPreviewElem?.classList.add('bring-the-picture-here')

                // Move marker
                markerElem.style.transform = `translate(0px, ${next.offsetTop}px)`
            } else { console.log('No está la lista de titulares.') }
            // End define pointer element

        }, 8000) // End interval
    }, 1000)
}

// opt: { callback }
export function stopPresentation (opts: any, selectedId: string) {
    // End interval
    let interval_idx = 0
    do {
        clearInterval(interval_idx)
        interval_idx += 1
    } while (interval_idx < 101);

    let headlineListElem = document.getElementById('home-headline-list'),
        headlineItems = headlineListElem?.getElementsByClassName('headline') as HTMLCollectionOf<HTMLElement>,
        pointer = headlineListElem?.querySelector('.pointer'),
        pointer_index = Number(pointer?.getAttribute('data-idx')),
        previewListElem = document.getElementById('pub-preview-images'),
        articleImageElems = previewListElem?.getElementsByClassName('article-image') as HTMLCollectionOf<HTMLElement>

    pointer?.classList.remove('pointer')
    for (let jdx = 0; jdx < articleImageElems.length; jdx++) {
        if (articleImageElems[jdx].classList.contains('bring-the-picture-here')) {
            articleImageElems[jdx].classList.remove('bring-the-picture-here')
            articleImageElems[jdx].classList.add('take-away-photography')

            setTimeout(() => {
                articleImageElems[jdx].classList.remove('take-away-photography')
            }, 7000)
            continue
        }

        articleImageElems[jdx].classList.remove('bring-the-picture-here')
        articleImageElems[jdx].classList.remove('take-away-photography')
    }
    // End clean pointers (for)
}

// Types
type Props = { setMainInterval: Function }
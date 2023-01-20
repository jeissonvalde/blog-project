import images from '../../assets/images.json';

// Init
export function listenNotis () {
    if (!Notification) {
        alert('Por favor, vea este sitio web en Google Chrome o Microsoft Edge.')
        return null
    }

    if (Notification.permission != 'granted') {
        Notification.requestPermission()
            .then(res => console.log(res))
    }
}

export function Nofity (data: any) {
    if (Notification.permission != 'granted') return null

    const notifyElem = new Notification(data.title || 'Notification Title', {
        icon: images.routes.home,
        body: data.body || "New Notification! Click to Check",
    })

    notifyElem.onclick = e => {
        // window.open(data.url)
    }
}

// Send message
export function clickSendMessage (e: any) {
    let inputMessageElem = document.querySelector('.fac-m-user-i-input') as HTMLInputElement,
        messageListElem = document.querySelector('.fac-messages-list')

    // event
    let text = inputMessageElem.value,
        messageId = 'message-' + String(Math.random()).substring(4, 8)
    if (text != '') {
        let messageElem = document.createElement('div')
        messageElem.setAttribute('class', 'fac-message-container')
        messageElem.setAttribute('id', messageId)
        messageElem.innerHTML = `
            <div class='fac-message-item user new-message'>
                <b>Tú</b>
                <p>${text}</p>
            </div>
        `
        messageListElem?.insertAdjacentElement('beforeend', messageElem)
        // Clean input message
        inputMessageElem.value = ''

        setTimeout(() => {
            let valueScrollTo = 
                Number(document.getElementById(messageId)?.offsetHeight)
                + Number(messageListElem?.clientHeight)

            messageListElem?.parentElement?.scrollTo(
                0,
                valueScrollTo
            )
        }, 200)
    }
}

// Detect Enter to send message
export function changeInputUser (e: any) {
    e.key == 'Enter' ? clickSendMessage(null) : null
}

// Open chat
export function clickOpenChat () {
    const floatingAccessElem = document.querySelector('.floating-access-container')

    clickCloseChat()
    floatingAccessElem?.classList.add('fac-open-chat')
}

// Open notifications
export function clickOpenNotificationList () {
    const floatingAccessElem = document.querySelector('.floating-access-container')

    clickCloseChat()
    floatingAccessElem?.classList.add('fac-open-notifications')
}

export function clickCloseChat () {
    const floatingAccessElem = document.querySelector('.floating-access-container')
    floatingAccessElem?.classList.remove('fac-open-chat')
}

export function clickCloseNotificationList () {
    const floatingAccessElem = document.querySelector('.floating-access-container')
    floatingAccessElem?.classList.remove('fac-open-notifications')
}

// Replace scroll event on message list.
export function mouseDownConversation (e:any) {
    const chordsLayer = document.querySelector('.fac-c-chords-layer') as HTMLElement
    chordsLayer.style.display = 'block'
    // qs('heart-move-map-element')?
    //     .style.display = 'block'
    console.log(window['touchStarted'])

    document.onmouseup == null
        ? document.onmouseup = mouseUpConversation
        : null
}

export function mouseMoveConversation (e:any) {
    let clientY = e.clientY,
        clientX = e.clientX,
        conversationElem = document.querySelector('.fac-messages-list') as HTMLElement
    
    //   if (device === 'phone') {
    //     clientY = e.touches[0].clientY
    //     clientX = e.touches[0].clientX
    //   }

    if (!window['touchStarted']) {

        window['touchStarted'] = {
            y: e.clientY
    }

    // if (device === 'phone') window['touchStarted'] = {
    //   x: e.touches[0].clientX,
    //   y: e.touches[0].clientY
    // }
    }

    let position_2 = { // trayectoria
        y: window['touchStarted'].y - clientY,
    }
    // position_2.y += Number(window['touchStarted'].y) || 0

    
    if (conversationElem) {
        const beforeY = conversationElem.getAttribute('data-position-y')
        position_2.y = beforeY != null ? Number(beforeY) + position_2.y : position_2.y

        console.log(beforeY, position_2.y)
        conversationElem.style.transform = `translateY(${position_2.y}px)`
        // conversationElem.style.top = `${position_2.y}px`
    }
}

export function mouseUpConversation (e:any) {
    const chordsLayer = document.querySelector('.fac-c-chords-layer') as HTMLElement,
        conversationElem = document.querySelector('.fac-messages-list') as HTMLElement

    chordsLayer.style.display = 'none'
    conversationElem.setAttribute('data-position-y', String(window['touchStarted'].y))
    window['touchStarted'] = null
}
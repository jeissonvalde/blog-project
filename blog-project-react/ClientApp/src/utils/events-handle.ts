// For just one time, for react components.
export class GlobalEvent {
    events: any

    constructor() {
        this.events = {}
    }

    setEventGlobal = (params: { id: string, handler: any }) => {
        if (!params.id) return alert('Se necesita un id en setEventGlobal')
        if (!params.handler) return alert('Se necesita un handler en setEventGlobal')


        if (!this.events[params.id]) {
            params.handler()
            this.events[params.id] = new Date()
        }
    }
}
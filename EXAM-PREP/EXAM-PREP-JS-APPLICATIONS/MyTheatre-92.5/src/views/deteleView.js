import * as eventsService from "../services/eventsService.js"


export const deleteView = async (ctx) => {
    let eventId = ctx.params.eventId
    try {
        const event = await eventsService.getOne(eventId)

        let confirmed = confirm(`Do you want to delete this event: ${event.title}`)

        if (confirmed) {
            await eventsService.remove(eventId)
            ctx.page.redirect('/profile')
        }
    } catch (error) {
        return alert(error);
    }

}
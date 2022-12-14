import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as eventsService from "../services/eventsService.js"
import { eventDataIsInvalid } from "../utils/utils.js";

export const editTemplate = (event, submitHandler) => html`
        <!--Edit Page-->
        <section id="editPage">
            <form class="theater-form" @submit=${submitHandler}>
                <h1>Edit Theater</h1>
                <div>
                    <label for="title">Title:</label>
                    <input id="title" name="title" type="text" placeholder="Theater name" value=${event.title}>
                </div>
                <div>
                    <label for="date">Date:</label>
                    <input id="date" name="date" type="text" placeholder="Month Day, Year" value=${event.date}>
                </div>
                <div>
                    <label for="author">Author:</label>
                    <input id="author" name="author" type="text" placeholder="Author" value=${event.author}>
                </div>
                <div>
                    <label for="description">Theater Description:</label>
                    <textarea id="description" name="description" placeholder="Description">${event.description}</textarea>
                </div>
                <div>
                    <label for="imageUrl">Image url:</label>
                    <input id="imageUrl" name="imageUrl" type="text" placeholder="Image Url" value=${event.imageUrl}>
                </div>
                <button class="btn" type="submit">Submit</button>
            </form>
        </section>
`

export const editView = (ctx) => {
    const eventId = ctx.params.eventId
    const submitHandler = (e) => {
        e.preventDefault();

        const eventData = Object.fromEntries(new FormData(e.currentTarget))

        if (eventDataIsInvalid(eventData)) {
            return alert('all fields are required')
        }

        eventsService.edit(eventId, eventData)
            .then(() => {
                ctx.page.redirect(`/events/${eventId}`)
            })
            .catch(err => {
                return alert(err);
            })
    }
    eventsService.getOne(eventId)
    .then(event => {
        ctx.render(editTemplate(event, submitHandler))
    })

}
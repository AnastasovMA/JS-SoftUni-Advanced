import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as eventsService from "../services/eventsService.js"


export const detailsTemplate = (event, user) => html`
        <section id="detailsPage">
            <div id="detailsBox">
                <div class="detailsInfo">
                    <h1>Title: ${event.title}</h1>
                    <div>
                        <img src=${event.imageUrl} />
                    </div>
                </div>
        
                <div class="details">
                    <h3>Theater Description</h3>
                    <p>${event.description}</p>
                    <h4>Date: ${event.date}</h4>
                    <h4>Author: ${event.author}</h4>
                    ${user && user._id == event._ownerId
        ? html`<div class="buttons">
                        <a class="btn-delete" href="/events/${event._id}/delete">Delete</a>
                        <a class="btn-edit" href="/events/${event._id}/edit">Edit</a>
                        <a class="btn-like" href="#">Like</a>
                    </div>`
        : nothing}
                    <p class="likes">Likes: 0</p>
                </div>
            </div>
        </section>
`
export const detailsView = (ctx) => {
    eventsService.getOne(ctx.params.eventId)
        .then(event => {
            if (ctx.user) {
                ctx.render(detailsTemplate(event, ctx.user));

            } else {
                ctx.render(detailsTemplate(event))
            }
        })
}
import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as dashboardService from "../services/dashboardService.js"


export const detailsTemplate = (pet, user) => html`
        <section id="detailsPage">
            <div class="details">
                <div class="animalPic">
                    <img src=${pet.imageUrl}>
                </div>
                <div>
                    <div class="animalInfo">
                        <h1>Name: ${pet.name}</h1>
                        <h3>Breed: ${pet.breed}</h3>
                        <h4>Age: ${pet.age}</h4>
                        <h4>Weight:${pet.weight}</h4>
                        <h4 class="donation">Donation: 0$</h4>
                    </div>
                    <!-- if there is no registered user, do not display div-->
                    ${user && user._id == pet._ownerId
        ? html`
                    <div class="actionBtn">
                        <!-- Only for registered user and creator of the pets-->
                        <a href="/catalog/${pet._id}/edit" class="edit">Edit</a>
                        <a href="/catalog/${pet._id}/delete" class="remove">Delete</a>
                        <!--(Bonus Part) Only for no creator and user-->
                        <a href="#" class="donate">Donate</a>
                    </div>`
        : nothing}
        
                </div>
            </div>
        </section>
`;

export const detailsView = (ctx) => {
    dashboardService.getOne(ctx.params.petId)
        .then(pet => {
            if (ctx.user) {
                ctx.render(detailsTemplate(pet, ctx.user))
            } else {
                ctx.render(detailsTemplate(pet))
            }
        })
}
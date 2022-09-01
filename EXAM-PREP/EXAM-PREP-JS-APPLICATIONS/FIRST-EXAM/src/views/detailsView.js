import { html, nothing } from "../../node_modules/lit-html/lit-html.js"
import * as petService from "../services/petService.js"

const detailsTemplate = (pet, user, onDelete) => html`
<section id="detailsPage">
    <div class="details">
        <div class="animalPic">
            <img src=${pet.image}>
        </div>
        <div>
            <div class="animalInfo">
                <h1>Name: ${pet.name}</h1>
                <h3>Breed: ${pet.breed}</h3>
                <h4>Age: ${pet.age}</h4>
                <h4>Weight: ${pet.weight}</h4>
                <h4 class="donation">Donation: 0$</h4>
            </div>
            ${user
            ? html`
            <!-- if there is no registered user, do not display div-->
            <div class="actionBtn">
                <!-- Only for registered user and creator of the pets-->
                ${pet.isOwner
                    ? html`
                <a href="/pets/${pet._id}/edit" class="edit">Edit</a>
                <a @click=${onDelete}href="javascript:void(0)" class="remove">Delete</a>`
                    : nothing}
                <!--(Bonus Part) Only for no creator and user-->
                <a href="#" class="donate">Donate</a>`
                : nothing}

            </div>
        </div>
    </div>
</section>
`

export const detailsView = async (ctx) => {
    let petId = ctx.params.petId;
    const pet = await petService.getOne(petId);

    if (ctx.user) {
        pet.isOwner = ctx.user._id == pet._ownerId;
    }
    ctx.render(detailsTemplate(pet,ctx.user, onDelete))


    async function onDelete()   {
        let confirmed = confirm(`Are you sure you want to delete: ${pet.name}`)

        if (confirmed) {
            await petService.remove(petId)
            ctx.page.redirect('/')
        }
    }

}
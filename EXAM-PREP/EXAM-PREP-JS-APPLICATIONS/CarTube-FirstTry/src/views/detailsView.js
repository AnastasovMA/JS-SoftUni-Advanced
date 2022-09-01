import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as carService from "../service/carService.js";
import * as authService from "../service/authService.js"
//Need to implement for logged users only users only

export const detailsTemplate = (car, onDelete) => html`
        <section id="listing-details">
            <h1>Details</h1>
            <div class="details-info">
                <img src=${car.imageUrl}>
                <hr>
                <ul class="listing-props">
                    <li><span>Brand:</span>${car.brand}</li>
                    <li><span>Model:</span>${car.model}</li>
                    <li><span>Year:</span>${car.year}</li>
                    <li><span>Price:</span>${car.price}$</li>
                </ul>

                <p class="description-para">Some description of this: ${car.description}</p>

                ${car.isOwner
                    ?html`<div class="listings-buttons">
                        <a href="/cars/${car._id}/edit" class="button-list">Edit</a>
                        <a @click=${onDelete} href="javascript:void(0)" class="button-list">Delete</a>
                    </div>`
                    : nothing
                }

            </div>
        </section>
`;

export const detailsView = async (ctx) => {
    let carId = ctx.params.carId;

    const car = await carService.getOne(carId);

    if (ctx.user) {
        car.isOwner = ctx.user._id == car._ownerId;
    }

    ctx.render(detailsTemplate(car, onDelete))
    console.log(authService.getToken());

    async function onDelete() {

        const choice = confirm(`Are you sure you want to delete this car?`)
        
        if (choice) {
            await carService.remove(carId);
            ctx.page.redirect('/')
        }
    }
}
//              Old function
// export const detailsView = (ctx) => {
//     carService.getOne(ctx.params.carId)
//     .then(car => {
//         if (ctx.user) {
//             ctx.render(detailsTemplate(car, ctx.user))
            
//         }else{
//             ctx.render(detailsTemplate(car))
//         }
//     })
// }
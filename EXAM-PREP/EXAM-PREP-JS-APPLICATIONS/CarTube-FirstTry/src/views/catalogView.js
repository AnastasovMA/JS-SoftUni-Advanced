import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as carService from "../service/carService.js"

const noCars = html`
    <p class="no-cars">No cars in database.</p>
`

const carTemplate = (car) => html`
    <!-- Display all records -->
    <div class="listing">
        <div class="preview">
            <img src=${car.imageUrl}>
        </div>
        <h2>${car.brand} ${car.model}</h2>
        <div class="info">
            <div class="data-info">
                <h3>Year: ${car.year}</h3>
                <h3>Price: ${car.price}$</h3>
            </div>
            <div class="data-buttons">
                <a href="/cars/${car._id}" class="button-carDetails">Details</a>
            </div>

        </div>
    </div>
`;

export const catalogTemplate = (cars) => html`
        <!-- All Listings Page -->
        <section id="car-listings">
            <h1>Car Listings</h1>
            <div class="listings">
                ${cars.map(x => carTemplate(x))}

                ${cars.length == 0
                ? noCars
                : nothing}
        
            </div>
        </section>
`
export const catalogView = (ctx) => {
    carService.getCars()
        .then(cars => {
            // let noCarsList = []
            ctx.render(catalogTemplate(cars));
        })
}
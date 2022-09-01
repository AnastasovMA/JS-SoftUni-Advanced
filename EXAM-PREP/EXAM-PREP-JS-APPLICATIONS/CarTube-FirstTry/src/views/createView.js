import { html } from "../../node_modules/lit-html/lit-html.js";
import * as carService from "../service/carService.js"
import {carDataIsInvalid, validateNumbers} from "../utils/validators.js";


export const createTemplate = (submitHandler) => html`
        <!-- Create Listing Page -->
        <section id="create-listing">
            <div class="container">
                <form id="create-form" @submit=${submitHandler}>
                    <h1>Create Car Listing</h1>
                    <p>Please fill in this form to create an listing.</p>
                    <hr>
        
                    <p>Car Brand</p>
                    <input type="text" placeholder="Enter Car Brand" name="brand">
        
                    <p>Car Model</p>
                    <input type="text" placeholder="Enter Car Model" name="model">
        
                    <p>Description</p>
                    <input type="text" placeholder="Enter Description" name="description">
        
                    <p>Car Year</p>
                    <input type="number" placeholder="Enter Car Year" name="year">
        
                    <p>Car Image</p>
                    <input type="text" placeholder="Enter Car Image" name="imageUrl">
        
                    <p>Car Price</p>
                    <input type="number" placeholder="Enter Car Price" name="price">
        
                    <hr>
                    <input type="submit" class="registerbtn" value="Create Listing">
                </form>
            </div>
        </section>
`


export const createView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();

        const carData = Object.fromEntries(new FormData(e.currentTarget))

        if(carDataIsInvalid(carData)){
            return alert('All fields are required')
        }
        if (!validateNumbers(carData)) {
            return alert('Car year and Car price must be a positive numbers')
        }
        carService.create(carData)
        .then(() => {
            ctx.page.redirect('/catalog');
        })
        .catch(err => {
            alert(err);
        })
    }
    ctx.render(createTemplate(submitHandler));
}
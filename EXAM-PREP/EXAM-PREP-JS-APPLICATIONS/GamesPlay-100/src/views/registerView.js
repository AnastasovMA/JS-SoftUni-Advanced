import { html } from "../../node_modules/lit-html/lit-html.js";
import * as userService from "../services/userService.js"

export const registerTemplate = (submitHandler) => html`
        <!-- Register Page ( Only for Guest users ) -->
        <section id="register-page" class="content auth">
            <form id="register" @submit=${submitHandler}>
                <div class="container">
                    <div class="brand-logo"></div>
                    <h1>Register</h1>

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="maria@email.com">

                    <label for="pass">Password:</label>
                    <input type="password" name="password" id="register-password">

                    <label for="con-pass">Confirm Password:</label>
                    <input type="password" name="confirm-password" id="confirm-password">

                    <input class="btn submit" type="submit" value="Register">

                    <p class="field">
                        <span>If you already have profile click <a href="#">here</a></span>
                    </p>
                </div>
            </form>
        </section>
`
export const registerView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();

        const {email, password, ["confirm-password"]: repass} = Object.fromEntries(new FormData(e.currentTarget));

        if (email == '' || password == '' || repass == '') {
            return alert('all fields are required');
        }
        if (password != repass) {
            return alert('passwords must match');
        }

        userService.register(email, password)
        .then(user => {
            ctx.page.redirect('/')
        })
    }
    ctx.render(registerTemplate(submitHandler));
} 
import {html} from "../../node_modules/lit-html/lit-html.js";
import * as userService from "../services/userService.js"

export const loginTemplate = (submitHandler) => html`
        <!--Login Page-->
        <section id="loginaPage">
            <form class="loginForm" @submit=${submitHandler}>
                <h2>Login</h2>
                <div>
                    <label for="email">Email:</label>
                    <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
                </div>
                <div>
                    <label for="password">Password:</label>
                    <input id="password" name="password" type="password" placeholder="********" value="">
                </div>

                <button class="btn" type="submit">Login</button>

                <p class="field">
                    <span>If you don't have profile click <a href="#">here</a></span>
                </p>
            </form>
        </section>
`;
export const loginView = (ctx) => {
    const submitHandler = (e) =>{
        e.preventDefault();

        const {email, password} = Object.fromEntries(new FormData(e.currentTarget));

        if (email == '' || password == '') {
            return alert('All fields are required')
        }

        userService.login(email, password)
        .then(() => {
            ctx.page.redirect('/');
        })
        .catch(err => {
            return alert(err);
        })
    }
    ctx.render(loginTemplate(submitHandler));
}

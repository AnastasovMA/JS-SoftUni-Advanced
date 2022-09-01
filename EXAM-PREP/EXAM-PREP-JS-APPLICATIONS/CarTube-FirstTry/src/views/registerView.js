import { html } from "../../node_modules/lit-html/lit-html.js";
import * as userService from "../service/userService.js"

export const registerTemplate = (submitHandler) => html`
        <section id="register">
            <div class="container">
                <form id="register-form" @submit=${submitHandler}>
                    <h1>Register</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr>

                    <p>Username</p>
                    <input type="text" placeholder="Enter Username" name="username" required>

                    <p>Password</p>
                    <input type="password" placeholder="Enter Password" name="password" required>

                    <p>Repeat Password</p>
                    <input type="password" placeholder="Repeat Password" name="repeatPass" required>
                    <hr>

                    <input type="submit" class="registerbtn" value="Register">
                </form>
                <div class="signin">
                    <p>Already have an account?
                        <a href="/register">Sign in</a>.
                    </p>
                </div>
            </div>
        </section>
`;
export const registerView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();

        const {username, password} = Object.fromEntries(new FormData(e.currentTarget));

        userService.register(username, password)
        .then(() => {
            alert('Successful Register')
            ctx.page.redirect('/catalog');
        })
        .catch(err =>{
            alert(err);
        })
    }
    ctx.render(registerTemplate(submitHandler));
}
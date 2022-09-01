import { html } from "../../node_modules/lit-html/lit-html.js";
import * as userService from "../service/userService.js"

const loginTemplate = (submitHandler) => html`
        <section id="login">
            <div class="container">
                <form id="login-form" action="#" method="post" @submit=${submitHandler}>
                    <h1>Login</h1>
                    <p>Please enter your credentials.</p>
                    <hr>

                    <p>Username</p>
                    <input placeholder="Enter Username" name="username" type="text">

                    <p>Password</p>
                    <input type="password" placeholder="Enter Password" name="password">
                    <input type="submit" class="registerbtn" value="Login">
                </form>
                <div class="signin">
                    <p>Dont have an account?
                        <a href="#">Sign up</a>.
                    </p>
                </div>
            </div>
        </section>
`;

export const loginView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();

        const {username, password} = Object.fromEntries(new FormData(e.currentTarget));

        userService.login(username, password)
        .then(() => {
            alert('Successful Login')
            ctx.page.redirect('/catalog');
        })
        .catch(err =>{
            alert(err);
        })
    }

    ctx.render(loginTemplate(submitHandler));
}
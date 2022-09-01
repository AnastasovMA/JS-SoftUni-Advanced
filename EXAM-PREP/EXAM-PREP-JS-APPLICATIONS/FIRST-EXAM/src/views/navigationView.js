import { html } from "../../node_modules/lit-html/lit-html.js"

const privateLinks = html`
    <li><a href="/create">Create Postcard</a></li>
    <li><a href="/logout">Logout</a></li>
`;

const guestLinks = html`
        <li><a href="/login">Login</a></li>
        <li><a href="/register">Register</a></li>
`

export const navigationTemplate = (user) => html`
<nav>
    <section class="logo">
        <img src="./images/logo.png" alt="logo">
    </section>
    <ul>
        <!--Users and Guest-->
        <li><a href="/">Home</a></li>
        <li><a href="/catalog">Dashboard</a></li>
        ${user
        ? privateLinks
        : guestLinks}
    </ul>
</nav>
`

export const navigationView = (ctx) => {
    return (navigationTemplate(ctx.user));
}
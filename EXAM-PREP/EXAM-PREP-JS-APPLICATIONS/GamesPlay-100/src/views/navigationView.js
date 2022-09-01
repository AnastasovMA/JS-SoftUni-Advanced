import {html} from "../../node_modules/lit-html/lit-html.js";

const privateLinks = html`
    <!-- Logged-in users -->
    <div id="user">
        <a href="/create">Create Game</a>
        <a href="/logout">Logout</a>
    </div>
`
const guestLinks = html`
<div id="guest">
    <a href="/login">Login</a>
    <a href="/register">Register</a>
</div>
`

export const navigationTemplate = (user) => html`
            <!-- Navigation -->
            <h1><a class="home" href="/">GamesPlay</a></h1>
            <nav>
                <a href="/catalog">All games</a>
            ${user
            ?privateLinks
            :guestLinks}
            </nav>
`;
export const navigationView = (ctx) => {
    return navigationTemplate(ctx.user)
}
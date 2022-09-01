import { html } from "../../node_modules/lit-html/lit-html.js";

const userLink = (user) => html`
        <div id="profile">
            <a>Welcome ${user.username}</a>
            <a href="/myCatalog">My Listings</a>
            <a href="/create">Create Listing</a>
            <a href="/logout">Logout</a>
        </div>
`;

const guestLink = html`
        <div id="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
        </div>
`;

const navigationTemplate = (user) => html`
    <nav>
        <a class="active" href="/">Home</a>
        <a href="/catalog">All Listings</a>
        <a href="#">By Year</a>
        ${user
        ? userLink(user)
        : guestLink}
    
    </nav>
`
export const navigationView = (ctx) => {
    return navigationTemplate(ctx.user);
}
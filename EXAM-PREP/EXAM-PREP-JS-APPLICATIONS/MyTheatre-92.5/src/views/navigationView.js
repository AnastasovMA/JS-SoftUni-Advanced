import { html } from "../../node_modules/lit-html/lit-html.js";

const privateLink = html`
    <li><a href="/profile">Profile</a></li>
    <li><a href="/create">Create Event</a></li>
    <li><a href="/logout">Logout</a></li>
`
const guestLink = html`
    <li><a href="/login">Login</a></li>
    <li><a href="/register">Register</a></li>
`

export const navigationTemplate = (user) => html`
    <nav>
        <a href="/">Theater</a>
        <ul>
            ${user
            ? privateLink
            : guestLink
        }
        </ul>
    </nav>
`;

export const navigationView = (ctx) => {
    return navigationTemplate(ctx.user);
}
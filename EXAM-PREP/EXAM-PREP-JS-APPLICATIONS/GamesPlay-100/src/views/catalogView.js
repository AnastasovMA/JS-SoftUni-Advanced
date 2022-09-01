import { html } from "../../node_modules/lit-html/lit-html.js";
import * as gameService from "../services/gameService.js";

export const catalogTemplate = (games) => html`
        <!-- Catalogue -->
        <section id="catalog-page">
            <h1>All Games</h1>
            <!-- Display div: with information about every game (if any) -->
            ${games.length > 0
                ?games.map(x => gameTemplate(x))
                :html`<h3 class="no-articles">No articles yet</h3>`
            }
        </section>
`
export const gameTemplate = (game) => html`
        <div class="allGames">
            <div class="allGames-info">
                <img src=${game.imageUrl}>
                <h6>${game.category}</h6>
                <h2>${game.title}</h2>
                <a href="/games/${game._id}" class="details-button">Details</a>
            </div>
        </div>
`

export const catalogView = (ctx) => {
    gameService.getAll()
    .then(games => {
        ctx.render(catalogTemplate(games))
    })
    .catch(err => {
        return console.log(err);
        return alert(err);
    })
}
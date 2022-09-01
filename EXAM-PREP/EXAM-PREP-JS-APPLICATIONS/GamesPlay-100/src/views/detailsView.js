import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as gameService from "../services/gameService.js";
import { commentFormView } from "./commentForm.js";
import { commentsView } from "./comments.js";

const detailsTemp = (game, commentsSection, commentFormSection, deleteHandler) => html `
        <section id="game-details">
            <h1>Game Details</h1>
            <div class="info-section">

                <div class="game-header">
                    <img class="game-img" src=${game.imageUrl} />
                    <h1>${game.title}</h1>
                    <span class="levels">${game.maxLevel}</span>
                    <p class="type">${game.category}</p>
                </div>

                <p class="text">
                    ${game.summary}
                </p>

                ${commentsSection}
                 
                ${game.isOwner
                ? html`<div class="buttons">
                        <a href="/edit/${game._id}" class="button">Edit</a>
                        <a @click=${deleteHandler} href="javascript:void(0)"                     class="button">Delete</a>
                        </div>`
                : nothing}
            </div>        

            ${commentFormSection}

        </section>
`;

export async function detailsView(ctx) {
    const gameId = ctx.params.gameId;
    const [game, commentsSection] = await Promise.all([
        gameService.getOne(gameId),
        commentsView(gameId)
    ]);
    
    if (ctx.user) {
        game.isOwner = ctx.user._id == game._ownerId;
    }

    const commentFormSection = commentFormView(ctx, game.isOwner); 

    ctx.render(detailsTemp(game, commentsSection, commentFormSection, deleteHandler));

    async function deleteHandler() {
        const choice = confirm('Are you sure you want to delete this game?');

        if(choice) {
            await gameService.deleteById(gameId);
            ctx.page.redirect('/');
        }
    }
}
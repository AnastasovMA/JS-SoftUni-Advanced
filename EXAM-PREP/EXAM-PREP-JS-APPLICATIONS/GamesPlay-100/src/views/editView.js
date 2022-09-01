import { html } from "../../node_modules/lit-html/lit-html.js";
import { gameDataIsInvalid } from "../utils/utils.js";
import * as gameService from "../services/gameService.js";

export const editTemplate = (game, submitHandler) => html`
        <section id="edit-page" class="auth">
            <form id="edit" @submit=${submitHandler}>
                <div class="container">
        
                    <h1>Edit Game</h1>
                    <label for="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" value=${game.title}>
        
                    <label for="category">Category:</label>
                    <input type="text" id="category" name="category" value=${game.category}>
        
                    <label for="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" value=${game.maxLevel}>
        
                    <label for="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" value=${game.imageUrl}>
        
                    <label for="summary">Summary:</label>
                    <textarea name="summary" id="summary">${game.summary}</textarea>
                    <input class="btn submit" type="submit" value="Edit Game">
        
                </div>
            </form>
        </section>
`;

export const editView = (ctx) => {
    let gameId = ctx.params.gameId;
    const submitHandler = (e) => {
        e.preventDefault();

        const gameData = Object.fromEntries(new FormData(e.currentTarget));

        if (gameDataIsInvalid(gameData)) {
            return alert('All fields are required')
        }

        gameService.edit(gameId, gameData)
            .then(
                ctx.page.redirect(`/games/${gameId}`)
            )
            .catch(err => {
                return alert(err)
            })
    }
    gameService.getOne(gameId)
        .then(game => {
            ctx.render(editTemplate(game, submitHandler));

        })
}
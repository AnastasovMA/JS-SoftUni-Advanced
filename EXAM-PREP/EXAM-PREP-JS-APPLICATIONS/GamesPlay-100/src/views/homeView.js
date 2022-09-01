import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as gameService from "../services/gameService.js"

export const homeTemplate = (games) => html`
        <!--Home Page-->
        <section id="welcome-world">
        
            <div class="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero">
        
            <div id="home-page">
            ${catalogGameTemplate(games)}

            </div>
        </section>
`;

const catalogGameTemplate = (games) => html`
    <h1>Latest Games</h1>
    
    <!-- Display div: with information about every game (if any) -->
    ${games.map(x => gameTemplate(x))}
    
    ${games.length == 0
    ?html`<p class="no-articles">No games yet</p>`
    :nothing}
`

const gameTemplate = (game) => html`
    <div class="game">
        <div class="image-wrap">
            <img src=${game.imageUrl}>
        </div>
        <h3>${game.title}</h3>
        <div class="rating">
            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
        </div>
        <div class="data-buttons">
            <a href="/games/${game._id}" class="btn details-btn">Details</a>
        </div>
    </div>
`


export const homeView = (ctx) => {
    gameService.getLastThree()
    .then(games => {
        // for (const game of games) {
        //     console.log(game._id);
        // }
        ctx.render(homeTemplate(games));
    })
    .catch(err => {
        console.log(err);
        // return alert(err)
    })

}
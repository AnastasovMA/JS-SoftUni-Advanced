import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as commentsService from "../services/commentsService.js";
import { createSubmitHandler } from "../utils/utils.js";

const formTemp = (submitHandler) => html `
            <article class="create-comment">
                <label>Add new comment:</label>
                <form @submit=${submitHandler} class="form">
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input class="btn submit" type="submit" value="Add Comment">
                </form>
            </article>
`;

export function commentFormView(ctx, isOwner) {
    if (ctx.user && !isOwner) {
        return formTemp(createSubmitHandler(ctx, submitHandler));
    } else {
        return nothing;
    }
}

async function submitHandler(ctx, data, event) {
    const gameId = ctx.params.gameId;

    await commentsService.postComment({
        gameId,
        comment: data.comment
    });

    event.target.reset();
    ctx.page.redirect(`/games/${gameId}`);
}
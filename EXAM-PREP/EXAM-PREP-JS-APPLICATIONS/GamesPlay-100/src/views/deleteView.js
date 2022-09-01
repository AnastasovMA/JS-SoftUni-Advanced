import * as gameService from "../services/gameService.js"


export const deleteView = async (ctx) => {
    let gameId = ctx.params.gameId
    try {
        const game = await gameService.getOne(gameId)

        let confirmed = confirm(`Are you sure you want to delete: ${game.title}`)

        if (confirmed) {
            await gameService.remove(gameId)
            ctx.page.redirect('/')
        }
    } catch (error) {
        return alert(error);
    }

}
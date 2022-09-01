import * as albumService from "../services/albumService.js"


export const deleteView = async (ctx) => {
    let albumId = ctx.params.albumId
    try {
        const album = await albumService.getOne(albumId)

        let confirmed = confirm(`Are you sure you want to delete: ${album.name}`)

        if (confirmed) {
            await albumService.remove(albumId)
            ctx.page.redirect('/catalog')
        }
    } catch (error) {
        return alert(error);
    }

}
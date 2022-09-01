import { html, nothing } from "../../node_modules/lit-html/lit-html.js"
import * as albumService from "../services/albumService.js"


export const detailTemplate = (album, onDelete) => html`
        <section id="detailsPage">
            <div class="wrapper">
                <div class="albumCover">
                    <img src=${album.imgUrl}>
                </div>
                <div class="albumInfo">
                    <div class="albumText">

                        <h1>Name: ${album.name}</h1>
                        <h3>Artist: ${album.artist}</h3>
                        <h4>Genre: ${album.genre}</h4>
                        <h4>Price: ${album.price}</h4>
                        <h4>Date: ${album.releaseDate}</h4>
                        <p>${album.description}</p>
                    </div>

                    <!-- Only for registered user and creator of the album-->
                    ${album.isOwner
                    ?html`                    
                    <div class="actionBtn">
                        <a href="/albums/${album._id}/edit" class="edit">Edit</a>
                        <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>
                    </div>`
                    :nothing}

                </div>
            </div>
        </section>
`
export const detailsView = async (ctx) => {
    let albumId = ctx.params.albumId;
    let album = await albumService.getOne(albumId)

    album.isOwner = ctx.user._id == album._ownerId
    ctx.render(detailTemplate(album, onDelete))

    async function onDelete(){
        await albumService.remove(albumId);
        ctx.page.redirect('/catalog')
    }
}
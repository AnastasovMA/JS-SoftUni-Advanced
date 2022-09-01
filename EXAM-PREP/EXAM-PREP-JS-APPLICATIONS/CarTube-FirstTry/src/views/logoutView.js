import * as userService from "../service/userService.js"

export const logoutView = (ctx) => {
    userService.logout()
    .then(() => {
        ctx.page.redirect('/');
        alert('Successful Logout')
    })
}
import * as userService from "../services/userService.js"

export const logoutView = (ctx) => {
    userService.logout()
    .then(() => {
        alert('Successful Logout');
        ctx.page.redirect('/')
    })
}
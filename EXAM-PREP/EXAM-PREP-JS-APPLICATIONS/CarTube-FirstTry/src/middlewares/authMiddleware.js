import * as authService from "../service/authService.js"

export const authMiddleware = (ctx, next) =>{
    ctx.user = authService.getUser();

    next();
}
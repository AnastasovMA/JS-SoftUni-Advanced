import page from "../node_modules/page/page.mjs";
import { authMiddleware } from "./middlewares/authMiddelware.js";
import { renderContentMiddleware, renderNavigationMiddleware } from "./middlewares/navigationMiddleware.js";
import { catalogView } from "./views/catalogView.js";
import { createView } from "./views/createView.js";
import { deleteView } from "./views/deleteView.js";
import { detailsView } from "./views/detailsView.js";
import { editView } from "./views/editView.js";
import { homeView } from "./views/homeView.js";
import { loginView } from "./views/loginView.js";
import { logoutView } from "./views/logoutView.js";
import { registerView } from "./views/registerView.js";

// import * as gameService from "./services/gameService";
// window.getAll = gameService.getAll();

page(authMiddleware)
page(renderNavigationMiddleware);
page(renderContentMiddleware)

page('/', homeView)
page('/login', loginView)
page('/register', registerView)
page('/logout', logoutView);
page('/catalog', catalogView)
page('/create', createView);
page('/games/:gameId', detailsView);
page('/games/:gameId/edit', editView);
// page('/games/:gameId/delete', deleteView);

page.start();
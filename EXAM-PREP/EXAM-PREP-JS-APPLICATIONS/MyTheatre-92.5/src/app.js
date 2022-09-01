import page from "../node_modules/page/page.mjs";
import { authMiddleware } from "./middlewares/authMiddleware.js";
import { navigationMiddleware, renderContentMiddleware } from "./middlewares/navigationMiddleware.js";
import { createView } from "./views/createView.js";
import { detailsView } from "./views/detailsView.js";
import { deleteView } from "./views/deteleView.js";
import { editView } from "./views/editView.js";
import { homeView } from "./views/homeView.js";
import { loginView } from "./views/loginView.js";
import { logoutView } from "./views/logoutView.js";
import { profileView } from "./views/profileView.js";
import { registerView } from "./views/registerView.js";

page(authMiddleware)
page(navigationMiddleware);
page(renderContentMiddleware);

page('/', homeView)
page('/login', loginView)
page('/register', registerView)
page('/logout', logoutView)
page('/create', createView);
page('/profile', profileView)
page('/events/:eventId', detailsView);
page('/events/:eventId/edit', editView)
page('/events/:eventId/delete', deleteView);

page.start();
import page from "../node_modules/page/page.mjs"
import { authMiddleware } from "./middlewares/authMiddleware.js";
import { renderContent, renderNavigation } from "./middlewares/navigationMiddleware.js";
import { catalogView } from "./views/catalogView.js";
import { createView } from "./views/createView.js";
import { detailsView } from "./views/detailsView.js";
import { editView } from "./views/editView.js";
import { homeView } from "./views/homeView.js";
import { loginView } from "./views/loginView.js";
import { logoutView } from "./views/logoutView.js";
import { registerView } from "./views/registerView.js";

page(authMiddleware)
page(renderNavigation);
page(renderContent)

page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutView);
page('/catalog', catalogView)
page('/create', createView);
page('/pets/:petId', detailsView);
page('/pets/:petId/edit', editView);

page.start();
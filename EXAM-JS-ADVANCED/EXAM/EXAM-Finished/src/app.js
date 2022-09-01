import page from '../node_modules/page/page.mjs'
import { authMiddleware } from './middlewares/authMiddleware.js';
import { renderNavgation, renderContentMiddleware } from './middlewares/navigationMiddleware.js';
import { createView } from './views/createView.js';
import { dashboardView } from './views/dashboardView.js';
import { detailsView } from './views/detailsView.js';
import { homeView } from './views/homeView.js';
import { loginView } from './views/loginView.js';
import { logoutView } from './views/logoutView.js';
import { registerView } from './views/registerView.js';

page(authMiddleware)
page(renderNavgation)
page(renderContentMiddleware);

page('/', homeView)
page('/login', loginView)
page('/register', registerView)
page('/logout', logoutView)
page('/catalog', dashboardView)
page('/create', createView)
page('/pets/:petsId', detailsView)

page.start();
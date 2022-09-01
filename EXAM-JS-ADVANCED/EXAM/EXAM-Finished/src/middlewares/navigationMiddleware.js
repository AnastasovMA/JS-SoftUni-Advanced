import { render } from '../../node_modules/lit-html/lit-html.js';
import { navgationView } from '../views/navigationView.js';

const headerElement = document.querySelector('.header-navigation');
const contentElement = document.querySelector('#content');

const renderContent = (templateResult) => {
    render(templateResult, contentElement)
}

export const renderNavgation = (ctx, next) => {
    render(navgationView(ctx), headerElement);

    next();
}
export const renderContentMiddleware = (ctx, next) => {
    ctx.render = renderContent;
    next();
}
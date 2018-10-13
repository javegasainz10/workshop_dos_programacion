import crossroads from 'crossroads'
import homeController from './controllers/homeController'
import charactersController from './controllers/charactersController'
import favoritesController from './controllers/favoritesController'
import contactController from './controllers/contactController'


function router () {
    crossroads.addRoute('/', function () {
        $('#root').load('./partials/home.html', homeController);
    });

    crossroads.addRoute('#/characters', function () {
        $('#root').load('./partials/characters.html', charactersController);
    });

    crossroads.addRoute('#/favorites', function () {
        $('#root').load('./partials/favorites.html', favoritesController);
    });

    crossroads.addRoute('#/contact', function () {
        $('#root').load('./partials/contact.html', contactController);
    });

    $(window).on('hashchange', function () {
        crossroads.parse(window.location.hash)
    });
    
    crossroads.parse(window.location.hash);
}

export default router
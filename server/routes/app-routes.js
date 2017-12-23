const appController = require('../controllers/app-controller');

module.exports = app => {
    app.get('*', appController.serveReactApp);
};

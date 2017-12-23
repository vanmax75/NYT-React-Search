const apiController = require('../controllers/api-controller');

module.exports = app => {
    app.get('/api', apiController.handleSuccessful);
};

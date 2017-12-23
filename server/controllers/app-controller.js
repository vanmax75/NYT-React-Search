const path = require('path');

exports.serveReactApp = (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../app/build', 'index.html'));
};

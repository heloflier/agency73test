const proxy = require('http-proxy-middleware')
 
module.exports = function(app) {
    app.use(proxy(['/api/sites'], { target: 'http://localhost:5000' }));
}
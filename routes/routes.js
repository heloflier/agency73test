const fs = require('fs');
const path = require('path');

module.exports = (app, fileLocation) => {

    app.get(
        '/api/sites/:site', (req, res) => {
            console.log('request: -----------------', req.params)
            let file = path.join(fileLocation, req.params.site + '.txt');
            console.log(file)
            fs.readFile(file, (err, data) => {
                if (err) throw err;
                console.log(data);
                res.send(data)
            });
        }
    );
}
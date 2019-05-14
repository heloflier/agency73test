const fs = require('fs');
const path = require('path');
const axios = require('axios');

module.exports = (app, fileLocation) => {
    
    app.post("/api/sites", function (req, res) {
        axios.get(req.body.url)
            .then(function (response) {
                let fileDestination = path.join(fileLocation, `${req.body.name}.html`);
                fs.writeFile(fileDestination, response.data, (err) => {
                    if (err) throw err;
                });
                res.send(200)
            })
            .catch(function (error) {
                console.log(error);
                res.send(500)
            });
    });
}
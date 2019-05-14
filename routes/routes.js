const fs = require('fs');
const path = require('path');

module.exports = (app, fileLocation) => {
    // app.get(
    //     '/', (req, res) => {
    //             res.send('loading...')
    //     }
    // );

    app.get(
        '/api/sites/:site', (req, res) => {
            let file = path.join(fileLocation, req.params.site + '.html');
            console.log('site --------------------', file)
            fs.readFile(file, (err, data) => {
                if (err) {
                    if (err.code === 'ENOENT') {
                        console.error('file does not exist or path is incorrect');
                        throw err;
                    }
                };
                res.send(data)
            })
        }
    );

    app.get(
        '/api/sites/', (req, res) => {
            console.log('sites *********************************')
            const tempSites = [];

            fs.readdirSync(fileLocation).forEach(file => {
                tempSites.push(file);
            });

            // loop over sites in the file directory, read each one.
            // As we are building an array of objects to be sent back 
            // to the requestor, the operation has to be synchronous. 
            const results = tempSites.map(file => {
                let data = fs.readFileSync(path.join(fileLocation, file))
                return { name: file.replace('.html', ''), data }
            });
            res.send(results)
        });

    
}
const fs = require('fs');
const path = require('path');
const axios = require('axios');

const requestedSites = [
    "https://rockandice.com/",
    "https://developer.mozilla.org/en-US",
    "https://www.youtube.com/watch?v=ywWBy6J5gz8",
    "https://caniuse.com/",
    "https://github.com/Giphy/GiphyAPI",
    "https://www.ted.com/#",
    "https://www.vitalclimbinggym.com",
    "https://www.matteolanecomedy.com",
    "https://www.lastampa.it",
    "https://www.facebook.com"
];

requestedSites.forEach((site, index) => {
    axios.get(site)
        .then(function (response) {
            let fileDestination = path.join(__dirname, 'files', `${index.toString()}.txt`);
            fs.writeFile(fileDestination, response.data, (err) => {
                if (err) throw err;
                console.log('The file has been saved!', index);
            });
        })
        .catch(function (error) {
            console.log(error);
        });
});
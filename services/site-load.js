const path = require('path');
const fs = require('fs');
const axios = require('axios');

module.exports = (location) => {
    const requestedSites = [
        { name: "rock-and-ice", url: "https://rockandice.com/" },
        { name: "mozilla", url: "https://developer.mozilla.org/en-US" },
        { name: "youtube", url: "https://www.youtube.com/watch?v=ywWBy6J5gz8" },
        { name: "caniuse", url: "https://caniuse.com/" },
        { name: "Giphy", url: "https://github.com/Giphy/GiphyAPI" },
        { name: "ted", url: "https://www.ted.com/#" },
        { name: "vitalclimbinggym", url: "https://www.vitalclimbinggym.com" },
        { name: "matteolanecomedy", url: "https://www.matteolanecomedy.com" },
        { name: "lastampa", url:  "https://www.lastampa.it" },
        { name: "facebook", url: "https://www.facebook.com" }    
    ];
    
    requestedSites.forEach((site, index) => {
        axios.get(site.url)
        .then(function (response) {
            // console.log('dirname: ', location)
            let fileDestination = path.join(location, 'files', `${site.name}.txt`);
            fs.writeFile(fileDestination, response.data, (err) => {
                if (err) throw err;
                // console.log('The file has been saved!', site.name);
            });
        })
        .catch(function (error) {
            console.log(error);
        });
    });
};
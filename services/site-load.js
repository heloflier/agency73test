const path = require('path');
const fs = require('fs');
const axios = require('axios');

const storeSite = require('./store-site');

module.exports = (location) => {
    // console.log('loading sites at location ------------- ', location)

    const defaultSites = [
        { name: "rockandice", url: "https://rockandice.com/" },
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
    
    ((sites = defaultSites) => {

        sites.forEach((site) => {
            storeSite(location, site);
        });
    })();
};
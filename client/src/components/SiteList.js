import React, { Component } from 'react';
import Axios from 'axios';

class SiteList extends Component {
    state = {
        sites: [
            { name: "rockandice", url: "https://rockandice.com/" },
            { name: "mozilla", url: "https://developer.mozilla.org/en-US" },
            { name: "youtube", url: "https://www.youtube.com/watch?v=ywWBy6J5gz8" },
            { name: "caniuse", url: "https://caniuse.com/" },
            { name: "Giphy", url: "https://github.com/Giphy/GiphyAPI" },
            { name: "ted", url: "https://www.ted.com/#" },
            { name: "vitalclimbinggym", url: "https://www.vitalclimbinggym.com" },
            { name: "matteolanecomedy", url: "https://www.matteolanecomedy.com" },
            { name: "lastampa", url: "https://www.lastampa.it" },
            { name: "facebook", url: "https://www.facebook.com" }
        ]
    }

    onUrlChange = index => e => {
        console.log('on url change')
        const newSites = this.state.sites.map((site, idx) => {
            if (index !== idx) return site;
            return { ...site, url: e.target.value }
        })
        this.setState({ sites: newSites })
    }

    onTitleChange = index => e => {
        const newSites = this.state.sites.map((site, idx) => {
            if (index !== idx) return site;
            return { ...site, name: e.target.value }
        })
        this.setState({ sites: newSites })
    }

    fetchSites = () => {
        console.log(this.state)
        this.state.sites.forEach((site, index) => {
            console.log('site: ', site)
            
            Axios.post('/api/sites', site)
            .then(() => {
                this.setState(() => (site.name = ""));
                this.setState(() => (site.url = ""));
            })
            .catch(error => {
                this.setState(() => (site.url = "could not retrieve site"));
                console.log(error);
            });
        })
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.fetchSites();
    }

    renderList() {
        return this.state.sites.map((site, index) => {
            return (
                <div className="item" key={index}>
                    <div className="content">
                        <div className="description">
                            <h3>
                                <input
                                    type='text'
                                    value={site.name}
                                    onChange={this.onTitleChange(index)}
                                />
                            </h3>
                            <input
                                type='text'
                                value={site.url}
                                onChange={this.onUrlChange(index)}
                            />
                        </div>
                    </div>
                </div >
            );
        });
    }

    render() {
        return (
            <div>
                <div className="right floated content">
                    <button
                        className="ui button primary"
                        onClick={(e) => { this.onFormSubmit(e) }}
                    >
                        Scrape all sites now!
                    </button>
                </div>
                <div className="ui relaxed divided list">
                    {this.renderList()}
                </div>
            </div>
        );
    }
};

export default SiteList;
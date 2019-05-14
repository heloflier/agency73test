Please see below for the sample tests to complete and then send to Patrick at patrick@agency73.com

# Agency73 Coding Test

### Node.js

#### 1. Create a new repo and push to any public service using git

In the master branch:

* Initialize a new node.js application
* Create an application with no UI, that pulls the HTML of the homepage of any 10 websites and saves them to separate files locally.
* The files should be in a subfolder in the root of the project 
* The application should be runnable via a custom npm command

#### 2. Create a new branch

Add to the existing application and make the application into a REST service
The service should be able to run locally and tested via some tool like cURL

#### 3. React

* Create a new branch
* Create a React application as an interface to specify which 10 websites the user wants to scrape the HTML from.
* This should be runnable locally via a web browser, and should consume the REST service previously created.

---

## Solutions:

1. 
On the master branch, 10 preselected sites are being scraped. The html is returned in html files inside a 'files' subdirectory. Note: the data has not been manipulated in any way, as it was not required.

To run, type: 

```npm run extract```

2. 
on the 'rest' branch, install package. When testing, the server can be run by typing:

```npm run server```

which will restart the server after any change to the code.
Otherwise, run as previously.

Then, on the browser, type ```http://localhost:3000/api/sites/```.
This will store ALL the preselected sites. 

To store just one site, make a POST request with an object like this:
```{ 
        name: "<your selected name>",
        url: "<your selected website\'s complete url">
   }```


3.
on the 'react' branch, install package. When testing, both the client and the server can be run concurrently by typing:

```npm run dev```

When the browser opens, a pre-populated list of sites are ready to be scraped and stored on the local server's environment.
Input the name of the website and the complete url, inclusive of http(s)://www. etc.
The names and descriptions will disappear when they are successfully stored; otherwise, an error message will appear (it may take a while for the request to be returned as an error).
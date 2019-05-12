Please see below for the sample tests to complete and then send to Patrick at patrick@agency73.com

# Agency73 Coding Test

### Node.js

###### 1. Create a new repo and push to any public service using git

In the master branch:

* Initialize a new node.js application
* Create an application with no UI, that pulls the HTML of the homepage of any 10 websites and saves them to separate files locally.
* The files should be in a subfolder in the root of the project 
* The application should be runnable via a custom npm command

###### 2. Create a new branch

Add to the existing application and make the application into a REST service
The service should be able to run locally and tested via some tool like cURL

### 3. React

* Create a new branch
* Create a React application as an interface to specify which 10 websites the user wants to scrape the HTML from.
* This should be runnable locally via a web browser, and should consume the REST service previously created.

---

## Solutions:

1. 
On the master branch, 10 preselected sites are being scraped. The html is returned in text files inside a 'files' subdirectory. Note: the data has not been manipulated in any way, as it was not required.

To run, type: 

```npm run extract```

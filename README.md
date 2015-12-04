# node-http-file-server
In this exercise, you'll use the `fs` module and the `http` module to create an HTTP file server.

## Setup
- Fork and clone this repository. A skeleton server has been defined for you in [`server.js`](server.js) and should serve as the basis for your application. 
- Start your server with the command `node server.js`.

## Instructions
- Open a browser to [localhost:8000](http://localhost:8000/).
- You should see the greeting, "Hello, World!"
- Add code inside of `handleRequest` that will display the phrase "I can change the response".
- Open a browser to [localhost:8000](http://localhost:8000/) and view the updated text.
- Add a file named `index.html` to your repository.
- Add inside of `index.html` the text "I'm a response inside of a file!"
- Write the code that will serve `index.html` when visiting `http://localhost:8000/index.html`.
- Repeat what you did with `index.html` and create another file, `about.html`.

## Bonus
- Add links between the pages.
- When visiting `http://localhost:1337`, serve an HTML page with links to all pages. 
- Add CSS to all pages.
- Create a `404 Not Found` page for any route that's not `/`, `/index.html`, or `/about.html`. You could use an appropriate image from [cat status codes](https://http.cat/).
- Refactor your code to find a general way to handle requests for all files in this directory. Checkout the property [`req.url`].
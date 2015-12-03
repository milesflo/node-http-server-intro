# node-http-file-server
In this exercise, you'll use the `fs` module and the `http` module to create an HTTP file server.

## Setup
- Fork and clone this repository. A skeleton server has been defined for you in [`server.js`](server.js) and should serve as the basis for your application. 
- Start your server with the command `node server.js`.

## Instructions
- Navigate in a browser to `localhost:1337`.
- Since there is no code in the `handleRequest` function, nothing happens!
- Add code inside of `handleRequest` that will display the words "I just sent a response". Read about the method [`res.write`](https://nodejs.org/api/http.html#http_response_write_chunk_encoding_callback) and [`res.end`](https://nodejs.org/api/http.html#http_response_end_data_encoding_callback)
- Add a file named `index.html` to your repository.
- Add some text inside of `index.html`.
- Write the code that will serve `index.html` when visiting `http://localhost:1337/index.html`.
- Repeat what you did with `index.html` and create another file, `about.html`. Again, make it fun, the content does not matter.
- Figure out how to get `server.js` to server `about.html` in addition to `index.html`.
- Use what you've done with `index.html` and `about.html` to figure out a general way to handle requests for files in this directory. Checkout the properties [`req.url`](https://nodejs.org/api/http.html#http_message_url) and [`fs.readFile`](https://nodejs.org/api/fs.html#fs_fs_readfile_filename_options_callback)

## Bonus
- Add links between the pages you have added locally.
- Add CSS to this project.
- Output the [query string](http://en.wikipedia.org/wiki/Query_string) of a URL on the reponse page.
- Create a `404 Not Found` page when a file isn't found. response. As an example, view [Github's 404 page](https://github.com/asdhasdasd). With this new inspiration, add this functionality to your server. Any arbitrary request to a non-existant resource return could return something like these [404 cat pictures](https://www.flickr.com/photos/girliemac/6508022985).

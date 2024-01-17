const http = require("http");

const behaviour = (req, res) => {
    //handle the following requests
    // GET /books
    // PUT /books
    // DELETE /books
    //GET /books/author/
    // POST /books/author/
    // PUT /books/author/

    //Post request
    //Books
    console.log(req.method); // GET, POST, PUT, DELETE
    console.log(req.url);

    if (req.method === "POST" && req.url === "/books"){
        res.write("Hello from POST /books");
    } else if (req.method === "GET" && req.url === "/books"){
        res.write("Hello from GET /books");
    } else if (req.method === "PUT" && req.url === "/books"){
        res.write("Hello from PUT /books");
    } else if (req.method === "DELETE" && req.url === "/books"){
        res.write("Hello from DELETE /books");
    } else if (req.method === "GET" && req.url === "/books/author/"){
        res.write("Hello from GET /books/author/");
    } else if (req.method === "POST" && req.url === "/books/author/"){
        res.write("Hello from POST /books/author/");
    } else if (req.method === "PUT" && req.url === "/books/author/"){
        res.write("Hello from PUT /books/author/");
    } else {
        res.write("Hello from page " + req.url);
    }
    res.end();
};

const server = http.createServer(behaviour);

server.listen(8900, () =>{
    console.log("Server is running on port 8900");
});
const http = require("http");

const studentName = (req, res) => {
    res.write("My name is Aderonke Adebisi");
    res.end();
};

const server = http.createServer(studentName);

server.listen(8900, () =>{
    console.log("Server is running on port 8900");
});
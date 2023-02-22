const http = require('http')
const server = http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"})
    res.end('<h1>Better use Express, no!?</h1>')
})

const port = 3456
server.listen(port, function() {
    console.log(`Executing at ${port}`)
})
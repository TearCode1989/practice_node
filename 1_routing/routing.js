const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    const path = url.parse(req.url, true).pathname;
    res.setHeader("Content-Type", "text/html; charset=utf-8;");

    if(path === '/user') {
        res.end("[user] name: andy, age: 30");
    } else if(path === '/feed') {
        res.end(
            `
                <ul>
                    <li>picture1</li>
                    <li>picture2</li>
                    <li>picture3</li>
                    <li>picture4</li>
                </ul>
            `
        );
    } else {
        res.statusCode = 404;
        res.end("404 페이지 발생")
    }
}).listen("8090", () => console.log('라우터 만들기'));
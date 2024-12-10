const http = require("http");
const url = require("url");

http.createServer(function (req, res) {
    const path  = url.parse(req.url, true).pathname;
    res.setHeader("Content-Type", "text/html; charset=utf-8;");

    if (path in urlMap) {
        urlMap[path](req, res);
    } else {
        notFound(req, res);
    }
}).listen("9091", () => console.log('다이나믹 라우팅 리팩토링'));

const user = (req, res) => {
    const userInfo = url.parse(req.url, true).query;
    res.end(`[user] name: ${userInfo.name}, age: ${userInfo.age}`);
}

const feed = (req, res) => {
    res.end(
        `
            <ul>
                <li>picture1</li>
                <li>picture2</li>
                <li>picture3</li>
            </ul>
        `
    );
}

const notFound = (req, res) => {
    res.statusCode = 404;
    res.end("404 page not found");
}

const urlMap = {
    "/": (req, res) => res.end("HOME 입니다"),
    "/user": user,
    "/feed": feed,
}
const http = require("http");

let count = 0;

const server = http.createServer((req, res) => {
    console.log((count += 1));
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.write("너는 \n");
    setInterval(() => {
        res.end("결국 해냈다");
    }, 1000);
});

server.listen(8000, () => console.log("✨✨서버 시작!!!✨✨"));
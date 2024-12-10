const http = require("http");

let count = 0;

const server = http.createServer((req, res) => {
    console.log((count += 1));
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.write("너는 \n");

    // setInterval을 사용하여 데이터를 주기적으로 전송
    const intervalId = setInterval(() => {
        res.write("결국 해냈다\n");
    }, 1000);

    // 클라이언트가 연결을 끊으면 interval 정리
    req.on('close', () => {
        clearInterval(intervalId);
        console.log("클라이언트 연결 종료");
    });
});

server.listen(8000, () => console.log("✨✨서버 시작!!!✨✨"));

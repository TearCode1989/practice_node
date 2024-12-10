const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(`
        <!DOCTYPE html>
        <html lang="ko">
        <head>
            <meta charset="UTF-8">
            <title>깜빡이는 버튼</title>
        </head>
        <body>
            <button id="btn1" onclick="disappearButton()">사라지는 버튼</button>
            <script>
                function disappearButton() {
                    document.getElementById("btn1").style.display = "none";
                }
            </script>
        </body>
        </html>
    `);
});

server.listen(3000, () => console.log('✨✨서버 시작~!!✨✨'));

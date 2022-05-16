const http = require('http');

http.createServer(function(req, res){
    res.end(`pm2 cluster end => ${process.pid}`)
}).listen(3009) // 子进程监听父进程的server，实现监听同一个端口
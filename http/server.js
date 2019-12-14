let http = require("http");
let url = require("url");
let queryString = require("querystring");
let job = require('./sysJob');
let getPost=require('./getPost');

let server = http.createServer(function (req, res) {
    let param = url.parse(req.url);
    if (param.pathname === '/favicon.ico') {
        return;
    }
    console.log(req.url);
    if (req.method === "POST") {
        postRequest(req, res);
    } else if (req.method === "GET") {
        getRequest(req, res);
    }
    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: Content-Type
});

server.listen(5700, function () {
    console.log("staring ok");
});

function getResult(data, res, parameter) {
    let type = parameter.type;
    //解决跨越的问题
    //response.writeHead(200,{"Content-Type":'text/plain','charset':'utf-8','Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'PUT,POST,GET,DELETE,OPTIONS'});//可以解决跨域的请求
    if (type === 'text') {
        res.writeHead(200, {'Content-Type': 'text/plain;charset=UTF-8'});
        res.end(JSON.stringify(data));
    } else if (type === 'html') {
        let html = '<h1>' + JSON.stringify(data) + '</h6>';
        res.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8'});
        res.end(html);
    } else if (type === 'json') {
        res.writeHead(200, {'Content-Type': 'application/json;charset=UTF-8'});
        res.end(JSON.stringify(data));
    } else {
        res.writeHead(200, {'Content-Type': 'text/plain;charset=UTF-8'});
        res.end(JSON.stringify(data));
    }
}

function getRequest(req, res) {
    console.log("get request");
    let param = url.parse(req.url);
    let path = param.pathname;
    console.log('path', path);
    let parameter = queryString.parse(param.query);
    console.log('parameter', parameter);
   /* job.list(function (data) {
        console.log('result:', data);
        //返回结果
        getResult(data, res, parameter);
    });*/
    getPost.postRequest( (data)=> {
        console.log(typeof data);
       // console.log('result:', data);
        //返回结果
        getResult(data, res, parameter);
    });

}

function postRequest(req, res) {
    console.log("post request");
    let param = url.parse(req.url);
    let path = param.pathname;
    console.log('path', path);
    let body = "";
    req.on("data", function (data) {
        body += data;
    });
    req.on("end", function () {
        let parameter = queryString.parse(body);
        console.log('parameter:', parameter);
       /* job.list((data) => {
            console.log('result:', data);
            //返回结果
            getResult(data, res, parameter);
        })*/
        getPost.postRequest( (data)=> {
            console.log(typeof data);
            // console.log('result:', data);
            //返回结果
            getResult(data, res, parameter);
        });
    });
}


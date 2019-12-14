let http = require('http');
let url = require('url');
let querystring = require('querystring');


function getResult() {
    getRequest(function (data) {
        console.log(data)
    })
}

function get(callback) {
    let url = 'http://192.168.1.11:10080/basic-data-api/rest-api/v2/memo/queryRemindListByUserId';
    let options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            cookie: 'JSESSIONID=251FD9DFDE3DFEC791A10B49B0DEAEEE; _segiupt_ts=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJleHBpcmVzX2luIjoyNDE5MjAwLCJpYXQiOjE1NzYxMzI0NzMsInNhbHQiOiJjYXUpREcrSV8vbzhlL1E5IiwidHlwZSI6InNlc3Npb25fdG9rZW4iLCJ1c2VybmFtZSI6IlNFR0lfQl8xMzU1NTU1NTU1NSJ9.our5GzogR3Xz_jTD5gJMpCgLIlv9OA0ZN4IzAHKLOSZiHOfjkfUFiC2BpcWYwyxfbR3SA7gGOChvxcmhSfNITg; _segiupt_ci=segi; _segiupt_ty=SEGI_B_; aid=110033638; _segiupt_as=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJjbGllbnRfaWQiOiJzZWdpIiwiZXhwaXJlc19pbiI6NzIwMCwiaWF0IjoxNTc2MTM5Njg1LCJzYWx0Ijoid0I_ND5udCRGVEViLmF1dyIsInNjb3BlIjoic19hZG1pbiIsInR5cGUiOiJhY2Nlc3NfdG9rZW4iLCJ1c2VyX2lkIjoiU0VHSV9CXzExMDAzMzYzOCIsInVzZXJuYW1lIjoiU0VHSV9CXzEzNTU1NTU1NTU1In0.RjJHDs6O1nymFLUhYZp0s6wNzrNn3RQKnU2GoNbFp0LFFtUPtMeuixW_M1BIKNfmVMP1BASpNtY8KrM5sOuH1Q; cid=0; oid=5141'
        }
    };
    http.get(url, options, function (response) {
        console.log(`状态码: ${response.statusCode}`);
        console.log(`响应头: ${JSON.stringify(response.headers)}`);
        response.setEncoding('utf8');
        // 对响应进行处理
        response.on('data', (data) => {
            callback(JSON.parse(data));
        });
        response.on('end', () => {
            console.log('响应中已无数据。');
        });
    });
}

function getRequest(callback) {
    let url = 'http://192.168.1.11:10080/basic-data-api/rest-api/v2/memo/queryRemindListByUserId';
    let options = {
        method: 'GET',
        headers: {
            cookie: 'JSESSIONID=251FD9DFDE3DFEC791A10B49B0DEAEEE; _segiupt_ts=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJleHBpcmVzX2luIjoyNDE5MjAwLCJpYXQiOjE1NzYxMzI0NzMsInNhbHQiOiJjYXUpREcrSV8vbzhlL1E5IiwidHlwZSI6InNlc3Npb25fdG9rZW4iLCJ1c2VybmFtZSI6IlNFR0lfQl8xMzU1NTU1NTU1NSJ9.our5GzogR3Xz_jTD5gJMpCgLIlv9OA0ZN4IzAHKLOSZiHOfjkfUFiC2BpcWYwyxfbR3SA7gGOChvxcmhSfNITg; _segiupt_ci=segi; _segiupt_ty=SEGI_B_; aid=110033638; _segiupt_as=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJjbGllbnRfaWQiOiJzZWdpIiwiZXhwaXJlc19pbiI6NzIwMCwiaWF0IjoxNTc2MTM5Njg1LCJzYWx0Ijoid0I_ND5udCRGVEViLmF1dyIsInNjb3BlIjoic19hZG1pbiIsInR5cGUiOiJhY2Nlc3NfdG9rZW4iLCJ1c2VyX2lkIjoiU0VHSV9CXzExMDAzMzYzOCIsInVzZXJuYW1lIjoiU0VHSV9CXzEzNTU1NTU1NTU1In0.RjJHDs6O1nymFLUhYZp0s6wNzrNn3RQKnU2GoNbFp0LFFtUPtMeuixW_M1BIKNfmVMP1BASpNtY8KrM5sOuH1Q; cid=0; oid=5141'
        }
    };
    let req = http.request(url, options, function (response) {
        console.log(`状态码: ${response.statusCode}`);
        console.log(`响应头: ${JSON.stringify(response.headers)}`);
        response.setEncoding('utf8');
        // 对响应进行处理
        response.on('data', (data) => {
            callback(JSON.parse(data));
        });
        response.on('end', () => {
            console.log('响应中已无数据。');
        });
    });
    req.on('error', (e) => {
        console.error(`请求遇到问题: ${e.message}`);
    });
    //写入数据到请求主体
    req.end();
}

function postRequest(callback) {
    let url = 'http://192.168.1.11:10080/basic-data-api/rest-api/v2/memo/queryRemindListByPage';
    let postData = {
        "content": "815测试",
        "pageNo": 2,
        "pageLength": 3
    };
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "cookie": 'JSESSIONID=251FD9DFDE3DFEC791A10B49B0DEAEEE; _segiupt_ts=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJleHBpcmVzX2luIjoyNDE5MjAwLCJpYXQiOjE1NzYxMzI0NzMsInNhbHQiOiJjYXUpREcrSV8vbzhlL1E5IiwidHlwZSI6InNlc3Npb25fdG9rZW4iLCJ1c2VybmFtZSI6IlNFR0lfQl8xMzU1NTU1NTU1NSJ9.our5GzogR3Xz_jTD5gJMpCgLIlv9OA0ZN4IzAHKLOSZiHOfjkfUFiC2BpcWYwyxfbR3SA7gGOChvxcmhSfNITg; _segiupt_ci=segi; _segiupt_ty=SEGI_B_; aid=110033638; _segiupt_as=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJjbGllbnRfaWQiOiJzZWdpIiwiZXhwaXJlc19pbiI6NzIwMCwiaWF0IjoxNTc2MTM5Njg1LCJzYWx0Ijoid0I_ND5udCRGVEViLmF1dyIsInNjb3BlIjoic19hZG1pbiIsInR5cGUiOiJhY2Nlc3NfdG9rZW4iLCJ1c2VyX2lkIjoiU0VHSV9CXzExMDAzMzYzOCIsInVzZXJuYW1lIjoiU0VHSV9CXzEzNTU1NTU1NTU1In0.RjJHDs6O1nymFLUhYZp0s6wNzrNn3RQKnU2GoNbFp0LFFtUPtMeuixW_M1BIKNfmVMP1BASpNtY8KrM5sOuH1Q; cid=0; oid=5141'
        }
    };
    let req = http.request(url, options, function (res) {
        res.setEncoding('utf8');
        res.on('data', (data) => {
            callback(JSON.parse(data));
        });
        res.on('end', () => {
            console.log('响应中已无数据。');
        });
    });

    req.on('error', (e) => {
        console.error(`请求遇到问题: ${e.message}`);
    });
    //写入数据到请求主体
    req.write(JSON.stringify(postData));
    req.end();
}

exports.get=get;
exports.postRequest=postRequest;
exports.getRequest=getRequest;
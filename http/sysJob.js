let mysql = require("mysql");

function connect() {
    let connection = mysql.createConnection({
        host: '192.168.1.12',
        user: 'uhome',
        password: 'uhome110',
        database: 'uhome'
    });
    connection.connect(function () {
        console.log('connect successful')
    });
    return connection;
}

function get(callback) {
    connect().query('SELECT * from sys_job', function (error, results, fields) {
        if (error) throw error;
        callback(results[0]);
    });
}

function list(callback) {
    connect().query('SELECT * from sys_job', function (error, results, fields) {
        if (error) throw error;
        callback(results);
    });
}

function update() {
    connect().query('SELECT * from sys_job', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results[0]);
    });
}

function insert() {
    connect().query('SELECT * from sys_job', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results[0]);
    });
}

function delete_() {
    connect().query('SELECT * from sys_job', function (error, results, fields) {
        if (error) throw error;
        for (let i = 0; i < results.length; i++) {
            console.log(results.get(i));
        }
    });
}

exports.get = get;
exports.list = list;
exports.update = update;
exports.insert = insert;
exports.delete = delete_;

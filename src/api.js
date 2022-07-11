const os = require("os");
const express = require('express');
const http = require('http');
const fs = require('path');
const app = express();
var server = http.createServer((req, res) => {
    req.statusCode = 200;
    // res.setHeader("Content-Type", "html/plain");
    res.end("hello my name is abhishek what is your name tell me");
});
server.listen(8080);

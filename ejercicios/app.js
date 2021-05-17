var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
//Invocamos la ruta de los posts
var postsRouter = require("./routes/posts");

const server = express();

server.use(logger("dev"));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());
server.use(express.static(path.join(__dirname, "public")));

server.use("/", indexRouter);
server.use("/users", usersRouter);
//Añadimos la ruta de /posts
server.use("/posts", postsRouter);

module.exports = server;

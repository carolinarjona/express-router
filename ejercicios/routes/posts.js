var express = require("express");
var router = express.Router();

//Importamos la lista de posts
const posts = require("../postLists");

//Obtenemos todos los posts
router.get("/all", function (req, res) {
  res.send(posts);
});

//Borramos el post del que pasemos su id con 'delete' ¡en Postman!
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const index = posts.findIndex((post) => post.id === +id);
  posts.splice(index, 1);
  res.send(posts);
});

//Añadimos un nuevo post con 'post' ¡en Postman!
router.post("/add", (req, res) => {
  posts.push(req.body);
  res.send(posts);
});

//Modificamos lo que queramos de un post según su id con 'patch' ¡en Postman!
router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const postInfo = req.body;
  const index = posts.findIndex((post) => post.id === +id);
  posts[index] = { ...posts[index], ...postInfo };
  res.send(posts[index]);
});

//Añadimos los comentarios a un post según su id con 'put' ¡en Postman!
router.patch("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = req.body;
  const index = posts.findIndex((post) => post.id === +id);
  posts[index] = { ...posts[index], ...comment };
  res.send(posts[index]);
});

module.exports = router;

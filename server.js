const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
  const items = [
    {
      title: "D",
      massage: "esenvolver aplicações/serviços de forma fácil"
    },

    {
      title: "E",
      massage: "JS usa JavaScript para renderizar HTML"
    },

    {
      title: "M",
      massage: "uito fácil de usar"
    },

    {
      title: "A",
      massage: "morzinho"
    },

    {
      title: "I",
      massage: "nstall EJS"
    },

    {
      title: "S",
      massage: "intaxa simples"
    },
  ];

  const subtitle = "Uma linguangem de modelagem para criação de página HTML utilizando JavaScript"
  res.render("pages/index", {
    qualidades: items,
    subtitle: subtitle,
  });
});

app.get("/sobre", function(req, res) {
  res.render("pages/about");
})

app.listen(8080);
console.log("Rodando")
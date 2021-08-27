const path = require("path");
const express = require("express");
const app = express();


app.set("port", 5000);
app.set("views", path.join(__dirname, "/VIEWS/"))
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "/PUBLIC/")));

app.get("/", (req, res)=>{
    res.render("index", {
        title: "Riccino22 - Inicio",
        textTitle: "Riccardo Inojosa",
        textInfo: "In this website you'll find the proyects that I have created",
        addLink: "",
        textLinkPrincipal: "",
    });
})

app.get("/articles", (req, res)=>{
    res.render("articles", {
        title: "Articles - Riccino22",
        textInfo: "",
        textTitle: "Articles",
        addLink: "",
        textLinkPrincipal: "",
    });
})

app.get("/games", (req, res)=>{
    res.render("games", {
        title: "Games - Riccino22",
        textTitle: "Games",
        textInfo: "This is an game zone, for a better exprerence Visite the ",
        addLink: "https://riccino22.github.io/gamerom",
        textLinkPrincipal: "Game Rom",
    });
})

app.get("/programs", (req, res)=>{
    res.render("programs", {
        title: "Programs - Riccino22",
        textTitle: "Programs",
        textInfo: "In this section are my programs and another proyects",
        addLink: "",
        textLinkPrincipal: "",
    });
})

app.get("/ese", (req, res)=>{
    res.redirect("/");
})

app.get("*", (req, res)=>{
    res.render("error");
});


app.listen(app.get("port"), ()=>{
    console.log("Server in port " + app.get("port"));
});
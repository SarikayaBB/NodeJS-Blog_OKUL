/** npm atamalari */
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
/** bodyparser kullanimi */
app.use(bodyParser.urlencoded({extended: true}));
/** view engine ayari */
app.set("view engine", "ejs");

var blogPosts = [];

/** CSS cagirirken mime hatasi almamak icin img,css,zip cart curt ne varsa public'in icine koy. daha sonra app'a serverin static kismini kullanmasini soyle. __alttaki satir__ */
app.use(express.static("public"));

const hakkimizda =
  "Hakkımızda Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id sequi quo repellendus, eius quae praesentium doloribus aut, recusandae dignissimos quidem quam iusto officia animi ratione! Nostrum nisi commodi asperiores voluptatum.";
const anaSayfa =
  "Ana sayfa yazısı  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia quibusdam cupiditate ullam odit. Consequuntur quo consequatur neque officia reiciendis impedit. Voluptate impedit odit quae in modi quidem aut alias perspiciatis?";

const contact =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt tempora aliquid voluptatem tempore fugiat molestiae excepturi libero debitis maiores accusantium?";

/** get function */
app.get("/", function (req, res) {
  res.render("home1.ejs", {
    model: {
      h1tag: "Home",
      ptag: anaSayfa,
    },
  });
});
/** post function */
app.get("/hakkimizda", function (req, res) {
  res.render("about.ejs", {
    model: {
      h1tag: "About",
      ptag: hakkimizda,
    },
  });
});

app.get("/contact", function (req, res) {
  res.render("contact.ejs", {
    model: {
      h1tag: "Contact",
      ptag: contact,
    },
  });
});
app.get("/compose", function (req, res) {
  res.render("compose.ejs", {});
});

app.post("/compose", function (req, res) {
  blogPosts.push({baslik: req.body.txtBaslik, icerik: req.body.txtIcerik});
  console.log(blogPosts);
});

app.post("/", function (req, res) {});
/** listen function, server gazlama */
app.listen(3000, () => console.log("Server is listening on port 3000."));

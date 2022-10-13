/** npm atamalari */
const express = require("express");
/** body-parser indexte post methoddaki name ismini aliyor */
const bodyParser = require("body-parser");
const app = express();
/** bodyparser kullanimi */
app.use(bodyParser.urlencoded({extended: true}));
/** view engine ayari */
app.set("view engine", "ejs");

var blogPosts = [];
var id = 0;
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
      blogPosts: blogPosts,
    },
  });

  // /** req queryden gelen islem tanimi */
  // if (req.query.islem == "sil") {
  //   /** gelen islem blogposts'un hangi elemanindan gelmis? */
  //   for (var x of blogPosts) {
  //     /** gelen islem id'si query'nin id'sine esit ise; */
  //     if (x.id == req.query.id) {
  //       /** gelen islemin blogPosts indexli elemanini ucur */
  //       blogPosts.splice(blogPosts.indexOf(x), 1);
  //     }
  //   }
  // }
});

app.get("/:islem/:id", function (req, res) {
  if (req.params.islem == "sil") {
    console.log(req.params);
    for (var x of blogPosts) {
      if (x.id == req.params.id) {
        blogPosts.splice(blogPosts.indexOf(x), 1);
      }
    }
    res.redirect("/");
  } else if (req.params.islem == "devamini-oku") {
    console.log(req.params);
    for (var y of blogPosts) {
      if (req.params.id == y.id) {
        res.render("post", {
          model: {
            "baslik": y.baslik,
            "icerik": y.icerik,
          },
        });
      }
    }
   } //else if(req.params.islem == ""){}
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
  res.render("compose.ejs", {
    model: {},
  });
});
 
app.post("/compose", function (req, res) {
  if (req.body.txtBaslik.length < 20 && req.body.txtIcerik.length > 1) {
    blogPosts.push({baslik: req.body.txtBaslik, icerik: req.body.txtIcerik, id: id});
    /** id ekledikten sonra arttirmak da her birine farkli bir id tanimlar. */
    id++;
  }
  console.log(blogPosts);
  res.redirect("/compose");
});

app.post("/", function (req, res) {});
/** listen function, server gazlama */
app.listen(3000, () => console.log("Server is listening on port 3000."));

/** reference type and primitive type variables */

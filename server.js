/** npm atamalari */
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
/** bodyparser kullanimi */
app.use(bodyParser.urlencoded({extended: true}));
/** view engine ayari */
app.set("view engine", "ejs");

/** CSS cagirirken mime hatasi almamak icin img,css,zip cart curt ne varsa publicin icine koy. daha sonra app'a public yolunu goster. __alttaki satir__ */
app.use(express.static("public"));
/** get function */
app.get("/", function (req, res) {
  res.render("index.ejs", {
    model: {},
  });
});
/** post function */

app.post("/", function (req, res) {});
/** listen function, server gazlama */
app.listen(3000, () => console.log("Server is listening on port 3000."));

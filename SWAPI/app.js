let express = require("express"),
    app     = express();

let indexRouter = require("./routers/index/index");
app.use(express.static("public"));
app.set("view engine", "ejs");


app.use("/", indexRouter);

app.listen(3000, function()
{
    console.log("App is running on Port 3000");
});
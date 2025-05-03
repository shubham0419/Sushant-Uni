const express = require("express");
const app = express();
const PORT = 4000;
const cors = require("cors");
require("dotenv").config();
const connectToDB = require("./db");

// routers
const authRouter = require("./routes/auth.route");
const userRouter = require("./routes/user.routes");
const productRouter = require("./routes/product.routes");
const {isLoggedIn} = require("./middleware");
// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {	});

app.use("/auth",authRouter);
app.use("/user",isLoggedIn,userRouter);
app.use("/product",isLoggedIn,productRouter);


app.listen(PORT, () => {
  connectToDB();
  console.log("Server running on port " + PORT)
});
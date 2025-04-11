const express = require("express");
const app = express();
const PORT = 5000;
const cors = require("cors");


// routers
const authRouter = require("./routes/auth.route");


// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {	});

app.use("/auth",authRouter);

app.listen(PORT, () => console.log("Server running on port " + PORT));
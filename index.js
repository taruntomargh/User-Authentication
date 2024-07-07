const express = require("express");
const path = require("path");
const userRoute = require("./routes/user");
const {connectDB} = require("./db/connect");

const app = express();
const PORT = 8000;

// MongoDB connection
connectDB("mongodb://localhost:27017/userAuth").then(()=>{
    console.log("MongoDB connected");
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Route
app.use('/', userRoute);

// Template Engines
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.listen(PORT, ()=>{
    console.log(`Server is listening at http://localhost:8000`);
});

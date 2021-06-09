require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use("/",require("./routes/route"));
app.use(cors());

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`)
});

process.on("unhandledRejection", (err, promise) => {
    console.log(`Error: ${err.message}`);
    server.close(process.exit(1))
});
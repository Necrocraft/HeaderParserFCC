const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/api/whoami", (req, res) => {
    const ip = req.ip;
    const language = req.acceptsLanguages();
    const software = req.get("User-Agent")
    res.json({"ipaddress" : ip, 'language' : language[0], "software" : software});
})

app.listen(3000, () => console.log("On Server"));
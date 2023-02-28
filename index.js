const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    try {
        const r = await axios.put('https://api.chatengine.io/users/',
            {username: username,first_name: username,secret: username},
            {headers:{"private-key": "d65c1423-fcaf-451c-92e5-a8b6360842c1"}}
            )
            return res.status(r.status).json(r.data)
    } catch (e) {
        return res.status(e.status).json(e.data)
    }
    return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);
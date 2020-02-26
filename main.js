const express = require("express");

const app = express();

const youtubeStream = require('youtube-audio-stream')

app.get("/:id", (req, res, next) => {
    let id = req.params.id;

    const requestUrl = 'http://youtube.com/watch?v=' + req.params.id
    try {
        youtubeStream(requestUrl).pipe(res)
    } catch (exception) {
        res.status(500).send(exception)
    }

});

//use alternate localhost and the port Heroku assigns to $PORT
const host = "0.0.0.0";
const port = process.env.PORT || 8085;

app.listen(port, host, () => {
    console.log("Server listening @" + port);
});
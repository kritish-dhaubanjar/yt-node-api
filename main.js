const express = require("express");
const ytdl = require("ytdl-core");
const ffmpeg = require("fluent-ffmpeg");
const fs = require("fs");

const app = express();

app.get("/:id", (req, res, next) => {
  let id = req.params.id;

  let stream = ytdl(id, {
    quality: "highestaudio"
  });

  ffmpeg(stream)
    .withNoVideo()
    .format("mp3")
    .pipe(
      res,
      { end: true }
    );
});

//use alternate localhost and the port Heroku assigns to $PORT
const host = "0.0.0.0";
const port = process.env.PORT || 8085;

app.listen(port, host, () => {
  console.log("Server listening @" + port);
});

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

app.listen(8085, () => {
  console.log("Server listening @ 8000");
});

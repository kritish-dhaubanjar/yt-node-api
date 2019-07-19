const fs = require("fs");
const http = require("http");

outstream = fs.createWriteStream("output.mp3");

http.get("http://127.0.0.1:8000/GkrHw9PZIxI", res => {
  var stream = res.pipe(outstream);
});

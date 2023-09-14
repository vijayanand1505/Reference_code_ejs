const express = require("express");
const app = express();
const PORT = process.env.PORT || 3500;
const path = require("path");

app.use((req, res, next) => {
  console.log(`${req.method}${req.headers.origin}${req.url}`);
  next();
});

app.get("^/$|/index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
  //res.sendFile('index.html',{root: __dirname});
});

app.get("^/$|/home(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "home.html"));
  //res.sendFile('home.html',{root: __dirname});
});

app.get("^/$|/about(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "about.html"));
  //res.sendFile('about.html',{root: __dirname});
});

app.get("/*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "404.html"));
  //res.sendFile('about.html',{root: __dirname});
});

// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method);
//     res.writeHead (200, {'Content-Type': 'text/html'});
//     fs.readFile('index.html', (err, data) => {
//         if(err){
//             res.writeHead(404);
//             res.write('File not found');
//         }
//         else{
//             res.write(data);
//             res.end();
//         }
//     })
// });

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Server is listening on port ${PORT}`);
  }
});

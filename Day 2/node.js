// const http = require("http");
const fs = require("fs");

// http
//   .createServer(function (req, res) {
//     fs.readFile("delte.html", function (err, data) {
//       res.writeHead(200, { "contet-Type": "text/html" });
//       res.write(data);
//     return  res.end();
//     });
//   })
//   .listen(8080);

// // create file and keep adding content at the end of line
fs.appendFile("lokesh.txt", "my name is lokesh", function (err) {
  if (err) throw err;
  console.log(`you got error`);
});

////create and update content by replacing new content
// fs.writeFile("lok.html", "my name is lkes", function (err) {
//   if (err) throw err;
//   console.log("Done!");
// });

fs.unlink("lok.html", function (err) {
  if (err) throw err;
  console.log("deleted!");
});

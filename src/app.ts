// const sharp = require("sharp");
// const express = require("express");
// const fs = require("fs");
// const path = require("path");

// const app = express();

// const fileDir = path.join(__dirname, "./input");
// const outDir = path.join(__dirname, "./output");

// app.get("/resize", (req: any, res: any) => {
//   fs.readFile(req.query.filename, (data: any) => {
//     sharp(data)
//       .resize({ width: req.query.width, height: req.query.height })
//       .toBuffer()
//       .then((data: any) => {
//         fs.writeFile(path.join(outDir, req.query.filename), data);
//         res.send(data);
//       });
//   });
// });

// const port = 3000;

// app.listen(port, () => {
//   console.log(`Application started running on ${port}`);
// });
import express from "express";
import router from "./routes";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api", router);

const port = 3000;
app.listen(3000, () => {
  console.log(`Application started running on ${port}`);
});

export default app;

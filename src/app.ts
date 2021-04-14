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

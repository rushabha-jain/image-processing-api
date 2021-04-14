import express from "express";
import imagesRouter from "./images";
const mainRouter = express.Router();

mainRouter.use("/images", imagesRouter);

export default mainRouter;

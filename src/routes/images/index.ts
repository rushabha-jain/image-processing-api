import express from "express";
const router = express.Router();
import path from "path";
import { promises as fs } from "fs";
import { resize } from "../../util/.";

export const inputDir = path.join(
  __dirname,
  "..",
  "..",
  "..",
  "assets",
  "full"
);
export const outputDir = path.join(
  __dirname,
  "..",
  "..",
  "..",
  "assets",
  "thumb"
);

router.get(
  "/",
  (req, res, next) => {
    if (!req.query.filename || !req.query.width || !req.query.height) {
      return res.status(401).send({
        message: `Missing filename or width or height query parameters`,
      });
    }
    next();
  },
  async (req, res) => {
    const inputFilePath = path.join(inputDir, `${req.query.filename}.jpg`);
    const width = Number(<number>(<unknown>req.query.width));
    const height = Number(<number>(<unknown>req.query.height));
    const outputFilePath = path.join(
      outputDir,
      `${req.query.filename}_thumb.jpg`
    );
    try {
      await fs.access(outputFilePath);
      // File exists
      return res.sendFile(outputFilePath);
    } catch (error) {
      // File not exists
      try {
        await resize(inputFilePath, outputFilePath, width, height);
        return res.sendFile(outputFilePath);
      } catch (error) {
        return res.status(404).send({
          message: `File ${req.query.filename} not exists!`,
        });
      }
    }
  }
);
export default router;

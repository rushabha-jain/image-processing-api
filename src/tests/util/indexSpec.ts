import { inputDir, outputDir } from "../../routes/images";
import path from "path";
import { resize } from "../../util";

describe("image processing", () => {
  it("Should throw an error message for invalid file", async () => {
    const inputFilePath = path.join(inputDir, "invalidFile.jpg");
    const outputFilePath = path.join(outputDir, "invalidFile_thumb.jpg");
    await expectAsync(
      resize(inputFilePath, outputFilePath, 300, 400)
    ).toBeRejectedWithError("Input file is missing");
  });
  it("Should resize the image", async () => {
    const inputFilePath = path.join(inputDir, "fjord.jpg");
    const outputFilePath = path.join(outputDir, "fjord_thumb.jpg");
    await expectAsync(
      resize(inputFilePath, outputFilePath, 300, 400)
    ).toBeResolved();
  });
});

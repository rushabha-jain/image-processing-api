import sharp from "sharp";

export async function resize(
  inputPath: string,
  outputPath: string,
  width: number,
  height: number
): Promise<void> {
  try {
    await sharp(inputPath).resize(width, height).toFile(outputPath);
  } catch (error) {
    throw error;
  }
}

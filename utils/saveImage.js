import { writeFile, mkdir } from "fs/promises";
import { join } from "path";

async function saveImage(file) {
  try {
    if (!file || typeof file.name !== "string") {
      throw new Error("Invalid file object: File is missing or malformed.");
    }

    const byteData = await file.arrayBuffer();
    const buffer = Buffer.from(byteData);

    const projectRoot = process.cwd();
    const uploadsDirectory = join(projectRoot, "tmp");
    const fileName = `${Date.now()}-${file.name}`;
    const filePath = join(uploadsDirectory, fileName);

    await mkdir(uploadsDirectory, { recursive: true });
    await writeFile(filePath, buffer);

    // Return a relative URL pointing to the tmp folder; upstream callers
    // should prefer the blob URL if available.
    const imageUrl = `/tmp/${fileName}`;
    console.log("File saved successfully. URL:", imageUrl);

    return imageUrl;
  } catch (error) {
    console.error("Error in saveImage:", error.message);
    throw error;
  }
}

export default saveImage;

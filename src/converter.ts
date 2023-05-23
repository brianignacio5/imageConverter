import * as Jimp from "jimp";
import { writeFileSync  } from "fs";

const EPD_W = 640;
const EPD_H = 448;

async function convertToTrueColorWithDithering(inputFilePath: string, outputFilePath: string) {
    try {
        const img = await Jimp.read(inputFilePath);
        img.resize(EPD_W, EPD_H, Jimp.RESIZE_NEAREST_NEIGHBOR);
        img.dither565();

        await img.writeAsync(outputFilePath);
        console.log(`Image converted and saved as ${outputFilePath}`);

    } catch (error) {
        console.error("An error occurred parsing the image", error);
    }
}

export default convertToTrueColorWithDithering;
import { Request, Response } from "express";
import { resolve } from "path";
import convertToTrueColorWithDithering from "./converter";

interface ConverterResponse {
    hello: string;
}

type HelloBuilder = (name: string) => ConverterResponse;

const helloBuilder: HelloBuilder = name => ({ hello: name });

export const rootHandler = (req: Request, res: Response) => {
    return res.sendFile(resolve(__dirname, "..", "index.html"));
};

export const helloHandler = (req: Request, res: Response) => {
    const { params } = req;
    const { name = "World!"} = params;
    const response = helloBuilder(name);
    return res.json(response);
}

export const converterHandler = async (req: Request, res: Response) => {
    const inputFilePath = resolve(__dirname, "..", "public", "rocket.png");
    const outputFilePath = resolve(__dirname, "..", "public", "rocket_new.png");

    await convertToTrueColorWithDithering(inputFilePath, outputFilePath);
    return res.sendFile(outputFilePath);
}


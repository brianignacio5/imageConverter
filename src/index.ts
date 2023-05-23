import express from "express";
import { rootHandler, helloHandler, converterHandler } from "./handlers";

const app = express();

const port = process.env.port || "8000";

app.use(express.static('public'));

app.get("/", rootHandler);

app.get('/hello/:name', helloHandler);

app.get("/conv", converterHandler);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
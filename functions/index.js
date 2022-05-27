import functions from "firebase-functions";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get('/quote', (req, res) => {
    res.send(' Does it work ? ');
});

export const api = functions.https.onRequest(app);
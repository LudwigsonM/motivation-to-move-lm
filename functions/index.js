import express from "express";
import cors from "cors";
// import { addQuote } from "./src/addQuote";
// import { getAllQuotes } from "./src/getAllQuotes";
// import { getQuoteById } from "./src/getQuoteById";
import functions from "firebase-functions";

import { getAllQuotes } from "./src/services/quotes.services.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get('/quotes', getAllQuotes ); //function:getAllQuotes 
// app.get('/quotes/:quoteId', getQuoteById ); //function: getQuoteById
// app.post('/quotes', addQuote); // function: addQuote


app.get('/test', (req, res) => {
    res.send(' Does it work ? ');
});

export const api = functions.https.onRequest(app);
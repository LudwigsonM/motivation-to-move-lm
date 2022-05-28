import connectDb from "../connectDb.js";

export function addQuote (req, res) {
    if(!req.body) {
        res.body(401).send('Invalid request');
        return;
    };
    const db = connectDb();
    db.collection('quotes').add(req.body)
        .then(doc => {
            res.send('Quote created' + doc.id)
        })
        .catch(err => {
            res.status(500).send(err);

        });
};


export function getAllQuotes(req, res) {
    const db = connectDb();
    db.collection("quotes").get()
        .then(snapshot => {
        const quoteArray = snapshot.docs.map(doc => {
        let quote = doc.data();
        quote.id = doc.id;
        return quote;
        });
        res.send(quoteArray);
    })
        .catch(err => {
        res.status(500).send(err);
        });
};

export function getQuoteById (req, res) {
    const { quoteId } = req.params;
    if (!quoteId) {
        res.status(401).send('Invaild request');
        return;
    }
    const db = connectDb();
    db.collection("quotes").doc(quoteId).get()
        .then(doc => {
            let quote = doc.data();
            quote.id = doc.id;
            res.send(quote);
        })
        .catch(err => {
            res.status(500).send(err);
        });
}
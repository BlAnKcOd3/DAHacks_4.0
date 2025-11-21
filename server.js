import express from 'express'
const app = express()
const port = 3000

const serviceAccount = require('./path/to/serviceAccountKey.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test', (req, res) => {
  res.send('Hello TESTEST!')
})

app.get('/getDocument', async (req, res) => {
    // put the firebase code
    const docRef = db.collection('users').doc('alovelace');

    await docRef.set({
    first: 'Ada',
    last: 'Lovelace',
    born: 1815
    });

    res.send({
        name: "John Doe",
        age: 30
    })
})

app.listen(port, () => {
  console.log(`Example app listening on  http://localhost:${port}`)
})
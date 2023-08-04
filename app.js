import express from 'express';
import contactRouter from './src/routes/contacts.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/api/contacts', contactRouter)

const server = app.listen(8080, () => console.log(`Server running on port: ${server.address().port}`))
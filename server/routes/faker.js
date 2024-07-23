import express from 'express';
import connect from '../db/connect.js';
import generate from '../maker/generate.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { fm_uri, fm_db, fm_collection, fm_doc_amount, fm_type } = req.body;
  res.set('Content-Type', 'text/html');

  // Ensure that body has parameters.
  if (!fm_uri || !fm_db || !fm_collection || !fm_doc_amount || !fm_type) {
    res.status(400).send('Missing parameters from request body.');
    return;
  }

  // Ensure that we can connect to Atlas URI.
  const client = await connect(fm_uri);

  if (!client) {
    res.status(500).send('Error connecting to Mongo DB');
    return;
  }

  const data = generate(fm_doc_amount, fm_type);
  const collection = client.db(fm_db).collection(fm_collection);

  try {
    await collection.insertMany(data);
    console.log('Database seeded with synthetic data!');
    res.status(200).send('Database seeded with synthetic data!');
    return;
  } catch (err) {
    console.log(err);
    res.status(500).send('Something went wrong');
    return;
  }
});

export default router;

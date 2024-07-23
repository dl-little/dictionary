import express from 'express';
import { ObjectId } from 'mongodb';
// import connect from '../db/connect';

const router = express.Router();

router.post('/', (req, res) => {
  console.log(req);
});

export default router;

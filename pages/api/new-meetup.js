import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
  if (!req.method === 'POST') return;
  const data = req.body;

  const password = 'aUSjJhO7eUkOOC1t';
  const username = 'learningnext';
  const database = 'nextJsDB';

  const url = `mongodb+srv://${username}:${password}@learning.j1yvg.mongodb.net/${database}?retryWrites=true&w=majority`;
  const client = await MongoClient.connect(url);
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const result = await meetupsCollection.insertOne(data);

  client.close();

  res.status(201).json({ message: 'meetup inserted' });
};

export default handler;

import { MongoClient, ServerApiVersion } from 'mongodb';

const connect = async (uri) => {
  try {
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db('admin').command({ ping: 1 });
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    );
    return client;
  } catch (err) {
    console.log('Invalid URI:' + err.message);
    return undefined;
  }
};

export default connect;

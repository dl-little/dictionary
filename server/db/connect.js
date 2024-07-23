import { MongoClient, ServerApiVersion } from 'mongodb';

const connect = (uri) => {
  return new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
};

export default connect;

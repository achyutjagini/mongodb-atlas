var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://achyutjjj:abcde@cluster0-shard-00-00.yk9zd.mongodb.net:27017,cluster0-shard-00-01.yk9zd.mongodb.net:27017,cluster0-shard-00-02.yk9zd.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-3nab45-shard-0&authSource=admin&retryWrites=true&w=majority";
MongoClient.connect(uri,{ useUnifiedTopology: true }, function(err, client) {
  const collection = client.db("test").collection("devices");

  // perform actions on the collection object
  client.close();
});
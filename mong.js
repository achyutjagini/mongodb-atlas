var MongoClient=require('mongodb').MongoClient

var url="mongodb://<achyutjjj>:<abcde>@cluster0-shard-00-00.yk9zd.mongodb.net:27017,cluster0-shard-00-01.yk9zd.mongodb.net:27017,cluster0-shard-00-02.yk9zd.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-3nab45-shard-0&authSource=admin&retryWrites=true&w=majority"
MongoClient.connect(url,{ useUnifiedTopology: true },function(err,db)
{
    if(err) throw err
    console.log("connected");
    db.close();
})


const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://berat:TyLHtt3Yxaa2DGWl@cluster0.2nxyobm.mongodb.net/?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("Connected!");
      _db = client.db();
      callback(client);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database Found!";
};

// TyLHtt3Yxaa2DGWl
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;

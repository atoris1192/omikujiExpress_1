var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/myproject'
const dbName = 'myproject'


const main = async () => {
  const client = new MongoClient(url, { useNewUrlParser: true })
  await client.connect()
  console.info("Connected  Server ...")
  const db = client.db(dbName)

  /* GET home page. */
  router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });
  router.get('/api/insertMany', async(req, res, next) => {
    const collection = db.collection('omikuji')
    await collection.insertMany([
      {"item": "大吉"},
      {"item": "中吉"},
      {"item": "末吉"},
      {"item": "凶"},
    ])
      .then(res => console.log(res.result))
      .catch(err => console.error(err))
    res.send('insertMany done')
  })
  router.get('/api/deleteMany', async(req, res) => {
    const collection = db.collection('omikuji')
    await collection.deleteMany('omikuji')
      .then(res => console.log(res.result))
      .catch(err => console.error(err))
    res.send('DeleteMany done')
  })

  router.get('/api/random', async(req, res, next) => {
    const collection = db.collection('omikuji')
    const result = await collection.aggregate([
      { $sample: { size: 1 }}
    ]).toArray()
    console.log(result[0])
    res.json(result[0])
  })
  
}
main()


module.exports = router;

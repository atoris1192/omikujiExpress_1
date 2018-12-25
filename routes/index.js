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
  router.get('/new', (req, res) => {
    res.render('new')
  })

  // api
  router.post('/api/new', async(req, res) => {
    const collection = db.collection('omikuji')
    console.log(req.body)
    const data = {
      item: req.body
    }
    await collection.insertOne(req.body)
      .then(r => console.log(r.result))
      .catch(err => console.error(err))

    res.redirect('/')
  })
  router.get('/api/insertMany', async(req, res, next) => {
    const collection = db.collection('omikuji')
    await collection.insertMany([
      {"item": "大吉"},
      {"item": "中吉"},
      {"item": "末吉"},
      {"item": "凶"},
    ])
      .then(r => console.log(r.result))
      .catch(err => console.error(err))
    res.send('insertMany done')
  })
  router.get('/api/deleteMany', async(req, res) => {
    const collection = db.collection('omikuji')
    await collection.deleteMany({})
      .then(r => console.log(r.result))
      .catch(err => console.error(err))
    res.send('DeleteMany done')
  })

  router.get('/api/random', async(req, res, next) => {
    const collection = db.collection('omikuji')
    const result = await collection.aggregate([
      { $sample: { size: 1 }}
    ]).toArray()
    // console.log(result[0])
    res.json(result[0])
  })
  
}
main()


module.exports = router;

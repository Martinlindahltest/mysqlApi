const Sequelize = require('sequelize');
const express = require('express')
//const routes = require('./routes/api') 
//const bodyParser = require('body-parser')


app = express()


//app.use(bodyParser.json())

//app.use('/api', routes)

app.listen(4000, () => {
    console.log('lyssnar på port 4000')
})


// Option 1: Passing parameters separately
const db = new Sequelize('martin-testar', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false
},

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

db.authenticate()
  .then(() => console.log('Database connected'))

  const helaDatabasen = db.define('tullinge_med_id', {
    uuid: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
  
    },
    Verksamhetstyp: {
      type: Sequelize.STRING
    },
    Datum: {
      type: Sequelize.DATE
    },
    Dag: {
      type: Sequelize.STRING
    },
    Aktivitet: {
      type: Sequelize.STRING
    },
    StartSlut: {
      type: Sequelize.STRING
    },
    starttid: {
      type: Sequelize.STRING
    },
    Pr_st: {
      type: Sequelize.STRING
    },
    Musiker: {
      type: Sequelize.STRING
    },
    Personal: {
      type: Sequelize.STRING
    },
    Internnotering: {
      type: Sequelize.STRING
    },
  })


app.get('/', (req, res) => {
  helaDatabasen.findAll()
  .then(data => {
    res.send(data);

  }
    )
  })
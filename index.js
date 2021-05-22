const {Sequelize} = require('sequelize');
const {Order, User, init} = require('./models/Models');
const routes = require('./routes/routes');
const cors = require('cors');
const helmet = require('helmet');
const express = require('express');
const app = express();

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db.sqlite3',
});

// (async () => {          //rrfe (())() -> works like useEffect emiddialtly function voke expression .. run and load
    
   
//     try {
//         await sequelize.authenticate();
//         console.log('Connection establish');
//         sequelize.close();  //close anyConnection
//     } catch (error) {
//         console.log(error);
//     }
// })();

// const app = require('express')(); 


(async () => {
  await init(sequelize);
  app.use(cors())
  app.use(helmet());
  app.use(express.json());

  app.get('/', (req, res) => res.send('hello world!'));
  app.use('/api/v1/users', routes);
  app.listen(3000);
//   const jane = await User.create({
//     name: "Jane Doe",
//     email: 'user@email.com',
//     password: '23456789235698',
//   });

//   await jane.save();
//   const order = new Order({ orderId:'123',UserId : 1})
//   await order.save();

//   const results = await User.findAll({include: Order});
//   console.log(JSON.stringify(results, null , 4));
})();
//require('./models/Models')(sequelize)  //exporting the file  --> const models = require(./models/Model) .. models(sequelize)
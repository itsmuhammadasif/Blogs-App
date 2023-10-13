require('dotenv').config();

const development =  {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  databse: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  dialect: 'postgres'
}
console.log('Development is: ', development)
const test =  {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  databse: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  dialect: 'postgres'
}

const production =  {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  databse: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  dialect: 'postgres'
}

module.exports = { development,test,production}
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'maria_db',
});

connection.connect( (err) => {
  if(err) {
    return console.log('Ошибка подключения: ' + err.message);
  } else {
    return console.log('Подключение успешно');
  }
})


module.exports = connection;


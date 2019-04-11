const db = require('../database/database')
const users = {
  me: function(req, res) {
    db.query('SELECT * FROM ??', 'users', (derr, dres, dfld) => {
      let result = JSON.stringify(dres)
      res.json(JSON.parse(result))
    })
  }
}

module.exports = users
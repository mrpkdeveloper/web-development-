const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: 'localhost',
    user: "myuser",
    password: "mypass",
    database: "mytestdb",
})

function getallperson() {
    return new Promise(function (resolve, reject) {
        connection.query(
            `SELECT * FROM pearsons`,                        //name of the table is pearsons
            function (err, rows, cols) {

                if (err) {
                    reject(err)
                } else {
                    resolve(rows)
                }
            }
        )
    })
}
exports = module.exports = {
    getallperson
}

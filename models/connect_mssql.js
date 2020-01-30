import moment from "moment";
import config from "config";
import mssql from "mssql";

let config = configs.get('database');
// let config = {
//     "user": "",
//     "password": "",
//     "server": "",
//     "database": "",
//     "options": {
//         "encrypt": true
//     }
//   };
moment.locale('th');
module.exports = {
    connect: function () {
        mssql.connect(config, function (err) {
            console.log(moment().format('DD/MM/YYYY HH:mm:ss') + " - connected "+config.database);
            if (err) console.log(moment().format('DD/MM/YYYY HH:mm:ss') + " - Error : " + err);
        })
    },
    query: function (sql, callback) {
        mssql.query(sql, function (err, result, fields) {
            if (err) {
                console.log(moment().format('DD/MM/YYYY HH:mm:ss') + " - Error : " + err);
                callback(err);
            }
            else {
                callback(result.recordsets[0]);
            }
        });
    },
    disconnect: function () {
        console.log(moment().format('DD/MM/YYYY HH:mm:ss') + " - disconnect "+config.database);
        mssql.close();
    }

}
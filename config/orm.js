const connection = require('./connection');

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

const orm = {

    selectAll: function (tableInput, cb) {
        var query = `SELECT * FROM ${tableInput}`;

        connection.query(query, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    insertOne: function (table, cols, vals, cb) {
        const tempQueryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)})`;

        connection.query(tempQueryString, vals, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },

    // An example of objColVals would be {name: panther, sleepy: true}
    updateOne: function (table, objColVals, condition, cb) {
        const tempQueryString = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition}`;

        connection.query(tempQueryString, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};

module.exports = orm;
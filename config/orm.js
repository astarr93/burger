const connection = require('./connection');


//  This is helper boilerplate to dynamically pass all key=value object data to the db
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push('?');
    }

    return arr.toString();
}

// This is helper boilerplate to format and "prep" all key-value object data for db query 
function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === 'string' && value.indexOf(' ') >= 0) {
                value = `'${value}'`;
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

// Object Relational Mapping functions.
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
        const query = `INSERT INTO ${table} (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)})`;

        connection.query(query, vals, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },

    updateOne: function (table, objColVals, condition, cb) {
        const query = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition}`;

        connection.query(query, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};

module.exports = orm;
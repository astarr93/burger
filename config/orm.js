const connection = require('./connection');

const orm = {

    selectAll: function selectAll() {
        const query = `SELECT * FROM ${tableHistory}`;
        connection.query(query, function (err, result) {
            if (err) {
                throw err;
            }
            return(result);
        });
    },

    insertOne: function insertOne() {
        const query = ``
    },

    updateOne: function updateOne() {

    }
};

module.exports = orm;
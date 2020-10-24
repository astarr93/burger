const orm = require("../config/orm");

const burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", cb);
    },
    insertOne: function (data, cb) {
        orm.insertOne("burgers", data, cb);
    },
    updateOne: function (data, update, cb) {
        orm.updateOne("burgers", data, update, cb);
    },
    objToSql: function (data, update, cb) {
        orm.objToSql(data, update, cb);
    },
    getParams: function (data, cb) {
        orm.getParams(data, cb);
    },
};

module.exports = burger;
const orm = require("../config/orm");

const burger = {
    select: function (cb) {
        orm.select("burgers", cb);
    },
    insert: function (data, cb) {
        orm.insert("burgers", data, cb);
    },
    update: function (data, update, cb) {
        orm.update("burgers", cb);
    },
};

module.exports = burger;
config = {
    url: "mongodb://" + process.env.DB_HOST + "/" + process.env.DB_NAME,
    salt: 10
};

module.exports = config;
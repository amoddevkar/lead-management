const mongoose = require("mongoose");

const connectWithDb = () => {
    mongoose
        .connect('mongodb+srv://amoddevkar171:caoMTLLVbQdBt5jG@cluster-lead-management.apf9oou.mongodb.net/', {})
        .then(console.log(`DB GOT CONNECTED`))
        .catch((error) => {
            console.log(`DB CONNECTION ISSUES`);
            console.log(error);
            process.exit(1);
        });
};

module.exports = connectWithDb;
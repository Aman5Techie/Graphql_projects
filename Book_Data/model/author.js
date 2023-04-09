const mongo = require("mongoose")
const Schema = mongo.Schema

const authorS = new Schema({
    name: String,
    age : Number
}
)

module.exports = mongo.model("author",authorS)
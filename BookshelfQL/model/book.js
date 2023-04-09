const mongo = require("mongoose")
const Schema = mongo.Schema

const bookS = new Schema({
    name: String,
    genre : String,
    authorid : String
}
)

module.exports = mongo.model("book",bookS)
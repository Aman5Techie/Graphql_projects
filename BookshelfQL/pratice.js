const app = require('express')()
const graphql = require("express-graphql")
const schema = require("./schema/schema")
const db = require("./database")
const cors = require("cors")
// Allow cross-orgin request

app.use(cors());


db.connection.once('open',()=>{
    console.log("Database Connection Successful");
})


app.get("/",(req,res)=>{
    res.send("<h1> Home Page </h1>")
})




app.use("/graphql",graphql.graphqlHTTP({
    schema,


    graphiql : true // Give Graphical Interface
}))


app.listen(2000,()=>{
    console.log("Listening On port 2000");
})



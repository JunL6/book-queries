const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");
const URL_MONGODB = require("./config/keys");

const app = express();

// /** enable all CORS requests  */
// app.use(cors());

// connect to mongoDB
mongoose.connect(URL_MONGODB, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
	console.log("connected to database");
});

// graphql route handler
app.use(
	"/graphql",
	cors(),
	graphqlHTTP({
		schema: schema,
		graphiql: true,
	})
);

// app.get('/', (req, res)=> {
//   res.send("hello world!")
// })

app.listen(4000, () => {
	console.log("Now listening on Port 4000");
});

const express = require("express");
const { graphqlExpress } = require("graphql-server-express");
const bodyParser = require("body-parser");

const app = express();

app.set("port", process.env.PORT || 8080);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("/generate", (req, res) => {
  res.json({
    message: "Success"
  });
});

const myGraphQLSchema = require("./schema.js");

// bodyParser is needed just for POST.
app.use(
  "/graphql",
  bodyParser.json(),
  graphqlExpress({ schema: myGraphQLSchema })
);

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});

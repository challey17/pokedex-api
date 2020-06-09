require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

console.log(process.env.API_TOKEN);

// creates instance of express function
const app = express();

// remember morgan is logging requests to
//terminal console
app.use(morgan("dev"));

app.use(function validateBearerToken(req, res, next) {
  console.log("validate bearer token middleware");
  // move to the next middleware
  next();
});

const PORT = 8000;

const validTypes = [
  `Bug`,
  `Dark`,
  `Dragon`,
  `Electric`,
  `Fairy`,
  `Fighting`,
  `Fire`,
  `Flying`,
  `Ghost`,
  `Grass`,
  `Ground`,
  `Ice`,
  `Normal`,
  `Poison`,
  `Psychic`,
  `Rock`,
  `Steel`,
  `Water`,
];

app.get("/types", handleGetTypes);
app.get("/pokemon", handleGetPokemon);

function handleGetTypes(req, res) {
  res.json(validTypes);
}

function handleGetPokemon(req, res) {
  res.send("Hello Pokemon");
}

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

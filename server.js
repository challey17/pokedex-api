const express = require("express");
const morgan = require("morgan");
// creates instance of express function
const app = express();
// remember morgan is logging requests to
//terminal console
app.use(morgan("dev"));

// app.use((req, res) => {
//   res.send("Hello, world!");
// });

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

function handleGetTypes(req, res) {
  res.json(validTypes);
}

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

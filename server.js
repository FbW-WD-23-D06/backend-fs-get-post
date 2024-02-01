import "./config.js"; // this will load the .env file
import express from "express";
import fs from "node:fs";
import { logEndPoints } from "./utils.js";

const app = express();
const port = process.env.PORT;


const playersJSONFilePath = "./players.json";

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the NBA API");
});

app.get("/players", (req, res) => {
  const data = fs.readFileSync(playersJSONFilePath, "utf8");
  // res.send(data); // this will download the file
  res.send(JSON.parse(data)); // this will send the data as JSON
});

app.get("/players/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const players = JSON.parse(fs.readFileSync(playersJSONFilePath));
  const player = players.find((player) => player.id === id);
  // update the response status if the player is not found
  if (!player) res.status(404).send("Player not found");
  res.send(player);
});

app.post("/add-player", (req, res) => {
  console.log('req:',req);
  console.log("req.body:", req.body);
  const players = JSON.parse(fs.readFileSync(playersJSONFilePath));
  const newPlayer = { id: players.length + 1, ...req.body };
  players.push(newPlayer);
  fs.writeFileSync(playersJSONFilePath, JSON.stringify(players));
  res.send(newPlayer);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port} \n`);
  logEndPoints(app, port);
});

import express from "express";

const app = express();
const port = 9999;

app.use(express.json()); // to support JSON-encoded bodies
// CREATE A SERVER AND API  ENDPOINTS

// GET / (root)

// get data from the endpoint using curl: curl http://localhost:9999

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const players = [
  {
    id: 1,
    name: "Lebron James",
    team: "Lakers",
    number: 23,
  },

  {
    id: 2,
    name: "Kevin Durant",
    team: "Nets",
    number: 7,
  },
];

// GET /players

// get data from the endpoint using curl: curl http://localhost:9999/players

app.get("/players", (req, res) => {
  res.send(players);
});

// GET /players/:id

// get data from the endpoint using curl: curl http://localhost:9999/players/1  (get the player with id 1)

app.get("/players/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const player = players.find((player) => player.id === id);
  // update the response status if the player is not found
  if (!player) res.status(404).send("Player not found");
  res.send(player);
});

/**
 * Logs all the endpoints of the server.
 */

// GET /players/ player:id are the endpoints of our API
const logEndPoints = () => {
  app._router.stack.forEach((r) => {
    if (r.route && r.route.path) {
      const url = `http://localhost:${port}${r.route.path}`;
      console.log(url);
    }
  });
};

// POST /add-player/ (create a new player)

// add a new player using curl:
//

// curl -X POST http://localhost:9999/add-player -H "Content-Type: application/json" -d '{"name":"Michael Jordan","team":"Bulls","number":23}'

// -X POST: to specify the method
// -H (headers) "Content-Type: application/json": to specify the content type
// -d (data) '{"name":"Michael Jordan","team":"Bulls","number":23}': to specify the data to send

app.post("/add-player", (req, res) => {
  console.log("req.body:", req.body);
  const newPlayer = req.body;
  players.push(newPlayer);
  res.send(newPlayer);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  logEndPoints();
});

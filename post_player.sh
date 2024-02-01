# add player to API
# Usage: ./post_player.sh
# Permission: chmod +x post_player.sh

curl -X POST http://localhost:9999/add-player -H "Content-Type: application/json" -d '{"name":"Michael Jordan","team":"Bulls","number":23}'
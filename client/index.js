const axios = require("axios");
const niceList = require("../utils/niceList.json");
const MerkleTree = require("../utils/MerkleTree");

const serverUrl = "http://localhost:1225";

async function main() {
  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    name: "Jeevan",
  });

  console.log({ gift });
}

main();

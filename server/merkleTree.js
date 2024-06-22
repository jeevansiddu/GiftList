const MerkleTree = require("../utils/MerkleTree");
const niceList = require("../utils/niceList");
const verifyProof = require("../utils/verifyProof");

// create the merkle tree for the whole nice list
const merkleTree = new MerkleTree(niceList);
// get the root
const root = merkleTree.getRoot();

function nameIsInTheList(name) {
  const index = niceList.findIndex((n) => n === name);
  const proof = merkleTree.getProof(index);

  return verifyProof(proof, name, root);
}
module.exports = {
  nameIsInTheList,
};

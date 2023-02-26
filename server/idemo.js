let pack = [];

function addedPack() {
  pack = ["asd", "dasdasd"];
}

addedPack();

console.log(pack);

function addedSecond() {
  pack = [...pack, "dddddddd"];
}
addedSecond();

console.log(pack);

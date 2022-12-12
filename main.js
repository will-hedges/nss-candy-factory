/*
  Define a function named buyChocolate. 
  The function needs no parameters. 
  It should return an object with a type property whose value is "Milk chocolate".
*/
const buyChocolate = () => {
  const candyObj = {
    type: "Milk chocolate",
  };
  return candyObj;
};

const addFlavoring = (candyObj) => {
  candyObj.flavor = "Mint";
};

const makeBarkMixture = (candyObj) => {
  if (candyObj.flavor === "Mint") {
    candyObj.mixed = true;
  }
};

const bakeCandy = (candyObj) => {
  if (candyObj.mixed === true) {
    candyObj.baked = true;
  } else {
    candyObj.baked = false;
  }
};

const breakBark = (candyObj) => {
  if (candyObj.baked === true) {
    return [
      "Mint Chocolate Bark Piece",
      "Mint Chocolate Bark Piece",
      "Mint Chocolate Bark Piece",
      "Mint Chocolate Bark Piece",
      "Mint Chocolate Bark Piece",
      "Mint Chocolate Bark Piece",
    ];
  }
};

const candyObj = buyChocolate();
addFlavoring(candyObj);
makeBarkMixture(candyObj);
bakeCandy(candyObj);

const candyPieces = breakBark(candyObj);

console.log(candyObj);
console.log(candyPieces);

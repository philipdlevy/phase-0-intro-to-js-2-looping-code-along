// Code your solutions in this file
/*
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  };

  return gifts;
}

wrapGifts(gifts);
*/


function writeCards(names, birthday) {
    const thankYou = [];
    for (let i = 0; i < names.length; i++) {
        thankYou.push(`Thank you, ${names[i]}, for the wonderful ${birthday} gift!` );
    }
    return thankYou;
};



/*
function countDown() {
    let x = 0;
while (x < 11) {
  console.log(x); 
  x++;
}
}
*/

function countDown() {
    let x = 10;
while (x >= 0) {
  console.log(x); 
  x--;
}
}
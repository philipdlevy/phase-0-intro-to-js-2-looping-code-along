function writeCards (names, birthday) {
  const customMessage = [];
  for (let i = 0; i < names.length; i++) {
     customMessage.push(`Thank you, ${names[i]}, for the wonderful ${birthday} gift!`)
  }
  return customMessage;
};

function countDown() {
  let i = 10;
  while (i >= 0) {
    console.log (i--)
  }
};
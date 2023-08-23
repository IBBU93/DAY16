var counter = 10;
setInterval(function(){
  console.log(counter);
  counter--
  if (counter === 0) {
    console.log("HAPPY INDEPENDENCE DAY !");
  }
}, 1000);

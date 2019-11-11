function perform() {
  //TODO implement

  return arguments[1](arguments[0]);
}

perform(20, function(value) {
  console.log(value + "qqww"); // 20
  var param = 1;
  console.log(param + "dfdfd"); // 1
  return param;
})
  .then("a", "b", function(a, b, param) {
    console.log(param + "qqqq");

    console.log(++param); // 2
    return param;
  })
  .then(function(param) {
    console.log(333);

    // param === 2
    console.log(++param); // 3
    return param;
  })
  .catch();

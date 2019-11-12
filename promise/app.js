function perform() {
  // TODO implement

  return new Promise((resolve, reject) => {
    const f = arguments[1](arguments[0]);
    resolve(f);
  });
}

perform(20, (value) => {
  console.log(value); // 20
  const param = 1;
  console.log(param); // 1
  return param;
})
  .then('a', 'b', (a, b, param) => {
    console.log(++param); // 2
    return param;
  })
  .then((param) => {
    // param === 2
    console.log(++param); // 3
    return param;
  });

function perform() {
  // TODO implement
  this.param = arguments[arguments.length - 1](arguments[0]);
  this.then = function (...arg) {
    const callParam = [...arg];
    const callback = callParam.pop();
    callParam.push(this.param);
    this.param = callback(...callParam);
    return this;
  };
  return this;
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

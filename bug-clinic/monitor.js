module.exports = scenario;

function scenario(log, cb) {
  function start() {
    process.nextTick(thing);
  }

  var value = 97;
  log.info({
    value: value
  }, "scenario");

  function foo() {
    value *= 13;
    log.info({value:value},"foo");
    cb(value);
  }

  start();

  function racer() {
    value &= 255;
    log.info({value:value},"racer");
    setTimeout(foo, 0);
  }
  log.error("the value should not be reset to 213");
  //value = 213;
  log.info({value:value},"scenario");

  function thing() {
    value += 131;
    log.info({value:value},"thing");
    process.nextTick(racer);
  }
}

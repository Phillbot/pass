const fs = require("fs");

const passGenericInterval = 100;
const stopTime = 10000;

const passGenerator = (
  inc = new Date().getMilliseconds(),
  pass = "",
  maxSize = 30
) => {
  inc !== 0 ? (inc += inc) : (inc = new Date().getMilliseconds());

  const incStr = inc.toString();
  const abc =
    ".,!?()[]{}#$%&*~=^abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  pass += incStr[
    incStr.length - (Math.floor(Math.random() * (incStr.length - 1 + 1)) + 1)
  ] += abc.charAt(Math.floor(Math.random() * abc.length));

  return inc < new Date().getTime() / inc
    ? passGenerator(inc, pass)
    : pass.length > maxSize
    ? pass.slice(0, maxSize)
    : pass;
};

const generic = setInterval(() => {
  const pass = passGenerator();

  fs.appendFile("./passLog.txt", `${pass} `, error => {
    if (error) throw error;
  });
}, passGenericInterval);

setTimeout(() => {
  clearInterval(generic);
}, stopTime);

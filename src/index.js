// just a greeting
function sayHi(name) {
  return `Hello ${name} ,it's ${new Date().toISOString()}`;
}

module.exports = sayHi;

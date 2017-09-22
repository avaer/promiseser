const promiseser = require('.');
const promiseFns = Array(15).fill().map((_, i) => () => new Promise((accept, reject) => {
  setTimeout(() => {
    console.log(i);

    accept(i);
  });
}));
promiseser(promiseFns)
  .then(results => {
    console.log(results);
  });

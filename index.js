const promiseser = fns => new Promise((accept, reject) => {
  const results = Array(fns.length);

  const _recurse = i => {
    if (i < fns.length) {
      fns[i]()
        .then(result => {
          results[i] = result;

          _recurse(i + 1);
        })
        .catch(reject);
    } else {
      accept(results);
    }
  };
  _recurse(0);
});

module.exports = promiseser;

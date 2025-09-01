self.onmessage = function (e) {
  if (e.data && e.data.type === 'CALCULATE') {
    let calculation = 0;
    for (let i = 0; i < 1000000000; i++) {
      calculation += i;
    }
    self.postMessage({ type: 'RESULT', calculation });
  }
};

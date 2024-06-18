function flickSwitch(arr) {
  let item = true;
  let resultArr = [];
  arr.forEach(function (el) {
    if (el === 'flick') {
      item = !item;
    }
    resultArr.push(item);
  });

  return resultArr;
}

console.log(flickSwitch(['bicycle', 'jarmony', 'flick', 'sheep', 'flick']));

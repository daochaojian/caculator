function isInteger(obj) {
  return Math.floor(obj) === obj;
}
function toInteger(floatNum) {
  const ret = {
    times: 1,
    num: 0,
  };
  if (isInteger(floatNum)) {
    ret.num = floatNum;
    return ret;
  }
  const strfi = floatNum + '';
  const dotPos = strfi.indexOf('.');
  const len = strfi.substr(dotPos + 1).length;
  const times = Math.pow(10, len);
  const intNum = parseInt((floatNum * times) + 0.5, 10);
  ret.times = times;
  ret.num = intNum;
  return ret;
}

function operation(a, b, op) {
  const o1 = toInteger(a);
  const o2 = toInteger(b);
  const n1 = o1.num;
  const n2 = o2.num;
  const t1 = o1.times;
  const t2 = o2.times;
  const max = t1 > t2 ? t1 : t2;
  let result = null;
  switch (op) {
    case 'add':
      if (t1 === t2) { // 两个小数位数相同
        result = n1 + n2;
      } else if (t1 > t2) { // o1 小数位 大于 o2
        result = n1 + (n2 * (t1 / t2));
      } else { // o1 小数位 小于 o2
        result = (n1 * (t2 / t1)) + n2;
      }
      return result / max;
    case 'subtract':
      if (t1 === t2) {
        result = n1 - n2;
      } else if (t1 > t2) {
        result = n1 - (n2 * (t1 / t2));
      } else {
        result = (n1 * (t2 / t1)) - n2;
      }
      return result / max;
    case 'multiply':
      result = (n1 * n2) / (t1 * t2);
      return result;
    case 'divide':
      return result = function() {
        const r1 = n1 / n2;
        const r2 = t2 / t1;
        return operation(r1, r2, 'multiply');
      }();
    default:
  }
  return 0;
}

const newOperation = {
  add(a, b) {
    return operation(a, b, 'add');
  },
  subtract(a, b) {
    return operation(a, b, 'subtract');
  },
  multiply(a, b) {
    return operation(a, b, 'multiply');
  },
  divide(a, b) {
    return operation(a, b, 'divide');
  },
};

export default newOperation;

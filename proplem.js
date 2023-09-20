const missingNumber = (arr) => {
  const len = arr.length;
  const realSum = (len * (len + 1)) / 2;
  const arraySum = arr.reduce((a, b) => a + b);
  return realSum - arraySum;
};

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
console.log(missingNumber([0, 1]));
console.log(missingNumber([2, 3, 1]));
console.log(missingNumber([2, 3, 1, 4]));
console.log(missingNumber([2, 3, 1, 4, 0]));

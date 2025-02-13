export function addNumber(num,numbers) {
  if (!isNaN(num)) {
    numbers.push(num);
  }
}

export function sumPositiveNumbers(numbers) {
  let sum = numbers.filter((n) => n > 0).reduce((a, b) => a + b, 0);
  return sum;
}

export function countPositiveNumbers(numbers) {
  let count = numbers.filter((n) => n > 0).length;
  return count;
}

export function findMinNumber(numbers) {
  let min = Math.min(...numbers);
  return min;
}

export function findMinPositiveNumber(numbers) {
  let posNumbers = numbers.filter((n) => n > 0);
  let minPos =
    posNumbers.length > 0 ? Math.min(...posNumbers) : "Không có số dương";
  return minPos;
}

export function findLastEvenNumber(numbers) {
  let lastEven = -1;
  for (let i = numbers.length - 1; i >= 0; i--) {
    if (numbers[i] % 2 === 0) {
      lastEven = numbers[i];
      break;
    }
  }
  return lastEven;
}

export function swapElements(index1,index2,numbers) {
  if (
    index1 >= 0 &&
    index2 >= 0 &&
    index1 < numbers.length &&
    index2 < numbers.length
  ) {
    [numbers[index1], numbers[index2]] = [numbers[index2], numbers[index1]];
    return numbers;
  }
}

export function sortArray(numbers) {
  numbers.sort((a, b) => a - b);
  return numbers
}

export function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

export function findFirstPrime(numbers) {
  let prime = numbers.find((n) => isPrime(n)) || -1;
  return prime;
}

export function countIntegersInFloatArray(numbers) {
  let count = numbers.filter((n) => Number.isInteger(n)).length;
  return count;
}

export function comparePosNeg(numbers) {
  let posCount = numbers.filter((n) => n > 0).length;
  let negCount = numbers.filter((n) => n < 0).length;
  let message =
    posCount > negCount
      ? "Số dương nhiều hơn"
      : posCount < negCount
      ? "Số âm nhiều hơn"
      : "Số lượng bằng nhau";
  return message;
}

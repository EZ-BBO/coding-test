const numbers = [6, 10, 2];
function solution(numbers) {
  numbers.sort((a, b) => `${b}${a}` - `${a}${b}`);
  return numbers[0] === 0 ? "0" : numbers.join("");
}

console.log(solution(numbers));

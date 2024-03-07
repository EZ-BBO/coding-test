const citations = [3, 0, 6, 1, 5];
const citations2 = [6, 5, 3, 1, 0];

function solution(citations) {
  // const res = [];
  // const sortArr = citations.sort((a, b) => b - a);

  // for (let i = 0; i < sortArr.length; i++) {
  //   let countUp = 1;
  //   for (let j = 0; j < sortArr.length; j++) {
  //     let number = sortArr[i];
  //     if (number === 0) {
  //       countUp = 0;
  //     } else if (number < sortArr[j]) {
  //       countUp++;
  //     }
  //   }
  //   res.push({ key: citations[i], up: countUp });
  //   count = 0;
  // }
  // return res;

  return citations
    .sort((a, b) => b - a)
    .findIndex((item, index) => item <= index);
}

console.log(solution(citations));

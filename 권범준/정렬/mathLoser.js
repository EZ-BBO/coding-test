const answers = [1, 3, 2, 4, 2];
function solution(answers) {
  const answer = [];

  const constant = {
    first_num: [1, 2, 3, 4, 5],
    second_num: [2, 1, 2, 3, 2, 4, 2, 5],
    third_num: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  };

  const correctCount = [0, 0, 0];

  answers.forEach((item, index) => {
    if (answers[index] === constant.first_num[i % first_num.length])
      correctCount[0] += 1;
    if (answers[index] === constant.second_num[i % first_num.length])
      correctCount[1] += 1;
    if (answers[index] === constant.third_num[i % first_num.length])
      correctCount[2] += 1;
  });

  const maxScore = Math.max(...correctCount);
  correctCount.forEach((value, index) => {
    if (value === maxScore) answer.push(index + 1);
  });

  return answer;
}
console.log(solution(answers));

function solution(array, commands) {
  const answer = [];

  commands.forEach((el) => {
    const newArray = array.slice(el[0] - 1, el[1]).sort((a, b) => a - b);
    answer.push(newArray[el[2] - 1]);
  });

  return answer;
}

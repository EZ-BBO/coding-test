const sizes = [
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
];
function solution(sizes) {
  const sortSizes = sizes.map((size) => {
    return size[0] < size[1] ? size.reverse() : size;
  });

  const [x, y] = sortSizes.reduce((acc, curr) => {
    curr.forEach((value, index) => {
      // 각 해당 value가 클때만 적용
      if (acc[index] === undefined || value > acc[index]) {
        acc[index] = value;
      }
    });
    return acc;
  }, []);
  return x * y;
}
console.log(solution(sizes));

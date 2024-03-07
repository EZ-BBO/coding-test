function solution(citations) {
  let i = 0;
  citations.sort((a, b) => a - b);
  for (i; i < citations.length; i++) {
    if (citations[i] >= citations.length - i) break;
  }
  return citations.length - i;
}

function solution(citations) {
    const reArrangedArray = citations.sort((a, b) => b - a);
    const hIndex = reArrangedArray.filter((item, index) => item >= index + 1).length

    return hIndex;
}

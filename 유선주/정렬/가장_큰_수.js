function solution(numbers) {
    const strings = numbers.map(String);
    const rearrangedList = strings.sort((acc, cur) => {
       return Number(acc + cur) < Number(cur + acc) ? 1 : -1
    })
    
    if(rearrangedList[0] === '0') return '0';
    return rearrangedList.join('');
}
function solution(array, commands) {
    const answer = commands.map(([startNum, endNum, index]) => {
        const splittedArray = array.slice(startNum - 1, endNum);
        const rearrangedArray = splittedArray.sort((acc,cur) => acc - cur)
        return rearrangedArray[index - 1]
    })
    return answer
}
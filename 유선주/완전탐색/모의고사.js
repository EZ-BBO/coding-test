function solution(answers) {
    const firstPerson = [1,2,3,4,5]
    const secondPerson = [2,1,2,3,2,4,2,5]
    const thirdPerson = [3,3,1,1,2,2,4,4,5,5]
    
   const answerCounts = [firstPerson, secondPerson, thirdPerson].map(person => {
        const itemLength = person.length;
        return answers.filter((answer, index) => {
            return index < itemLength ? answer === person[index] : answer === person[index % itemLength]
        }).length
    })
    
        const maxCount = Math.max(...answerCounts)
 
    return answerCounts.map((item, index) => {
        return item === maxCount ? index + 1 : null
    }).filter(Boolean)
}
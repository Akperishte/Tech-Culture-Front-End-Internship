function res(nums){
    let runningSum = nums
    sum = runningSum[0]
    for(let i = 1 ; i < runningSum.length ; i++){
        runningSum[i] += runningSum[i-1]
    }
    return runningSum
}

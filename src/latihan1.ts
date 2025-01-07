function maxSubArray(nums: number[]): number {
    let curSum: number = nums[0]
    let maxSum: number = nums[0]
    for(let i = 1; i < nums.length; i++){
        curSum = Math.max(nums[i], nums[i] + curSum)
        maxSum = Math.max(curSum, maxSum)
    } 
    return maxSum
}

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
const hasil = maxSubArray(nums)

console.info(hasil)
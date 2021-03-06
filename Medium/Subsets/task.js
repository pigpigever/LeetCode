// Given a set of distinct integers, nums, return all possible subsets (the power set).
//
// Note: The solution set must not contain duplicate subsets.
//
// 	Example:
//
// Input: nums = [1,2,3]
// Output:
// 	[
// 		[3],
// 		[1],
// 		[2],
// 		[1,2,3],
// 		[1,3],
// 		[2,3],
// 		[1,2],
// 		[]
// 	]


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {

	const result = [nums.slice()]

	function dfs (current, start) {
		result.push(current)
		for (let i = start; i < nums.length; i++) {
			dfs(current.concat(nums[i]), i + 1)
		}
	}

	dfs([],0)

	return result
};

console.log(subsets([1,2,3]))

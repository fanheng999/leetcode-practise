/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
// 	for (let i = 0; i < nums.length; i++) {
// 		for (let j = i + 1; j < nums.length; j++) {
// 			if (nums[i] + nums[j] === target) {
// 				return [i, j]
// 			}
// 		}
// 	}
// };
var twoSum = function (nums, target) {
	let obj = {}
	for (let i = 0; i < nums.length; i++){
		obj[nums[i]] = i
	}
	for (let i = 0; i < nums.length; i++){
		const cha = target - nums[i]
		if (obj[cha] && i !== obj[cha]) {
			return [i, obj[cha]]
		}
	}
};
// @lc code=end


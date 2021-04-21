/** product: calculate the product of an array of numbers. */

function product(nums, idx = 0) {
  // base case
  if (idx === nums.length) return 1;
  // normal case: return first num * recursion
  return nums[idx] * product(nums, idx + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0, len = 0) {
  // base case:
  if (idx === words.length) return len;

  // normal case: compare words[idx].length to currently stored length; store which is bigger and recurse

  len = Math.max(len, words[idx].length);

  return longest(words, idx + 1, len);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, messyStr = "") {
  // base case:
  if (idx >= str.length) return messyStr;
  // normal case: add str[idx] to messy string, then increase idx by 2 and recurse
  messyStr += str[idx];
  return everyOther(str, idx + 2, messyStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = 0) {
  // store left and right values to check
  let left = idx;
  let right = str.length - idx - 1;
  // base case: if indices have crossed, all values have already been compared so return true
  if (left >= right) return true;
  // normal case: compare left and right; if they are unequal, return false, if they are, move indices and recurse
  if (str[left] !== str[right]) return false;
  return isPalindrome(str, idx + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  // base case
  if (idx === arr.length) return -1;
  // normal case: if its found at index, return index, otherwise recurse with next index
  if (arr[idx] === val) return idx;
  return findIndex(arr, val, idx + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = 0, reversed = "") {
  // base case: strings are same length
  if (reversed.length === str.length) return reversed;

  // normal case: add characters of string from the end moving forward to reversed, then increase index by 1 and recurse
  reversed += str[str.length - idx - 1];
  return revString(str, idx + 1, reversed);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strings = [];
  // iterate over object- add any strings to array, and spread recursion over any objects into array, then return array
  for (let key in obj) {
    if (typeof obj[key] === "string") strings.push(obj[key]);
    if (typeof obj[key] === "object") strings.push(...gatherStrings(obj[key]));
  }
  return strings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length - 1) {
  // base case:
  if (left > right) return -1;
  // normal case: find middle; compare middle to val; return middle idx if they're equal, or adjust left and right accordingly then recurse with new values
  let middleIdx = Math.floor((left + right) / 2);
  if (arr[middleIdx] === val) return middleIdx;
  if (arr[middleIdx] > val) return binarySearch(arr, val, left, middleIdx - 1);
  return binarySearch(arr, val, middleIdx + 1, right);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};

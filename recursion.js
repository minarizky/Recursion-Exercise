/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;
  return nums [0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 1) return words[0].length;
    const first = words[0].length;
    const rest = longest(words.slice(1));
    return Math.max(first, rest);
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length === 0) return '';
    return str[0] + everyOther(str.slice(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;
    return isPalindrome(str.slice(1, -1));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, str) {
  function helper(index) {
      if (index >= arr.length) return -1;
      if (arr[index] === str) return index;
      return helper(index + 1);
  }
  return helper(0);
}


/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length === 0) return '';
  return revString(str.slice(1)) + str[0];
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let result = [];
  function helper(o) {
      for (let key in o) {
          if (typeof o[key] === 'string') {
              result.push(o[key]);
          } else if (typeof o[key] === 'object' && o[key] !== null) {
              helper(o[key]);
          }
      }
  }
  helper(obj);
  return result;
}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, value, low = 0, high = arr.length - 1) {
  if (low > high) return -1;
  const mid = Math.floor((low + high) / 2);
  if (arr[mid] === value) return mid;
  if (arr[mid] < value) return binarySearch(arr, value, mid + 1, high);
  return binarySearch(arr, value, low, mid - 1);
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

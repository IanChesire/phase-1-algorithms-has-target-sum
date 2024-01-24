function hasTargetSum(array, target) {
  // Write your algorithm here
   const arrayOfNumbers = new Set();
   for (let num of array) {
     const number = target - num;
     if (arrayOfNumbers.has(number)) {
       return true;
     }
     arrayOfNumbers.add(num);
   }
   return false;
 }

/* 
  Write the Big O time complexity of your function here

  *The function iterates through each element of the array exactly once.
  *For each element, the function performs constant time operations that do not depend on the size of the array
   *The loop runs in linear time, making the overall time complexity O(n).
*/

/* 
  Add your pseudocode here

  START
  *Input-array
        -target
  *Output-true if any pair of numbers in the array adds upto the target
        -otherwise is false

  *Initialize an empty set called 'arrayOfNumbers' to store number arrays
  *Iterate through each number in the array
  *Return false if loop completes without finding a pair
  END
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

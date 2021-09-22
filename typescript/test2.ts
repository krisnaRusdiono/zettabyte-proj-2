// Expected result : [7, 3, 1, 2, 5, 6, 9, 10, 4, 8]
// Direction : Mutate arr1 to return combined array with arr2. The conditions are :
// 1. odd number at beginning 
// 2. even number at the end of array 
// 3. Original arr1 at the middle

const arr1 = [1, 2, 5, 6, 9, 10];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(arr1: number[], arr2: number[]) {
  // Your Code Here

  const odd = [];

  const even = [];

  for (let i = 0; i < arr2.length; i++) {
    if(arr2[i] % 2 == 0){
        even.push(arr2[i])
    }
    if(arr2[i] % 2 !== 0){
        odd.push(arr2[i])
    }
  }

  odd.sort((a, b) => {
      return b - a
  })

  const result = odd.slice(0, 2).concat(arr1, even.sort((a, b) => {
      return b - a
  }).slice(3, 5))

  return result;
}

console.log(result(arr1, arr2));
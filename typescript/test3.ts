// Expected Result : [false, true]
// Direction :
// The first value : If all of arr2 has bigger value than the biggest value of arr1;
// The second value : If some of arr2 has smaller value than the smallest value of arr1;

const arr1 = [4, 6, 2, 3, 5];
const arr2 = [1, 3, 4, 7, 9, 10];


function result(arr1: number[], arr2: number[]) {
    
    // Your Code Here
    const sorted = arr1.sort((a, b) => {
            return a - b
        })

    const lowest = sorted.shift();
    const biggest = sorted.pop();

    const arg1 = arr2.every((v, i, a) => {
      return v > biggest
    })

    const arg2 = arr2.some((v, i, a) => {
        return v - lowest
    })

    const res = [arg1, arg2];

    // const res = [biggest, lowest];

  return res;
}

console.log(result(arr1, arr2));
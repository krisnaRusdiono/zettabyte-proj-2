// Expected Result : [false, true]
// Direction :
// The first value : If all of arr2 has bigger value than the biggest value of arr1;
// The second value : If some of arr2 has smaller value than the smallest value of arr1;
var arr1 = [4, 6, 2, 3, 5];
var arr2 = [1, 3, 4, 7, 9, 10];
function result(arr1, arr2) {
    // Your Code Here
    var sorted = arr1.sort(function (a, b) {
        return a - b;
    });
    var lowest = sorted.shift();
    var biggest = sorted.pop();
    var arg1 = arr2.every(function (v, i, a) {
        return v > biggest;
    });
    var arg2 = arr2.some(function (v, i, a) {
        return v - lowest;
    });
    var res = [arg1, arg2];
    // const res = [biggest, lowest];
    return res;
}
console.log(result(arr1, arr2));

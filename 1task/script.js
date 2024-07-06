let integers = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
//-----------------------------------------------------
//push : is used to add last element
integers.push(24);
console.log(integers);
//-------------------------------------------------------------------
//pop : is used to remove last element
integers.pop();
console.log(integers)

//unshift : is used to add first element in an array

integers.unshift(31);
console.log(integers)
//shift : is used to remove first element in an array

integers.shift();
console.log(integers)
//----------------------------------------------------------

integers.sort();
console.log(integers)

// Task-3
// Ascending order
integers.sort((a,b)=>a-b)
console.log(integers)

//descending order
integers.sort((a,b) => b-a)
console.log(integers)


// Task-4
// Array Iteration:

integers.forEach(x=> console.log(x))

// Task-5
// Array Transformation:

integers2=[51,22,65,12,2]

let integers3=integers2.map(sqr=>sqr**2)
console.log(integers3)

// Task-6
// Array Filtering:

integers4=[9,4,6,1,2,0]

let integers5=integers4.filter(item=>item%2===0)
console.log(integers5)

// Task-7
// Array Reduction:

integers6=integers4.reduce((acc,curr)=>acc+curr)
console.log(integers6)



let arr = [1, 2, 3, 4, 5];
let elementToInsert = 99;
let position = 2; // Insert at index 2

// Insert the element
arr.splice(position, 0, elementToInsert);

console.log("Array after insertion:", arr);

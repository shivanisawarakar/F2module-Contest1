/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];
// <-------------map functon----->
function PrintDeveloperswithMap() {
  //Write your code here
  arr.map((employee) => {
    if (employee.profession == "developer") {
      console.log(employee);
    }
  });
}
// <---------------ForEach fuction---------->
function PrintDeveloperbyForEach() {
  //Write your code here
  arr.forEach(printViaForEach); //each element is stored printViaForEach
  function printViaForEach(arrayItem) {
    if (arrayItem.profession == "developer") {
      console.log(arrayItem);
    }

  }
}
// <----------addData function-------
function addData() {
  //Write your code here
  let newObj = { id: 4, name: "susan", age: "20", profession: "intern" }
  arr.push(newObj);
  console.log(arr);




}
// <----------removeAdmin  function----->
function removeAdmin() {
  //Write your code here
  let filter_arr = arr.filter(function (val) {
    //callback - The test function to execute on each array element; 
    if (val.profession !== "admin") {
      return val;
    }
  });
  console.log(filter_arr);
}
// <------------concatenateArray function------>
function concatenateArray() {
  //Write your code here
  let arr2 = [
    { id: 4, name: "priti", age: "21", profession: "SDE" },
    { id: 5, name: "gayatri", age: "22", profession: "INSTRUCTER" },
    { id: 6, name: "shivani", age: "24", profession: "MENTOR" },
  ];
  let concatArray = arr.concat(arr2);
  console.log(concatArray);
}
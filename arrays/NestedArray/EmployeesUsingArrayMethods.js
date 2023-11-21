// Employees file created already. Here displaying the same results using array methods
employees=[
    ["anu","dev",34000,1,"calicut"],
    ["amala","tester",49000,3,"kochi"],
    ["arun","dev",34000,2,"Trissur"],
    ["anurag","tester",14000,5,"calicut"]
]
console.log("---------------------------------");

console.log(employees.map(n=>n[0]));    //Employees Name
console.log("---------------------------------");

console.log(employees.filter(i=>i[1]=="dev").map(n=>n[4]));  //Developers Location
console.log("---------------------------------");

console.log(employees.map(n=>n[2]).reduce((a,b)=>a+b)); // finding total salary using reduce method
console.log("---------------------------------");

console.log(employees.reduce((n1,n2)=>n1[3]<n2[3]?n1:n2));  //lowest experienced person




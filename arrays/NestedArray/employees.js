employees=[
    ["anu","dev",34000,1,"calicut"],
    ["amal","tester",49000,3,"kochi"],
    ["arun","dev",31000,2,"Trissur"],
    ["anu","tester",14000,5,"calicut"]
]

console.log("Employees count : ",employees.length); //Employees count 

console.log("---------------------------------");

for(i of employees){
        console.log(i[0]);  //Employees Name
}

console.log("---------------------------------");

for(i of employees){
    if(i[1]=="dev"){
        console.log(i[4]);  //Developers Location
    }
}

console.log("---------------------------------");

employees.sort((n1,n2)=>n1[3]-n2[3])
console.log(employees); //Sort employees based on their experience

console.log("---------------------------------");

employees.sort((n1,n2)=>n2[2]-n1[2])
console.log(employees[0][0]); //Highest salaried employee

console.log("---------------------------------");

employees.sort((n1,n2)=>n1[3]-n2[3])
console.log(employees[0][2],employees[0][1],); //print salary and designation of employee who have less experience
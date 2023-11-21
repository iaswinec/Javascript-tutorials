employees=[
    ["anu","dev",34000,1,"calicut"],
    ["amala","tester",49000,3,"kochi"],
    ["arun","dev",34000,2,"Trissur"],
    ["anurag","tester",14000,5,"calicut"]
]
console.log(employees.some((n=>n[3]==3)));
console.log(employees.some((n=>n[2]<=50000 & n[2]>=40000)));
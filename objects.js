const Patryk = {
    name: "Patryk",
    age: 23,
    job: "Customer Advisor",
    hobbies: ["Games", "Music", "esports"],
    pets: ["Cat", "Dog"]
}
const Agustina = {
    name: "Agustina",
    age: 33,
    job: "Senior consultant for AOC",
    hobbies: ["books", "series", "movies"],
    pets: [
        {
            name: "Paco",
            species: "Russian Blue Black"
        }
    ],
}
const Mike = {
    name: "Michael",
    age: 36,
    job: "Mortgage Advisor",
    hobbies: ["leeds united"],
    pets: ["luna"]
}

const Lucy = {
    name: "Lucy",
    age: 22,
    job: "Banking consultant",
    hobbies: ["Games", "Music", "baking"],
    pets: ["Cat", "Hamster"]
}
const Leo = {
    name: 'Leo',
    age: 35,
    job: 'Support Analyst',
    hobbies: ['Gaming', 'Gym', 'More Gaming'],
    pets: ['Whiskas']
}
const people = [Patryk, Agustina, Mike, Lucy, Leo]

for (const person of people) {
    console.log(
        "Name:", person.name,
        "Age:", person.age,
        "Job:", person.job,
        "Hobbies:", person.hobbies,
        "pets", person.pets,
    );
}
let oldest = { age: 0 };
for (const person of people) {
    if (person.age > oldest.age){ 
        { oldest.age = person.age };
        (oldest.name = person.name)
    }
}

console.log("Oldest:", oldest);

let youngest = { age: 999 };
for (const person of people) {
    if (person.age < youngest.age){
        {youngest.age = person.age};
        (youngest.name = person.name)
    } 
}

console.log("Youngest:", youngest);

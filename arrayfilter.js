const Animals = [   
    {name: "Fluffykins" , species: "rabbit" },
    {name: "Caro" , species: "dog" },
    {name: "Hamilton" , species: "dog"},
    {name: "Harold", species: "fish"},
    {name: "Ursula" , species: "cat"},
    {name: "Jimmy", species: "fish"}
]

function getDogs(Animals) {
    let dogs = []
    for (let animal of Animals) {
        if (animal.species === "dog") {
            dogs.push(animal)
        }
    }
    return dogs
}
console.log(getDogs(Animals));
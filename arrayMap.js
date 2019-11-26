const Animals = [   
    {name: "Fluffykins" , species: "rabbit" },
    {name: "Caro" , species: "dog" },
    {name: "Hamilton" , species: "dog"},
    {name: "Harold", species: "fish"},
    {name: "Ursula" , species: "cat"},
    {name: "Jimmy", species: "fish"}
]

function getNames (Animals) {
let animalNames = []
    for (let animal of Animals) {
        animalNames.push (animal.name)
    }

    return animalNames
}
console.log(getNames(Animals));
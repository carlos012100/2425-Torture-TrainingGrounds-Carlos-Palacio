import Character from "./Character.mjs";
import Day from "./Day.mjs";
import Weapon from "./Weapon.mjs";
import characterBD from "./data/characterBD.mjs";

const charactersArray = [];
characterObjectArray();
console.log(charactersArray)

function characterObjectArray()
{
    for (let i = 0; i < characterBD.length; i++)
    {
        const character = new Character(
            characterBD[i].name,
            characterBD[i].occupation,
            characterBD[i].gold,
            characterBD[i].level,
            characterBD[i].skills,
            characterBD[i].weapons
        );
        charactersArray.push(character)
    }
    return charactersArray;

}
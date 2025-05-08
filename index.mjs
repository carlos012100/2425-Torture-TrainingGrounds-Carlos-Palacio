import Character from "./Character.mjs";
import Day from "./Day.mjs";
import Weapon from "./Weapon.mjs";
import characterBD from "./data/characterBD.mjs";

const charactersArray = [];

//Create array of character objects

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
characterObjectArray();

//Create obj Day

const day = new Day(3 , "Tuesday");

//create sim training

charactersArray[1].trainForDay(charactersArray[1].weapon.name, day)
console.log(charactersArray[1].weapon)

function printData()
{
    console.log(day.number + "," + day.name);
    console.log("-------------")
    console.log("")
    for(let i = 0; i < charactersArray.length; i++)
    {
        console.log(charactersArray[i].name + ", " + "a " + charactersArray[i].occupation + ", " + "begins the training")
        console.log("current skills: " + "\n" + "- " + charactersArray[i].skills);
        console.log(charactersArray[i].name + "trains the" + charactersArray[i].weapon.type + "skill" + "by using" + charactersArray[i].weapon.name)
        console.log("current weapon points: " + charactersArray[i].weapon.points)
        console.log("weapon points to increase skill: " + charactersArray[i].pointsForNextSkill)
    }
}
printData();
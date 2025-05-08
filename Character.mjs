export default class Character {
    constructor(name, occupation, gold, level, skills, weapon)
    {
        this.name = name;
        this.occupation = occupation;
        this.gold = gold;
        this.level = level;
        this.skills = skills;
        this.weapon = weapon;
    }
    trainForDay(weaponName, dayObj)
    {
        let dice3faces = Math.floor(Math.random()* 3);
        let dice2faces = Math.floor(Math.random()*2);
        let points = 0;

        if (this.occupation === "thug")
        {
            if(this.weapon.type === "missile")
            {
                const modifier = + 2
                 points = Math.floor((this.level/2)) + dice3faces + modifier;

            }
            else {
                const modifier = - 2
                 points = Math.floor((this.level/2)) + dice3faces + modifier;

            }

        }
        else if(this.occupation === "priest")
        {
            if(this.weapon.type === "missile")
            {
                const modifier = 2;
                 points = this.level + dice3faces + modifier;
            }
            if(this.weapon.type === "brawl")
            {
                let modifier = -1;
                
                if (Math.random()< 0.2)
                {
                    modifier = -2;
                }
                else{
                    modifier = -1;
                }
                 points = this.level + dice3faces + modifier;

            }
            else{
                const modifier = - 2
                 points = this.level + dice3faces + modifier;
            }
        }
        else if (this.occupation === "peasant" && dayObj.name === "wednesday") {
            if (this.weapon.type === "brawl")
            {
                 points = dice2faces + Math.floor(this.level/2);
            }
        }


        this.weapon.points += points;

        if(this.weapon.points === this.weapon.points_for_next_skill)
        {
            let type = this.weapon.type;

            this.skills = type;

            type += 1;
            this.weapon.points_for_next_skill = currentPointsNextSKill;
            this.weapon.points_for_next_skill = currentPointsNextSKill + Math.floor(this.skills/5);

            this.weapon.points = 0;

        }
        else if(this.weapon.points > this.weapon.points_for_next_skill)
        {
            let type = this.weapon.type;
            this.skills = type;
            type +=1;
            this.weapon.points = this.weapon.points%this.weapon.points_for_next_skill;

            this.weapon.points_for_next_skill = currentPointsNextSKill;
            this.weapon.points_for_next_skill = currentPointsNextSKill + Math.floor(this.skills/5);

            this.weapon.points = 0;


        }
        else {
            this.weapon.points = 0;
        }

        this.gold -= 50;

    }

}
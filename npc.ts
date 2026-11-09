class npc {
    name: string;
    health: number;
    speed: number;
    defense: number;
    attack: number;
    npcType: "walk" | "fly";

    constructor(name: string, health: number, speed: number, defense: number, attack: number, npcType: "walk" | "fly") {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.defense = defense;
        this.attack = attack;
        this.npcType = npcType;
    }
    walking() : number {
        this.speed += 2;
        return this.speed;
    }
    gethealing() : void {
        this.health += 10;
        return console.log(`${this.name} mendapatkan penyembuhan, sekarang memiliki ${this.health} health.`);
    }
    attacking() : number {
        this.attack += 2;
        return this.attack;
    }
    sprint() : number {
        this.speed += 4;
        return this.speed;
    }
    ultimateSkill() : number {
        this.attack += 10;
        return this.attack;
    }
    isflying() : void {
        if (this.npcType === "fly") {
            
            this.speed +=10;
            this.attack += 10;
            return console.log(`${this.name} bisa terbang dengan kecepatan ${this.speed} dan serangan ${this.attack}.`);
        } else {
            console.log(`${this.name} tidak bisa terbang.`);
        }
        
    }
}

const harpy = new npc("Harpy", 100, 10, 5, 15, "fly");
const goblin = new npc("Goblin", 80, 8, 3, 10, "walk");

console.log(goblin.isflying());
console.log(harpy.isflying()); 




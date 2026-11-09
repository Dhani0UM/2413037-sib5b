class PublicEnemy {
    hp: number;
    attack: number
    defense: number;
    speed: number;

    constructor(hp: number, attack: number, defense: number, speed: number) {
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
    }

    basicAttack(): number {
        return this.attack;
    }
}


class Lord {}

class Turtle {}

class BlueWolf {}

class RedDragon {}
class Mario {
    name: string;
    hp: number;
    speed: number;
    positionX: number;
    positionY: number;
    invincible: boolean;
    currentForm: "mario" | "super mario" | "fire mario";

    constructor( name: string = "Mario", hp: number = 1, speed: number = 5, positionX: number = 0, positionY: number = 0, invincible: boolean = false, currentForm: "mario" | "super mario" | "fire mario" = "mario") {
        this.name = name;
        this.hp = hp;
        this.speed = speed;
        this.positionX = positionX;
        this.positionY = positionY;
        this.invincible = invincible;
        this.currentForm = currentForm;
    }


    eatSuperMushroom(): Mario {
        const hasil = new SuperMario(this.name, this.hp + 1, this.speed, this.positionX, this.positionY, this.invincible);
        console.log(`${this.name} memakan Super Mushroom! Menjadi Super Mario. HP: ${hasil.hp}`);
        return hasil;
    }


    eatFireFlower(): Mario {
        const hasil = new FireMario(this.name, this.hp + 1, this.speed, this.positionX, this.positionY, this.invincible);
        console.log(`${this.name} memakan Fire Flower! Menjadi Fire Mario. HP: ${hasil.hp}`);
        return hasil;
    }


    getSuperStar(): void {
        this.invincible = true;
        console.log(`${this.name} mendapatkan Super Star! Sekarang kebal.`);
    }


    takeDamage(): Mario {
        if (this.invincible) {
            console.log(`${this.name} sedang kebal! Serangan tidak berpengaruh.`);
            return this;
        }

        const hasil = new Mario(this.name, this.hp - 1, this.speed, this.positionX, this.positionY, this.invincible);
        console.log(`${this.name} diserang! HP: ${hasil.hp}, kembali ke form Mario.`);
        return hasil;
    }


    moveRight(): number {
        this.positionX += this.speed;
        console.log(`${this.name} bergerak ke kanan. Posisi X: ${this.positionX}`);
        return this.positionX;
    }


    moveLeft(): number {
        this.positionX -= this.speed;
        console.log(`${this.name} bergerak ke kiri. Posisi X: ${this.positionX}`);
        return this.positionX;
    }


    shootFireball(): void {
        console.log(`${this.name} belum bisa menembak bola api.`);
    }

    status(): string {
        return `${this.name} | Form: ${this.currentForm} | HP: ${this.hp} | Speed: ${this.speed} | Pos: (${this.positionX}, ${this.positionY}) | Invincible: ${this.invincible}`;
    }
}


class SuperMario extends Mario {
    constructor( name: string = "Mario", hp: number = 2, speed: number = 5, positionX: number = 0, positionY: number = 0, invincible: boolean = false) {
        super(name, hp, speed, positionX, positionY, invincible, "super mario");
    }
}


class FireMario extends Mario {
    constructor( name: string = "Mario", hp: number = 2, speed: number = 5, positionX: number = 0, positionY: number = 0, invincible: boolean = false) {
        super(name, hp, speed, positionX, positionY, invincible, "fire mario");
    }

    shootFireball(): void {
        console.log(`${this.name} menembakkan bola api!`);
    }
}


let mario: Mario = new Mario();

console.log(mario.status());
mario = mario.eatFireFlower();
mario.shootFireball();
mario.moveRight();
mario = mario.takeDamage();
console.log(mario.status());
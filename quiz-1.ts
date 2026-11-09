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


    eatSuperMushroom(): void {
        this.currentForm = "super mario";
        this.hp += 1;
        console.log(`${this.name} memakan Super Mushroom! Menjadi Super Mario. HP: ${this.hp}`);
    }

  
    eatFireFlower(): void {
        this.currentForm = "fire mario";
        this.hp += 1;
        console.log(`${this.name} memakan Fire Flower! Menjadi Fire Mario. HP: ${this.hp}`);
    }

  
    getSuperStar(): void {
        this.invincible = true;
        console.log(`${this.name} mendapatkan Super Star! Sekarang kebal.`);
    }

   
    takeDamage(): void {
        if (this.invincible) {
            console.log(`${this.name} sedang kebal! Serangan tidak berpengaruh.`);
            return;
        }

        this.hp -= 1;
        this.currentForm = "mario";
        console.log(`${this.name} diserang! HP: ${this.hp}, kembali ke form Mario.`);
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
        if (this.currentForm === "fire mario") {
            console.log(`${this.name} menembakkan bola api!`);
        } else {
            console.log(`${this.name} belum bisa menembak bola api.`);
        }
    }

    
}


const mario = new Mario();

mario.eatFireFlower();
mario.shootFireball();
mario.moveRight();
mario.takeDamage();
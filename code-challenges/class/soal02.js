class Player {
    constructor(name, hitsPerMinute) {
        this.name = name;
        this.hitsPerMinute = hitsPerMinute;
        this.marbleCount = 100;
    }

    marbleAttack(p1, p2) {
        p2.Player.this.marbleCount = p2.Player.this.marbleCount - p1.Player.this.hitsPerMinute
        p1.Player.this.marbleCount = p1.Player.this.marbleCount - p2.Player.this.hitsPerMinute
    }

    status() {
        console.log(`Player: ${this.name} -- Marbles Left: ${this.marbleCount}`)
    }
}

const p1 = new Player('p1', 5);
const p2 = new Player('p2', 2);

marbleAttack(p1, p2);
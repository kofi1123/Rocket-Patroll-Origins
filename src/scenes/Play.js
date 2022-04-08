class Play extends Phaser.Scene {
    constructor() {
        super("play");
    }

    preload() {
        this.load.image('rocket', './assets/rocket.png');
        this.load.image('spaceship', './assets/spaceship.png');
        this.load.image('starfield', './assets/starfield.png');
    }

    create() {
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        this.bg = this.add.tileSprite(0,0, game.config.width, game.config.height, 'starfield').setOrigin(0, 0);
        this.add.rectangle(0, borderUISize + borderPadding, game.config.width, borderUISize * 2, 0x00ff00).setOrigin(0,0);
        this.add.rectangle(0, 0, game.config.width, borderUISize, 0xffffff).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0xffffff).setOrigin(0,0);
        this.add.rectangle(0, 0, borderUISize, game.config.height, 0xffffff).setOrigin(0.0);
        this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.width, 0xffffff).setOrigin(0,0);
        
        this.p1Rocket = new Rocket(this, game.config.width/2, 431, 'rocket').setOrigin(0.5, 0);
    }
    update() {
        this.bg.tilePositionX += 4;
        const movementSpeed = 4;
        if (keyLEFT.isDown) {
            this.p1Rocket.x -= movementSpeed;
        }
        if (keyRIGHT.isDown) {
            this.p1Rocket.x += movementSpeed;
        }
        if (Phaser.Input.Keyboard.JustDown(keyF)) {
            debugger;
        }
    }
}
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainScene = void 0;
var sky_png_1 = __importDefault(require("../assets/sky.png"));
var star_png_1 = __importDefault(require("../assets/star.png"));
var platform_png_1 = __importDefault(require("../assets/platform.png"));
var bomb_png_1 = __importDefault(require("../assets/bomb.png"));
var dude_png_1 = __importDefault(require("../assets/dude.png"));
var scoreText;
var score = 0;
var MainScene = /** @class */ (function (_super) {
    __extends(MainScene, _super);
    function MainScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScene.prototype.preload = function () {
        this.load
            .image('sky', sky_png_1.default)
            .image('ground', platform_png_1.default)
            .image('star', star_png_1.default)
            .image('bomb', bomb_png_1.default)
            .spritesheet('dude', dude_png_1.default, {
            frameWidth: 32,
            frameHeight: 48
        });
    };
    MainScene.prototype.create = function () {
        this.add.image(400, 300, 'sky');
        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();
        this.platforms.create(600, 400, 'ground');
        this.platforms.create(50, 250, 'ground');
        this.platforms.create(750, 220, 'ground');
        scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', color: '#000' });
        this.player = this.physics.add.sprite(100, 450, 'dude');
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);
        this.player.setGravityY(40);
        this.physics.add.collider(this.player, this.platforms);
        this.cursors = this.input.keyboard.createCursorKeys();
        this.bombs = this.physics.add.group();
        this.physics.add.collider(this.bombs, this.platforms);
        this.physics.add.collider(this.player, this.bombs, this.hitBomb, null, this);
        this.stars = this.physics.add.group({
            key: 'star',
            repeat: 11,
            setXY: { x: 12, y: 0, stepX: 70 }
        });
        this.stars.children.iterate(function (child) {
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
        });
        this.physics.add.collider(this.stars, this.platforms);
        this.physics.add.overlap(this.player, this.stars, this.collectStar, null, this);
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'turn',
            frames: [{ key: 'dude', frame: 4 }],
            frameRate: 20
        });
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
    };
    MainScene.prototype.update = function () {
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-160);
            this.player.anims.play('left', true);
        }
        else if (this.cursors.right.isDown) {
            this.player.setVelocityX(160);
            this.player.anims.play('right', true);
        }
        else {
            this.player.setVelocityX(0);
            this.player.anims.play('turn');
        }
        if (this.cursors.up.isDown && this.player.body.touching.down) {
            this.player.setVelocityY(-330);
        }
    };
    MainScene.prototype.collectStar = function (player, star) {
        star.disableBody(true, true);
        score += 10;
        scoreText.setText('Score: ' + score);
        if (this.stars.countActive(true) === 0) {
            this.stars.children.iterate(function (child) {
                child.enableBody(true, child.x, 0, true, true);
            });
            var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
            var bomb_1 = this.bombs.create(x, 16, 'bomb');
            bomb_1.setBounce(1);
            bomb_1.setCollideWorldBounds(true);
            bomb_1.setVelocity(Phaser.Math.Between(-200, 200), 20);
        }
    };
    MainScene.prototype.hitBomb = function (player, bomb) {
        this.physics.pause();
        player.setTint(0xff0000);
        player.anims.play('turn');
        // gameOver = true;
    };
    return MainScene;
}(Phaser.Scene));
exports.MainScene = MainScene;

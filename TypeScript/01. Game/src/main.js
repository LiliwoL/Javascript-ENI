"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("phaser");
var main_scene_1 = require("./scenes/main_scene");
new Phaser.Game({
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    render: {
        pixelArt: true
    },
    scene: main_scene_1.MainScene
});

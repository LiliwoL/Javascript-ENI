import 'phaser'
import {MainScene} from './scenes/main_scene'

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
  scene: MainScene
})


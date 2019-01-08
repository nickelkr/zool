import * as Phaser from 'phaser';

import Triangle from './assets/art/test-triangle.png';

var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 700,
  scene: {
    preload: preload,
    create: create
  }
};

var game = new Phaser.Game(config);

function preload() {
  this.load.image('triangle', Triangle);
}

function create() {
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      let x = 35 + (i * 70);
      let y = 35 + (j * 70);
      this.add.sprite(x, y, 'triangle');
    }
  }
}

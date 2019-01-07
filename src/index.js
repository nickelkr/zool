import * as Phaser from 'phaser';

import Triangle from './assets/art/test-triangle.png';

var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
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
  var triangle = this.add.sprite(80, 0, 'triangle');
}

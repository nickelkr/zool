import * as Phaser from 'phaser';

import Triangle from './assets/art/test-triangle.png';
import Circle from './assets/art/test-circle.png';
import Diamond from './assets/art/test-diamond.png';
import Square from './assets/art/test-square.png';

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
  this.load.image('circle', Circle);
  this.load.image('diamond', Diamond);
  this.load.image('square', Square);
}

function create() {
  let xy = function (x) { return 35 + (x * 70) };

  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      let type_val = Math.floor(Math.random() * 100);
      let type = 'triangle';

      if (type_val >= 25 && type_val < 50) {
        type = 'circle';
      } else if (type_val >= 50 && type_val < 75) {
        type = 'diamond';
      } else if (type_val >= 75){
        type = 'square';
      }
      
      this.add.sprite(xy(i), xy(j), type);
    }
  }
}

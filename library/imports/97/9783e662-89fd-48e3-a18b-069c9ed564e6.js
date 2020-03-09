"use strict";
cc._RF.push(module, '9783eZiif1I46GLBpye1WTm', 'toGame');
// scripts/toGame.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {},
    //carrot1��carrot2button�������������������
    toCarrot1: function toCarrot1() {
        cc.director.loadScene("game2");
    },

    toCarrot2: function toCarrot2() {
        cc.director.loadScene("game3");
    },
    start: function start() {}
});

cc._RF.pop();
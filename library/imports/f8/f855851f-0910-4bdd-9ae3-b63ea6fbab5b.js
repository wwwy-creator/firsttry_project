"use strict";
cc._RF.push(module, 'f8558UfCRBL3Zrjtj6m+6tb', 'game1');
// scripts/game1.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        //��������
        audio: {
            default: null,
            type: cc.AudioClip
        }
    },

    onLoad: function onLoad() {
        cc.audioEngine.playMusic(this.audio, true);
    },

    start: function start() {}
});

cc._RF.pop();
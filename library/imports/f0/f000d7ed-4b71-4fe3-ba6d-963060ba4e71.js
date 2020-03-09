"use strict";
cc._RF.push(module, 'f000dftS3FP47ptljBguk5x', 'music');
// scripts/music.js

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
    /* */
    playMus: function playMus() {
        if (this.flager == 0) {
            //��������
            cc.audioEngine.playMusic(this.audio, true);
            this.flager += 1;
        } else {
            //ֹͣ����
            cc.audioEngine.pauseMusic();
            this.flager -= 1;
        }
    },

    onLoad: function onLoad() {
        //����һ����ͣ��������
        this.flager = 0;
        cc.audioEngine.playMusic(this.audio, true);
    },

    start: function start() {}
});

cc._RF.pop();
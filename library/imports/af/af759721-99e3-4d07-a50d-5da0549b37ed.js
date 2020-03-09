"use strict";
cc._RF.push(module, 'af759chmeNNB6UNXaBUmzft', 'toHome3');
// scripts/toHome3.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {},
    toHome: function toHome() {
        cc.director.resume();
        cc.director.loadScene("game1");
    },

    toResart: function toResart() {
        cc.director.loadScene("game3");
    },

    toPause: function toPause() {
        if (this.flager == 0) {
            //��ͣ��Ϸ��
            cc.director.pause();
            // ������ͣ��Ϸ��������Ⱦ����Ƶ���¼���
            //  cc.Game.pause();
            this.flager += 1;
        } else {
            // �ָ���Ϸ�߼���
            cc.director.resume();
            this.flager -= 1;
        }
    },

    onLoad: function onLoad() {
        //����һ����ͣ��������
        this.flager = 0;
    },
    start: function start() {}
});

cc._RF.pop();
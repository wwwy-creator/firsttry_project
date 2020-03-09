(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/toHome2.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '7de09TqbzRJNpegGapCA/lg', 'toHome2', __filename);
// scripts/toHome2.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {},

    toHome: function toHome() {
        cc.director.resume();
        cc.director.loadScene("game1");
    },

    toResart: function toResart() {
        cc.director.loadScene("game2");
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
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=toHome2.js.map
        
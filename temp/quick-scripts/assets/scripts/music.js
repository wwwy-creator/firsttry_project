(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/music.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'f000dftS3FP47ptljBguk5x', 'music', __filename);
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
        //# sourceMappingURL=music.js.map
        
(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/toGame.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '9783eZiif1I46GLBpye1WTm', 'toGame', __filename);
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
        //# sourceMappingURL=toGame.js.map
        
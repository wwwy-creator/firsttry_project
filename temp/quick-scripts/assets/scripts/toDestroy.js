(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/toDestroy.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '5c391LJcDVHUZFeedTRGmRj', 'toDestroy', __filename);
// scripts/toDestroy.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        close: {
            default: null,
            type: cc.Node
        }
    },

    toClose: function toClose(event) {
        //�ָ���ͣ�õİ�ť
        this.toDescribe.carrot1.getComponent(cc.Button).interactable = true;
        this.toDescribe.carrot2.getComponent(cc.Button).interactable = true;
        this.toDescribe.book1.getComponent(cc.Button).interactable = true;
        this.toDescribe.book2.getComponent(cc.Button).interactable = true;
        //���ٽڵ�
        this.node.destroy();
        this.toDescribe.node.parent.opacity = 255;
    },


    onLoad: function onLoad() {
        this.close.on('mousedown', this.toClose, this);
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
        //# sourceMappingURL=toDestroy.js.map
        
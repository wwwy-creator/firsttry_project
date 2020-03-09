"use strict";
cc._RF.push(module, '5c391LJcDVHUZFeedTRGmRj', 'toDestroy');
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
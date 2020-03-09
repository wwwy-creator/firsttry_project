(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/lauch3.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '46a80jGbXxFm45CvGVjujcp', 'lauch3', __filename);
// scripts/lauch3.js

"use strict";

cc.Class({
    extends: cc.Component,
    //��ʽ
    properties: {
        carrot: {
            default: null,
            type: cc.Label
        }
    },

    getDistance: function getDistance() {
        // ���� rabbit �ڵ�λ���жϾ���
        var rabbitPos = this.game3.rabbit.getPosition();
        // ��������λ�ü�������֮�����
        var dist = this.node.position.sub(rabbitPos).mag();
        return dist;
    },

    onPicked: function onPicked() {
        //��������ȷ��ײ����ʱ
        if (this.carrot.string == "carrot") {
            // �÷�����
            this.game3.playScoreSound();
            // Ȼ�����ٵ�ǰ���ǽڵ�
            this.node.destroy();
            //�ӷ�
            this.game3.gainScore();
        } else {
            // ��������
            this.game3.playOverSound();
            this.game3.createOption();
        }
    },

    //�������y�����λ��
    setPosY: function setPosY() {
        var Posy = Math.ceil(Math.random() * -4);
        this.node.y = 100 * Posy + 140;
    },

    onLoad: function onLoad() {
        this.setPosY();
    },

    update: function update(dt) {
        if (this.node.x < 465) {
            this.node.x += dt * 80;
        } else {
            this.node.destroy();
        };
        // ÿ֡�жϺ�����֮��ľ����Ƿ�С���ռ�����
        if (this.getDistance() < 35) {
            // �����ռ���Ϊ
            this.onPicked();
        }
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
        //# sourceMappingURL=lauch3.js.map
        
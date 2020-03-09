"use strict";
cc._RF.push(module, 'a3e1fWKIwVJF6w+17cShSUJ', 'rabbit2');
// scripts/rabbit2.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        // ������Ծ�߶�
        jumpHeight: 0,
        // ������Ծ����ʱ��
        jumpDuration: 0,
        // ���̰��º����ӵ���Ծ�߶�
        height: 0,
        //���̰��º����ӵ���Ծ����ʱ��
        duration: 0,
        //Ϊ��������Ծ�˶������ᣬ����ʱ�䱶��
        mutiplynum: 0,
        //��Ծ����
        jumpAudio: {
            default: null,
            type: cc.AudioClip
        }
    },

    playJumpSound: function playJumpSound() {
        // �����������沥������
        cc.audioEngine.playEffect(this.jumpAudio, false);
    },

    setJumpAction: function setJumpAction() {
        // ������Ծ����
        var callback = cc.callFunc(this.playJumpSound, this);
        // ��Ծ����
        var jumpUp = cc.moveBy(this.jumpDuration, cc.v2(0, this.jumpHeight)).easing(cc.easeCubicActionOut());
        // ����
        var jumpDown = cc.moveBy(this.jumpDuration, cc.v2(0, -this.jumpHeight)).easing(cc.easeCubicActionIn());
        // �����ظ�
        return cc.repeatForever(cc.sequence(callback, jumpUp, jumpDown));
    },

    setOneJumpAction: function setOneJumpAction() {
        // ������Ծ����
        var callback = cc.callFunc(this.playJumpSound, this);
        // ��Ծ����
        var jumpUp = cc.moveBy(this.duration, cc.v2(0, this.height)).easing(cc.easeCubicActionOut());
        // ����
        var jumpDown = cc.moveBy(this.duration, cc.v2(0, -this.height)).easing(cc.easeCubicActionOut());
        this.timer = 0;
        //����
        return cc.sequence(callback, jumpUp, jumpDown);
    },

    clickJump: function clickJump(event) {
        //��ֹ�������������������
        if (this.flag == false && this.timer < this.duration * this.mutiplynum - this.timer) {
            this.node.pauseSystemEvents();
            this.scheduleOnce(function () {
                this.node.resumeSystemEvents();
            }, this.duration * this.mutiplynum - this.timer);
        } else {
            this.flag = false;
            //ͣ��ԭ�ȵĶ���
            this.node.stopAllActions();
            this.node.setPosition(-340, -230);
            //��ʼ�¶���
            this.node.runAction(this.setOneJumpAction());
            //����released���ȴ�onKeyDown���������󣬻ָ�ԭ�ȶ���
            this.scheduleOnce(function () {
                this.node.stopAllActions();
                this.node.setPosition(-340, -230);
                this.node.runAction(this.setJumpAction());
                this.flag = true;
            }, this.duration * this.mutiplynum - this.timer);
        }
    },


    onLoad: function onLoad() {
        //��ʱ��
        this.timer = 0;
        this.flag = true;

        // ��ʼ����Ծ����
        this.node.runAction(this.setJumpAction());

        // ��ʼ�������������
        this.node.on('mousedown', this.clickJump, this);
    },

    onDestroy: function onDestroy() {
        this.node.off('mousedown', this.clickJump, this);
    }
});

cc._RF.pop();
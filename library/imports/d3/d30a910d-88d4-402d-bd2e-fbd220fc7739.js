"use strict";
cc._RF.push(module, 'd30a9ENiNRALb0u+9Ig/Hc5', 'game2');
// scripts/game2.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        //���ܲ����ĸ�С���ﶼ�Ž�����
        stuff: {
            default: [],
            type: [cc.Prefab]
        },
        //���� �����ʱ����
        timeInterval: 0,
        //���ӽڵ�
        rabbit: {
            default: null,
            type: cc.Node
        },
        //����
        score: {
            default: null,
            type: cc.Label
        },
        //ÿ֡С�����ƶ�����
        distance: 0,
        //�÷�����
        scoreAudio: {
            default: null,
            type: cc.AudioClip
        },
        //��������
        overAudio: {
            default: null,
            type: cc.AudioClip
        },
        //����ѡ��restart��home
        option: {
            default: [],
            type: [cc.Prefab]
        },
        Home: {
            default: null,
            type: cc.Node
        },
        Pause: {
            default: null,
            type: cc.Node
        }
    },

    createOption: function createOption() {
        this.rabbit.getComponent("rabbit2").onDestroy();
        this.rabbit.runAction(this.setDown());
        //��ʱ
        this.scheduleOnce(function () {
            this.rabbit.stopAllActions();
            this.node.opacity = 150;
            this.Home.getComponent(cc.Button).interactable = false;
            this.Pause.getComponent(cc.Button).interactable = false;
            // ����������button
            var newOption1 = cc.instantiate(this.option[0]);
            var newOption2 = cc.instantiate(this.option[1]);
            // �������Ľڵ����ӵ� Canvas���ڵ�����
            this.node.parent.addChild(newOption1);
            this.node.parent.addChild(newOption2);
        }, 0.2);
    },

    setDown: function setDown() {
        var Pos = this.rabbit.getPosition();
        // ����
        var jumpDown = cc.moveTo(2, cc.v2(Pos.x, -500)).easing(cc.easeCubicActionOut());
        return jumpDown;
    },

    createStuff: function createStuff() {
        // �ڳ���������һ���½ڵ�
        var index = Math.floor(Math.random() * 8);
        var newStuff = cc.instantiate(this.stuff[index]);
        // �������Ľڵ����ӵ� Canvas �ڵ�����
        this.node.addChild(newStuff);
        // ��lauch������ݴ�game2���������
        newStuff.getComponent('lauch2').game2 = this;
        this.timer = 0;
    },

    gainScore: function gainScore() {
        this.carrotScore += 1;
        // ���� score Label ������
        this.score.string = 'x' + this.carrotScore;
    },

    playScoreSound: function playScoreSound() {
        // �����������沥������
        cc.audioEngine.playEffect(this.scoreAudio, false);
    },

    playOverSound: function playOverSound() {
        // �����������沥������
        cc.audioEngine.playEffect(this.overAudio, false);
    },

    onLoad: function onLoad() {
        //��ʱ��
        this.timer = 0;
        //����һ������
        this.createStuff();
        //����һ��ȫ�ֵķ�����������
        this.carrotScore = 0;
    },
    /**/
    update: function update(dt) {
        // ÿ֡���¼�ʱ��
        if (this.timer > this.timeInterval) {
            //����һ������
            this.createStuff();
            return;
        }
        this.timer += dt;
    },

    start: function start() {}
});

cc._RF.pop();
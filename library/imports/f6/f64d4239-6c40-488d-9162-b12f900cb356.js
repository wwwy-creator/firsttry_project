"use strict";
cc._RF.push(module, 'f64d4I5bEBIjZFisS+QDLNW', 'toDescribe');
// scripts/toDescribe.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        carrot1: {
            default: null,
            type: cc.Node
        },
        carrot2: {
            default: null,
            type: cc.Node
        },
        book1: {
            default: null,
            type: cc.Node
        },
        book2: {
            default: null,
            type: cc.Node
        },
        book: {
            default: [],
            type: [cc.Prefab]
        }
    },
    /**/
    descri1: function descri1() {
        //���ð�ť���ɱ����
        this.carrot1.getComponent(cc.Button).interactable = false;
        this.carrot2.getComponent(cc.Button).interactable = false;
        this.book2.getComponent(cc.Button).interactable = false;
        //����˵����
        var newDescri = cc.instantiate(this.book[0]);
        // �������Ľڵ����ӵ� Canvas �ڵ�����
        this.node.parent.parent.addChild(newDescri);
        this.node.parent.opacity = 150;
        // �ڷ���������ݴ�toDescribe���������
        newDescri.getComponent('toDestroy').toDescribe = this;
    },

    descri2: function descri2() {
        this.carrot1.getComponent(cc.Button).interactable = false;
        this.carrot2.getComponent(cc.Button).interactable = false;
        this.book1.getComponent(cc.Button).interactable = false;
        //����˵����
        var newDescri = cc.instantiate(this.book[1]);
        // �������Ľڵ����ӵ� Canvas �ڵ�����
        this.node.parent.parent.addChild(newDescri);
        this.node.parent.opacity = 150;
        // �ڷ���������ݴ�toDescribe���������
        newDescri.getComponent('toDestroy').toDescribe = this;
    },

    start: function start() {}
});

cc._RF.pop();
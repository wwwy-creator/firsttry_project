cc.Class({
    extends: cc.Component,

    properties: {
        close: {
            default: null,
            type: cc.Node
        }
    },

    toClose(event){
        //�ָ���ͣ�õİ�ť
        this.toDescribe.carrot1.getComponent(cc.Button).interactable = true;
        this.toDescribe.carrot2.getComponent(cc.Button).interactable = true;
        this.toDescribe.book1.getComponent(cc.Button).interactable = true;
        this.toDescribe.book2.getComponent(cc.Button).interactable = true;
        //���ٽڵ�
        this.node.destroy();
        this.toDescribe.node.parent.opacity = 255;//
    },

    onLoad: function () {
        this.close.on('mousedown', this.toClose, this);
    },

    start () {

    },

});

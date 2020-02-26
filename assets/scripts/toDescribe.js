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
    descri1: function () {
        //���ð�ť���ɱ����
        this.carrot1.getComponent(cc.Button).interactable = false;
        this.carrot2.getComponent(cc.Button).interactable = false;
        this.book2.getComponent(cc.Button).interactable = false;
        //����˵����
        var newDescri = cc.instantiate(this.book[0]);
        // �������Ľڵ���ӵ� Canvas �ڵ�����
        this.node.parent.parent.addChild(newDescri);
        this.node.parent.opacity = 150;
        // �ڷ���������ݴ�toDescribe���������
        newDescri.getComponent('destroy').toDescribe = this;
    },

    descri2: function () {
        this.carrot1.getComponent(cc.Button).interactable = false;
        this.carrot2.getComponent(cc.Button).interactable = false;
        this.book1.getComponent(cc.Button).interactable = false;
        //����˵����
        var newDescri = cc.instantiate(this.book[1]);
        // �������Ľڵ���ӵ� Canvas �ڵ�����
        this.node.parent.parent.addChild(newDescri);
        this.node.parent.opacity = 150;
        // �ڷ���������ݴ�toDescribe���������
        newDescri.getComponent('destroy').toDescribe = this;
    },
    /*
        descri2: function () {
        this.carrot1.getComponent(cc.Button).interactable = false;
        this.carrot2.getComponent(cc.Button).interactable = false;
        this.book1.getComponent(cc.Button).interactable = false;
        //����˵����
        var newDescri = cc.instantiate(this.book[1]);
        // �������Ľڵ���ӵ� Canvas �ڵ�����
        this.node.parent.addChild(newDescri);
        // �ڷ���������ݴ�toDescribe���������
        newDescri.getComponent('destroy').toDescribe = this;
    },
    */
    onLoad:function(){
        
    },


    start () {

    },

});

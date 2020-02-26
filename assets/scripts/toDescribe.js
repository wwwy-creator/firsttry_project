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
        //设置按钮不可被点击
        this.carrot1.getComponent(cc.Button).interactable = false;
        this.carrot2.getComponent(cc.Button).interactable = false;
        this.book2.getComponent(cc.Button).interactable = false;
        //生成说明书
        var newDescri = cc.instantiate(this.book[0]);
        // 将新增的节点添加到 Canvas 节点下面
        this.node.parent.parent.addChild(newDescri);
        this.node.parent.opacity = 150;
        // 在方块组件上暂存toDescribe对象的引用
        newDescri.getComponent('destroy').toDescribe = this;
    },

    descri2: function () {
        this.carrot1.getComponent(cc.Button).interactable = false;
        this.carrot2.getComponent(cc.Button).interactable = false;
        this.book1.getComponent(cc.Button).interactable = false;
        //生成说明书
        var newDescri = cc.instantiate(this.book[1]);
        // 将新增的节点添加到 Canvas 节点下面
        this.node.parent.parent.addChild(newDescri);
        this.node.parent.opacity = 150;
        // 在方块组件上暂存toDescribe对象的引用
        newDescri.getComponent('destroy').toDescribe = this;
    },
    /*
        descri2: function () {
        this.carrot1.getComponent(cc.Button).interactable = false;
        this.carrot2.getComponent(cc.Button).interactable = false;
        this.book1.getComponent(cc.Button).interactable = false;
        //生成说明书
        var newDescri = cc.instantiate(this.book[1]);
        // 将新增的节点添加到 Canvas 节点下面
        this.node.parent.addChild(newDescri);
        // 在方块组件上暂存toDescribe对象的引用
        newDescri.getComponent('destroy').toDescribe = this;
    },
    */
    onLoad:function(){
        
    },


    start () {

    },

});

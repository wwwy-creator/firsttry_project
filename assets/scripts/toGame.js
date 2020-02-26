cc.Class({
    extends: cc.Component,

    properties: {

    },
    //carrot1和carrot2button组件所触发的俩个函数
    toCarrot1:function(){
        cc.director.loadScene("game2");
    },

    toCarrot2: function () {
        cc.director.loadScene("game3");
    },
    start () {

    },

});

cc.Class({
    extends: cc.Component,

    properties: {

    },
    //carrot1��carrot2button�������������������
    toCarrot1:function(){
        cc.director.loadScene("game2");
    },

    toCarrot2: function () {
        cc.director.loadScene("game3");
    },
    start () {

    },

});

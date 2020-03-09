cc.Class({
    extends: cc.Component,

    properties: {

    },
    toHome: function () {
        cc.director.resume();
        cc.director.loadScene("game1");
    },

    toResart: function () {
        cc.director.loadScene("game3");
    },

    toPause: function () {
        if (this.flager == 0) {
            //暂停游戏：
            cc.director.pause();
            // 彻底暂停游戏，包含渲染、音频和事件：
            //  cc.Game.pause();
            this.flager += 1;
        }
        else {
            // 恢复游戏逻辑：
            cc.director.resume();
            this.flager -= 1;
        }
    },

    onLoad: function () {
        //定义一个暂停计量变量
        this.flager = 0;
    },
    start () {

    },

});

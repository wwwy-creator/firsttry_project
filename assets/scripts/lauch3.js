cc.Class({
    extends: cc.Component,
    //正式
    properties: {
        carrot: {
            default: null,
            type: cc.Label
        },
    },

    getDistance: function () {
        // 根据 rabbit 节点位置判断距离
        var rabbitPos = this.game3.rabbit.getPosition();
        // 根据两点位置计算两点之间距离
        var dist = this.node.position.sub(rabbitPos).mag();
        return dist;
    },

    onPicked: function () {
        //当兔子正确碰撞方块时
        if (this.carrot.string == "carrot") {
            // 得分音乐
            this.game3.playScoreSound();
            // 然后销毁当前星星节点
            this.node.destroy();
            //加分
            this.game3.gainScore();
        }
        else {
            this.game3.createOption();
        }
    },

//随机生成y方向的位置
    setPosY:function(){
        var Posy = Math.ceil(Math.random() * -4);
        this.node.y = 100 * Posy + 140;
    },

    onLoad: function () {
        this.setPosY();
    },

    update: function (dt) {
        if (this.node.x <465) {
            this.node.x += dt * 80;
        }
        else {
            this.node.destroy();
        };
        // 每帧判断和主角之间的距离是否小于收集距离
        if (this.getDistance() < 35) {
            // 调用收集行为
            this.onPicked();
        }
    },

    start () {

    },

});

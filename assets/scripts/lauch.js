cc.Class({
    extends: cc.Component,
    properties: {
        label: {
            default: null,
            type:cc.Label
        },
    },


    getDistance: function () {
        // 根据 rabbit 节点位置判断距离
        var rabbitPos = this.game2.rabbit.getPosition();
        // 根据两点位置计算两点之间距离
        var Pos=this.node.position;
        var dist = Pos.sub(rabbitPos).mag();
        return dist;
    },

    onPicked: function () {
        //当兔子正确碰撞萝卜时
        if (this.label.string =="carrot" ) {
            // 得分音乐
            this.game2.playScoreSound();
            //加分
            this.game2.gainScore();
            // 然后销毁当前节点
            this.node.destroy();
        }
        else {
           this.game2.createOption();
        }
    },

    update: function (dt) {
        if (this.node.x > -480) {
            this.node.x -= dt * this.game2.distance;
        }
        else {
            this.node.destroy();
        };
        // 每帧判断和主角之间的距离是否小于收集距离
        if (this.getDistance() < 50) {
            // 调用收集行为
            this.onPicked();
            return;
        }

    },


    start () {

    },

});

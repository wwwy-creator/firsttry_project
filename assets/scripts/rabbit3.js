cc.Class({
    extends: cc.Component,
    //正式
    properties: {
        //平移一次的距离
        toDistance: 0,
        //平移一次的时间
        toDuration: 0,
        //音乐
        jumpAudio: {
            default: null,
            type: cc.AudioClip
        },
    },


    playJumpSound: function () {
        // 调用声音引擎播放声音
        cc.audioEngine.playEffect(this.jumpAudio, false);
    },

    setDirection: function (name) {
        // 添加跳跃音乐
        var callback = cc.callFunc(this.playJumpSound, this);
        //左移
        if (name == "left") {
            var toLeft = cc.moveBy(this.toDuration, cc.v2(-this.toDistance, 0)).easing(cc.easeCubicActionOut());
            return cc.sequence(callback, toLeft);
        }
        else if (name == "right") {
            // 右移
            var toRight = cc.moveBy(this.toDuration, cc.v2(this.toDistance, 0)).easing(cc.easeCubicActionOut());
            return cc.sequence(callback, toRight);
        }
        else if (name == "up") {
            // 上移
            var toUp = cc.moveBy(this.toDuration, cc.v2(0, this.toDistance)).easing(cc.easeCubicActionOut());
            return cc.sequence(callback, toUp);
        }
        else{
            // 下移
            var toDown = cc.moveBy(this.toDuration, cc.v2(0, -this.toDistance)).easing(cc.easeCubicActionOut());
            return cc.sequence(callback, toDown);
        }
    },

    lrAction: function (toward) {
        // 添加跳跃音乐
        var callback = cc.callFunc(this.playJumpSound, this);
        if (toward == "left") {
            // 左移
            var toLeft = cc.moveBy(this.toDuration, cc.v2(-this.toDistance, 0)).easing(cc.easeCubicActionOut());
            return cc.sequence(callback, toLeft);
        }
        else {
            // 右移
            var toRight = cc.moveBy(this.toDuration, cc.v2(this.toDistance, 0)).easing(cc.easeCubicActionOut());
            return cc.sequence(callback, toRight);
        }
    },

    onKeyDown(event) {
        var keyName;
        //限制兔子不跑出视界
        var Pos = this.node.getPosition();
        switch (event.keyCode) {
            case cc.macro.KEY.a: {
                if (Pos.x > -350) {
                    keyName = "left";
                    this.node.runAction(this.setDirection(keyName));
                }
                break;
            };
            case cc.macro.KEY.d: {
                if (Pos.x < 440) {
                    keyName = "right";
                    this.node.runAction(this.setDirection(keyName));
                }
                break;
            }; 
            case cc.macro.KEY.h: {
                if (Pos.y < 220) {
                    keyName = "up";
                    this.node.runAction(this.setDirection(keyName));
                }
                break;
            };
            case cc.macro.KEY.k: {
                if (Pos.y > -180) {
                    keyName = "down";
                    this.node.runAction(this.setDirection(keyName));
                }
                break;
            };
        }
    },

    onLoad: function () {
        // 初始化键盘输入监听
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    },

    onDestroy() {
        // 取消键盘输入监听
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    },

    start () {

    },

    // update (dt) {},
});

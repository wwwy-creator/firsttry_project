cc.Class({
    extends: cc.Component,

    properties: {
        // 主角跳跃高度
        jumpHeight: 0,
        // 主角跳跃持续时间
        jumpDuration: 0,
        // 键盘按下后兔子的跳跃高度
        height: 0,
        //键盘按下后兔子的跳跃持续时间
        duration: 0,
        //为了俩种跳跃运动的连贯，设置时间倍数
        mutiplynum: 0,
        //跳跃音乐
        jumpAudio: {
            default: null,
            type: cc.AudioClip
        },
    },

    playJumpSound: function () {
        // 调用声音引擎播放声音
        cc.audioEngine.playEffect(this.jumpAudio, false);
    },

    setJumpAction: function () {
        // 添加跳跃音乐
        var callback = cc.callFunc(this.playJumpSound, this);
        // 跳跃上升
        var jumpUp = cc.moveBy(this.jumpDuration, cc.v2(0, this.jumpHeight)).easing(cc.easeCubicActionOut());
        // 下落
        var jumpDown = cc.moveBy(this.jumpDuration, cc.v2(0, -this.jumpHeight)).easing(cc.easeCubicActionIn());
        // 不断重复
        return cc.repeatForever(cc.sequence(callback, jumpUp, jumpDown));
    },

    setOneJumpAction: function () {
        // 添加跳跃音乐
        var callback = cc.callFunc(this.playJumpSound, this);
        // 跳跃上升
        var jumpUp = cc.moveBy(this.duration, cc.v2(0, this.height)).easing(cc.easeCubicActionOut());
        // 下落
        var jumpDown = cc.moveBy(this.duration, cc.v2(0, -this.height)).easing(cc.easeCubicActionOut());
        this.timer = 0;
        //连贯
        return cc.sequence(callback, jumpUp, jumpDown);
    },

    clickJump (event) {
        //防止连续点击出现连跳现象
        if (this.flag == false && this.timer < this.duration * this.mutiplynum - this.timer) {
            this.node.pauseSystemEvents();
            this.scheduleOnce(function () {
                this.node.resumeSystemEvents();
            }, (this.duration * this.mutiplynum - this.timer));
        }
        else {
            this.flag = false;
            //停掉原先的动作
            this.node.stopAllActions();
            this.node.setPosition(-340, -230);
            //开始新动作
            this.node.runAction(this.setOneJumpAction());
            //键盘released，等待onKeyDown动作结束后，恢复原先动作
            this.scheduleOnce(function () {
                this.node.stopAllActions();
                this.node.setPosition(-340, -230);
                this.node.runAction(this.setJumpAction());
                this.flag = true;
            }, (this.duration * this.mutiplynum - this.timer));
        }
    },

    onLoad: function () {
        //定时器
        this.timer = 0;
        this.flag = true;

        // 初始化跳跃动作
        this.node.runAction(this.setJumpAction());

        // 初始化键盘输入监听
        this.node.on('mousedown', this.clickJump , this);
    },

    onDestroy() {
        this.node.off('mousedown', this.clickJump, this);
    }

});

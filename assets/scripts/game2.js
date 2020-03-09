cc.Class({
    extends: cc.Component,

    properties: {
        //将萝卜和四个小怪物都放进数组
        stuff: {
            default: [],
            type: [cc.Prefab],
        },
        //生成 方块的时间间隔
        timeInterval: 0,
        //兔子节点
        rabbit: {
            default: null,
            type: cc.Node
        },
        //分数
        score: {
            default: null,
            type: cc.Label,
        },
        //每帧小怪物移动距离
        distance: 0,
        //得分音乐
        scoreAudio: {
            default: null,
            type: cc.AudioClip
        },
        //结束音乐
        overAudio: {
            default: null,
            type: cc.AudioClip
        },
        //两个选择，restart和home
        option: {
            default: [],
            type:[cc.Prefab]
        },
        Home: {
            default: null,
            type: cc.Node
        },
        Pause: {
            default: null,
            type: cc.Node
        },
    },

    createOption: function () {
        this.rabbit.getComponent("rabbit2").onDestroy();
        this.rabbit.runAction(this.setDown());
        //计时
        this.scheduleOnce(function () {
            this.rabbit.stopAllActions();
            this.node.opacity = 150;
            this.Home.getComponent(cc.Button).interactable = false;
            this.Pause.getComponent(cc.Button).interactable = false;
            // 生成两个新button
            var newOption1 = cc.instantiate(this.option[0]);
            var newOption2 = cc.instantiate(this.option[1]);
            // 将新增的节点添加到 Canvas父节点下面
            this.node.parent.addChild(newOption1);
            this.node.parent.addChild(newOption2);
        }, 0.2);
    },

    setDown: function () {
        var Pos = this.rabbit.getPosition();
        // 下落
        var jumpDown = cc.moveTo(2, cc.v2(Pos.x, -500)).easing(cc.easeCubicActionOut());
        return jumpDown;
    },

    createStuff: function () {
        // 在场景中生成一个新节点
        var index = Math.floor(Math.random() * 8);
        var newStuff = cc.instantiate(this.stuff[index]);
        // 将新增的节点添加到 Canvas 节点下面
        this.node.addChild(newStuff);
        // 在lauch组件上暂存game2对象的引用
        newStuff.getComponent('lauch2').game2 = this;
        this.timer = 0;
    },

    gainScore: function () {
        this.carrotScore += 1;
        // 更新 score Label 的文字
        this.score.string = 'x' + this.carrotScore;
    },

    playScoreSound: function () {
        // 调用声音引擎播放声音
        cc.audioEngine.playEffect(this.scoreAudio, false);
    },

    playOverSound: function () {
        // 调用声音引擎播放声音
        cc.audioEngine.playEffect(this.overAudio, false);
    },

    onLoad: function () {
        //计时器
        this.timer = 0;
        //生成一个方块
        this.createStuff();
        //定义一个全局的分数计量变量
        this.carrotScore = 0;
    },
    /**/
    update: function (dt) {
        // 每帧更新计时器
        if (this.timer > this.timeInterval) {
            //生成一个方块
            this.createStuff();
            return;
        }
        this.timer += dt;
    },

    start () {

    },

});

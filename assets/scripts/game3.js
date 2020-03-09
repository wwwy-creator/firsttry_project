cc.Class({
    extends: cc.Component,
    //��ʽ
    properties: {
        //���ܲ���С���ﶼ�Ž�����
        stuff: {
            default: [],
            type: [cc.Prefab],
        },
        //����stuffʱ����
        timeInterval: 0,
        //���ӽڵ�
        rabbit: {
            default: null,
            type: cc.Node
        },
        //����
        score: {
            default: null,
            type: cc.Label,
        },
        //�÷�����
        scoreAudio: {
            default: null,
            type: cc.AudioClip
        },
        //��������
        overAudio: {
            default: null,
            type: cc.AudioClip
        },
        option: {
            default: [],
            type: [cc.Prefab]
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
        this.rabbit.getComponent("rabbit3").onDestroy();
        this.rabbit.runAction(this.setDown());
        //��ʱ
        this.scheduleOnce(function () {
            this.rabbit.stopAllActions();
            this.node.opacity = 150;
            this.Home.getComponent(cc.Button).interactable = false;
            this.Pause.getComponent(cc.Button).interactable = false;
            // ����������button
            var newOption1 = cc.instantiate(this.option[0]);
            var newOption2 = cc.instantiate(this.option[1]);
            // �������Ľڵ���ӵ� Canvas���ڵ�����
            this.node.parent.addChild(newOption1);
            this.node.parent.addChild(newOption2);
        }, 0.2);
    },

    setDown: function () {
        var Pos = this.rabbit.getPosition();
        // ����
        var dropDown = cc.moveTo(2.5, cc.v2(Pos.x, -500)).easing(cc.easeCubicActionOut());
        return dropDown;
    },

    playScoreSound: function () {
        // �����������沥������
        cc.audioEngine.playEffect(this.scoreAudio, false);
    },

    playOverSound: function () {
        // �����������沥������
        cc.audioEngine.playEffect(this.overAudio, false);
    },

    createStuff: function () {
        // �ڳ���������һ���½ڵ�
        var index = Math.floor(Math.random() * 8);
        var newStuff = cc.instantiate(this.stuff[index]);
        // �������Ľڵ���ӵ� Canvas �ڵ�����
        this.node.addChild(newStuff);
        // �ڷ���������ݴ�game3���������
        newStuff.getComponent('lauch3').game3 = this;
        this.timer = 0;
    },

    gainScore: function () {
        this.carrotScore += 1;
        // ���� score Label ������
        this.score.string = 'x' + this.carrotScore;
    },

    onLoad: function () {
        //��ʱ��
        this.timer = 0;
        //����һ������
        this.createStuff();
        //����һ��ȫ�ֵķ�����������
        this.carrotScore = 0;
    },

    update: function (dt) {
        // ÿ֡���¼�ʱ��
        if (this.timer > this.timeInterval) {
            //����һ������
            this.createStuff();
            return;
        }
        this.timer += dt;
    },

    start () {

    },

});

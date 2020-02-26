cc.Class({
    extends: cc.Component,
    //��ʽ
    properties: {
        //ƽ��һ�εľ���
        toDistance: 0,
        //ƽ��һ�ε�ʱ��
        toDuration: 0,
        //����
        jumpAudio: {
            default: null,
            type: cc.AudioClip
        },
    },


    playJumpSound: function () {
        // �����������沥������
        cc.audioEngine.playEffect(this.jumpAudio, false);
    },

    setDirection: function (name) {
        // �����Ծ����
        var callback = cc.callFunc(this.playJumpSound, this);
        //����
        if (name == "left") {
            var toLeft = cc.moveBy(this.toDuration, cc.v2(-this.toDistance, 0)).easing(cc.easeCubicActionOut());
            return cc.sequence(callback, toLeft);
        }
        else if (name == "right") {
            // ����
            var toRight = cc.moveBy(this.toDuration, cc.v2(this.toDistance, 0)).easing(cc.easeCubicActionOut());
            return cc.sequence(callback, toRight);
        }
        else if (name == "up") {
            // ����
            var toUp = cc.moveBy(this.toDuration, cc.v2(0, this.toDistance)).easing(cc.easeCubicActionOut());
            return cc.sequence(callback, toUp);
        }
        else{
            // ����
            var toDown = cc.moveBy(this.toDuration, cc.v2(0, -this.toDistance)).easing(cc.easeCubicActionOut());
            return cc.sequence(callback, toDown);
        }
    },

    lrAction: function (toward) {
        // �����Ծ����
        var callback = cc.callFunc(this.playJumpSound, this);
        if (toward == "left") {
            // ����
            var toLeft = cc.moveBy(this.toDuration, cc.v2(-this.toDistance, 0)).easing(cc.easeCubicActionOut());
            return cc.sequence(callback, toLeft);
        }
        else {
            // ����
            var toRight = cc.moveBy(this.toDuration, cc.v2(this.toDistance, 0)).easing(cc.easeCubicActionOut());
            return cc.sequence(callback, toRight);
        }
    },

    onKeyDown(event) {
        var keyName;
        //�������Ӳ��ܳ��ӽ�
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
        // ��ʼ�������������
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    },

    onDestroy() {
        // ȡ�������������
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    },

    start () {

    },

    // update (dt) {},
});

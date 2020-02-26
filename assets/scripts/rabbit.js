cc.Class({
    extends: cc.Component,

    properties: {
        // ������Ծ�߶�
        jumpHeight: 0,
        // ������Ծ����ʱ��
        jumpDuration: 0,
        // ���̰��º����ӵ���Ծ�߶�
        height: 0,
        //���̰��º����ӵ���Ծ����ʱ��
        duration: 0,
        //Ϊ��������Ծ�˶������ᣬ����ʱ�䱶��
        mutiplynum: 0,
        //��Ծ����
        jumpAudio: {
            default: null,
            type: cc.AudioClip
        },
    },
    playJumpSound: function () {
        // �����������沥������
        cc.audioEngine.playEffect(this.jumpAudio, false);
    },

    setJumpAction: function () {
        // �����Ծ����
        var callback = cc.callFunc(this.playJumpSound, this);
        // ��Ծ����
        var jumpUp = cc.moveBy(this.jumpDuration, cc.v2(0, this.jumpHeight)).easing(cc.easeCubicActionOut());
        // ����
        var jumpDown = cc.moveBy(this.jumpDuration, cc.v2(0, -this.jumpHeight)).easing(cc.easeCubicActionIn());
        // �����ظ�
        return cc.repeatForever(cc.sequence(callback, jumpUp, jumpDown));
        this.timer = 0;
    },
    /**/
    setOneJumpAction: function () {
        // �����Ծ����
        var callback = cc.callFunc(this.playJumpSound, this);
        // ��Ծ����
        var jumpUp = cc.moveBy(this.duration, cc.v2(0, this.height)).easing(cc.easeCubicActionOut());
        // ����
        var jumpDown = cc.moveBy(this.duration, cc.v2(0, -this.height)).easing(cc.easeCubicActionOut());
        //����
        return cc.sequence(callback, jumpUp, jumpDown);
        this.timer = 0;
    },

//����������⣬��������s����С������Ծ����
    onKeyDown (event) {
        // set a flag when key pressed
        switch (event.keyCode) {
            case cc.macro.KEY.s: {
                //ͣ��ԭ�ȵĶ���
                this.node.stopAllActions();
                this.node.setPosition(-340, -230);
                //��ʼ�¶���
                this.node.runAction(this.setOneJumpAction());
                break;
            };
        }
    },
    
    onKeyUp (event) {
        // unset a flag when key released
        switch (event.keyCode) {
            case cc.macro.KEY.s: {
                //����released���ȴ�onKeyDown���������󣬻ָ�ԭ�ȶ���
                this.scheduleOnce(function () {
                    this.node.stopAllActions();
                    this.node.setPosition(-340, -230);
                    this.node.runAction(this.setJumpAction());
                }, (this.duration * this.mutiplynum - this.timer));
                break;
            };
        };
    },

    onLoad: function () {
        //��ʱ��
        this.timer = 0;

        // ��ʼ����Ծ����
        this.node.runAction(this.setJumpAction());

        // ��ʼ�������������
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },

    onDestroy () {
       // ȡ�������������
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },

    start () {

    },

});

cc.Class({
    extends: cc.Component,

    properties: {
        //��������
        audio: {
            default: null,
            type: cc.AudioClip
        },
    },
    /* */
    playMus: function () {
        if (this.flager == 0) {
            //��������
            cc.audioEngine.playMusic(this.audio, true);
            this.flager += 1;
        }
        else {
            //ֹͣ����
            cc.audioEngine.pauseMusic();
            this.flager -= 1;
        }
    },

    onLoad: function () {
        //����һ����ͣ��������
        this.flager = 0;
        cc.audioEngine.playMusic(this.audio, true);
    },

    start () {

    },

});

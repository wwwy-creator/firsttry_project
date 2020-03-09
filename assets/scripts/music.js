cc.Class({
    extends: cc.Component,

    properties: {
        //背景音乐
        audio: {
            default: null,
            type: cc.AudioClip
        },
    },
    /* */
    playMus: function () {
        if (this.flager == 0) {
            //播放音乐
            cc.audioEngine.playMusic(this.audio, true);
            this.flager += 1;
        }
        else {
            //停止音乐
            cc.audioEngine.pauseMusic();
            this.flager -= 1;
        }
    },

    onLoad: function () {
        //定义一个暂停计量变量
        this.flager = 0;
        cc.audioEngine.playMusic(this.audio, true);
    },

    start () {

    },

});

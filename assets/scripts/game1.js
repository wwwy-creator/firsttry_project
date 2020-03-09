cc.Class({
    extends: cc.Component,

    properties: {
        //±≥æ∞“Ù¿÷
        audio: {
            default: null,
            type: cc.AudioClip
        },
    },

    onLoad: function () {
        cc.audioEngine.playMusic(this.audio, true);
    },

    start () {

    },


});

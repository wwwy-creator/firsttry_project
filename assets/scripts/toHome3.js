cc.Class({
    extends: cc.Component,

    properties: {

    },
    toHome: function () {
        cc.director.resume();
        cc.director.loadScene("game1");
    },

    toResart: function () {
        cc.director.loadScene("game3");
    },

    toPause: function () {
        if (this.flager == 0) {
            //��ͣ��Ϸ��
            cc.director.pause();
            // ������ͣ��Ϸ��������Ⱦ����Ƶ���¼���
            //  cc.Game.pause();
            this.flager += 1;
        }
        else {
            // �ָ���Ϸ�߼���
            cc.director.resume();
            this.flager -= 1;
        }
    },

    onLoad: function () {
        //����һ����ͣ��������
        this.flager = 0;
    },
    start () {

    },

});

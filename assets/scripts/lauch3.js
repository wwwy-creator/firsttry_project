cc.Class({
    extends: cc.Component,
    //��ʽ
    properties: {
        carrot: {
            default: null,
            type: cc.Label
        },
    },

    getDistance: function () {
        // ���� rabbit �ڵ�λ���жϾ���
        var rabbitPos = this.game3.rabbit.getPosition();
        // ��������λ�ü�������֮�����
        var dist = this.node.position.sub(rabbitPos).mag();
        return dist;
    },

    onPicked: function () {
        //��������ȷ��ײ����ʱ
        if (this.carrot.string == "carrot") {
            // �÷�����
            this.game3.playScoreSound();
            // Ȼ�����ٵ�ǰ���ǽڵ�
            this.node.destroy();
            //�ӷ�
            this.game3.gainScore();
        }
        else {
            this.game3.createOption();
        }
    },

//�������y�����λ��
    setPosY:function(){
        var Posy = Math.ceil(Math.random() * -4);
        this.node.y = 100 * Posy + 140;
    },

    onLoad: function () {
        this.setPosY();
    },

    update: function (dt) {
        if (this.node.x <465) {
            this.node.x += dt * 80;
        }
        else {
            this.node.destroy();
        };
        // ÿ֡�жϺ�����֮��ľ����Ƿ�С���ռ�����
        if (this.getDistance() < 35) {
            // �����ռ���Ϊ
            this.onPicked();
        }
    },

    start () {

    },

});

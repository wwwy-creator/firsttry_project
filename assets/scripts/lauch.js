cc.Class({
    extends: cc.Component,
    properties: {
        label: {
            default: null,
            type:cc.Label
        },
    },


    getDistance: function () {
        // ���� rabbit �ڵ�λ���жϾ���
        var rabbitPos = this.game2.rabbit.getPosition();
        // ��������λ�ü�������֮�����
        var Pos=this.node.position;
        var dist = Pos.sub(rabbitPos).mag();
        return dist;
    },

    onPicked: function () {
        //��������ȷ��ײ�ܲ�ʱ
        if (this.label.string =="carrot" ) {
            // �÷�����
            this.game2.playScoreSound();
            //�ӷ�
            this.game2.gainScore();
            // Ȼ�����ٵ�ǰ�ڵ�
            this.node.destroy();
        }
        else {
           this.game2.createOption();
        }
    },

    update: function (dt) {
        if (this.node.x > -480) {
            this.node.x -= dt * this.game2.distance;
        }
        else {
            this.node.destroy();
        };
        // ÿ֡�жϺ�����֮��ľ����Ƿ�С���ռ�����
        if (this.getDistance() < 50) {
            // �����ռ���Ϊ
            this.onPicked();
            return;
        }

    },


    start () {

    },

});

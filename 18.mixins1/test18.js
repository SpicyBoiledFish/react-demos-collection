/**
 * Created by RWang on 2016/7/29.
 */

var Mixin = {
    log:function(){
        console.log('Mixin log');
    }
};

var Component = React.createClass({
    mixins: [Mixin],
    componentWillMount: function () {
        this.log();
    },
    render: function () {
        return (
            <div>Component</div>
        )
    }
});

ReactDOM.render(
    <Component />,
    document.getElementById('example')
);

{/* �������Mixins������
    ��Minxin��װ��һ��log������Ȼ����ʹ��componentWillMount��ʱ��������log()����
    ��Ⱦ�����Ŀ���̨����ǣ�Mixin log */}
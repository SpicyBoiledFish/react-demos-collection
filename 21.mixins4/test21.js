/**
 * Created by RWang on 2016/8/2.
 */
var AMixin = {
    log: function () {
        console.log('AMixin Log');
    }
};

var BMixin = {
    log: function () {
        console.log('BMixin Log');
    }
};

var Component = React.createClass({
    mixins: [AMixin,BMixin],
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

{/*�˳��򽫻ᱨ��ԭ������ʹ��mixin�У������������ڷ��������ظ����⣬�����������������ظ�
   ����������У�ʹ��������log�������ǲ������
*/}
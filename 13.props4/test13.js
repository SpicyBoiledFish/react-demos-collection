/**
 * Created by RWang on 2016/7/28.
 */
var Hello = React.createClass({
    render: function () {
        return (
            <div>no</div>
        )
    }
});

ReactDOM.render(
    <Hello>
        <p>content</p>
    </Hello>,
    document.getElementById('example')
);


{/*��Ⱦ������DOM�ṹ��<div>no</div,��������������Ⱦ�����Ľ����content��
��ô��Hello����е�return��������Ӧ��д��return(<div>{this.props.children}</div>)*/}
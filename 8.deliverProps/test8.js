/**
 * Created by RWang on 2016/7/27.
 */
var HelloWorld = React.createClass({
    render: function() {
        return (
            <div>Hello, {this.props.name1}, {this.props.name2}</div>
        );
    }
});

var hahha = {
    name1: 'Jack',
    name2: 'Tom'
};

ReactDOM.render(
    <HelloWorld {...hahha}/>,
    document.getElementById('example')
);

{/*
...props�൱��name1="Jack" name2="Tom"�������������ʾ��
ReactDOM.render(
    <HelloWorld {...props}/>,
    document.getElementById('example')
);
�����props���Զ���ı������������Լ�ȡ����
*/}
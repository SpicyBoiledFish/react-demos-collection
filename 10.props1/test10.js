/**
 * Created by RWang on 2016/7/28.
 */
var HelloWorld = React.createClass({
    render: function () {
        return (
            <div data-title={this.props.title}>{JSON.stringify(this.props)}</div>
        );
    }
});

ReactDOM.render(
    <HelloWorld title="this is title" content="this is content"/>,
    document.getElementById('example')
);

{/*ע�⣺�����this.props�൱�ڴӸ�����������������������Լ��ϣ�JSON.stringify(this.props)���ǰ���Щ���Լ�����ֵת����JSON��ʽ���ַ���*/}
/**
 * Created by RWang on 2016/7/28.
 */
var HelloWorld = React.createClass({
    render: function () {
        return (
            <div>
                {
                    this.props.children.map(function (child) {
                        return child;
                    })}
            </div>
        )
        {/*���ӽڵ�ֻ��һ����ʱ��ֱ��ͨ��this.props.children��ȡ�ӽڵ㡣���ӽڵ�ĸ�������1��this.props.children��һ�����顣��ʱ������������ʾ��12*/}
    }
});

ReactDOM.render(
    <HelloWorld title="this is title">
        <span>1</span>
        <span>2</span>
    </HelloWorld>,
    document.getElementById('example')
);
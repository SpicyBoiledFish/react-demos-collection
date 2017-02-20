/**
 * Created by RWang on 2016/7/28.
 */
var RenderComponent = React.createClass({
    render: function () {
        return (
            <ul>
                {
                    this.props['data-list'].map(function (item,key) {
                        return (<li>{item}</li>)
                    })
                }
            </ul>
        )
        {/*this.propsȡ���ǴӸ������ݹ��������е�������������ֵ��this.props['data-list']��˼����Ҫȡ���data-list����*/}
    }
});


var StateComponent = React.createClass({
    getInitialState: function () {
        return {list: ['xxx', 'yyy']};
    },
    render: function () {
        return (
            <div>
                <button onClick={this.handleClick}>click</button>
                <RenderComponent data-list={this.state.list} data-my='my'/>
            </div>

        )
    },
    handleClick: function () {
        this.setState({list: [1, 2, 3]});
    }
});

ReactDOM.render(
    <StateComponent />,
    document.getElementById('example')
);
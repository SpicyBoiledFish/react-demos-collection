/**
 * Created by RWang on 2016/7/22.
 */

var UpdateInput = React.createClass({

    getInitialState: function(){
        return ({value: 'Hello!'});
    },
    handleChange:function(event){
        this.setState({value: event.target.value.substr(0, 5)});
        {/* ��һ�����ָ���ǽ�ȡ�û������ַ����е�ǰ��λ���������ַ�����5*/}
    },
    render:function(){
        var value = this.state.value;
        return (<input type="text" value={value} onChange={this.handleChange} />);
    }
});


ReactDOM.render(
    <UpdateInput />,
    document.getElementById('example')
);
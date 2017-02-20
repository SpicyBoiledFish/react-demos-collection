/**
 * Created by RWang on 2016/8/2.
 */
{/*Mixins��Ҳ���Ա�д����������ڵķ�������Ҫע����ǣ�Mixins��ķ��������Ḳ��������������ڷ�����������������������ڷ���ִ�С�*/}

var Mixin = {
    componentWillMount:function(){
        console.log('Mixin will Mount');
    }
};

var Component = React.createClass({
    mixins:[Mixin],
    componentWillMount:function(){
        console.log('Component will Mount');
    },
    render:function(){
        return(<div>Component</div>);
    }
});

ReactDOM.render(
    <Component />,
    document.getElementById('example')
);

{/* ִ�еĽ����
    Mixin will Mount
    Component will Mount
    */}
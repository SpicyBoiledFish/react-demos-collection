/**
 * Created by RWang on 2016/8/2.
 */

var Amixin = {
    componentWillMount:function(){
        console.log('Amixin will Mount');
    }
};

var Bmixin = {
    componentWillMount:function(){
        console.log('Bmixin will Mount');
    }
};

var Component = React.createClass({
    mixins:[Bmixin,Amixin],
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

{/*
   ����ʹ�ö��mixin��ע�⣺���������˳�������mixin�����������ڷ���ִ�е�˳��
   ִ�н���ǣ�
   Bmixin will Mount
   Amixin will Mount
   Component will Mount
*/}
/**
 * Created by RWang on 2016/7/22.
 */
var DefaultValue = React.createClass({
    render:function(){
        return(
            <div>
                <input type="radio" name="opt" defaultChecked /> Option1
                <input type="radio" name="opt" /> Option2 &nbsp;
                <select multiple={true} value={['B','C']}>
                    {/*��value����һ�����飬�����ѡ�ж��ѡ��*/}
                    <option value="A">Apple</option>
                    <option value="B">Banana</option>
                    <option value="C">Purple</option>
                </select>&nbsp;&middot;
                {/*&middot; �������ת���ַ����ڽ�������ʾΪһ��С��*/}
                <select defaultValue="C">
                    {/*��value��ʼ��һ��ѡ��*/}
                    <option value="A">Apple</option>
                    <option value="B">Banana</option>
                    <option value="C">Purple</option>
                </select>
                {'First �� Second'}   {/*����������У��м��С�������ʶ����*/}
                <br/>
                {'First \u00b7 Second'}
                {'First ' + String.fromCharCode(183) + ' Second'}
                <br/>

               {['First ', <span>&middot;</span>, ' Second']}
            </div>
        );
    }
});

ReactDOM.render(
    <DefaultValue />,
    document.getElementById('example')
);
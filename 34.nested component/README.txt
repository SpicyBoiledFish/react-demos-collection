����������У�ע�⣺�ڴ��������ʱ��ÿһ��child���������������Ҫ��һ��key
render:function(){
                var arr = [];
                for(var i=0; i < 10; i++){
                    arr.push(
                            <SubMessage key={i}/>
                    );
                }
                return(
                        <div>
                            <h1 onClick={this.alertHahh}>��ã����磡����</h1>
                            {arr}
                        </div>
                );
            }
���⣬��render��Ⱦ��HTML�У������������ǩ�Ļ�����Ҫ��<div></div>���������а���
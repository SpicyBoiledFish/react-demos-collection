1. ��ʱ��ReactDOM.render�����һ����Ⱦ��������һ������var my = ......
��������Ŀ���̨��ֱ�ӵ���my,������titleMessage����ʵʱ���µ������ҳ����
my.setState({titleMessage:'�۹���������'})��
����س���ҳ���titleMessage��ʵʱ������Ӧ�ı�

2. ��ʱ������ڿ���̨��д��
my.state.isVisible = false
������ҳ������ʾȴ����Ȼ��ʾ����û����ʧ��
��React���������API�н��������Բ�Ҫֱ�Ӹı� this.state����Ϊ��֮����� setState() ���ܻ��滻�������ĸ��ġ�
�� this.state �������ɱ�ġ�һ������£����ʹ����state�����ĵĻ�����Ҫmy.forceUpdate()���������������
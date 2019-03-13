import React from 'react';
import { View, Text } from 'react-native';
import BaseComponent from "./BaseComponent";
import NavigationView from 'react-native-cz-navigationview';
import StatusView from 'react-native-cz-statusview';

export default class CustomStatusView extends BaseComponent{

    /************************** 生命周期 **************************/
    constructor(props) {
        super(props);
        this.initializeParams();
    }
    /************************** 继承方法 **************************/
    /************************** 通知 **************************/
    /************************** 创建视图 **************************/
    /************************** 网络请求 **************************/
    /************************** 自定义方法 **************************/
    /*
    * 初始化参数
    * */
    initializeParams() {
        this.state = {
            title: '标题'
        }
    }
    /************************** 子组件回调方法 **************************/
    /************************** 外部调用方法 **************************/
    /************************** List相关方法 **************************/
    /************************** Render中方法 **************************/
    _onPress = () => {
        this.statusView.modifyShowStatusView({'image': null, 'title': '修改标题', 'content': '修改内容', 'titleStyle': {'fontSize': 30}, 'contentStyle': {'color': 'blue'}});
    }

    render() {
        const { title } = this.state;

        return (
            <View style={[{flex: 1}]}>
                <NavigationView
                    title={'StatusView'}
                    back={this._back}
                />
                <View style={[{flex: 1}]}>
                    <View>
                        <Text>底部有文本信息</Text>
                    </View>
                    <StatusView
                        evaluateView={ (statusView) => {this.statusView = statusView} }
                        title={title}
                        content={'内容1111'}
                        image={require('./images/default_image_pikaqiu.png')}
                        imageWidth={120}
                        imageHeight={92}
                    />
                </View>
                <Text onPress={this._onPress} style={[{height: 50}]}>测试</Text>
            </View>
        )
    }
}
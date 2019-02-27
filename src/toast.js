import React, { Component } from 'react';
import { View, Text } from 'react-native';
import NavigationView from 'react-native-cz-navigationview';
import Toast from 'react-native-cz-toast';

export default class ToastView extends Component{

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

    }
    /************************** 子组件回调方法 **************************/
    /************************** 外部调用方法 **************************/
    /************************** List相关方法 **************************/
    /************************** Render中方法 **************************/

    _showToast = (type) => {
        Toast.show('显示第' + type + 'Toast');
    }

    render() {
        return (
            <View>
                <NavigationView
                    title={'Toast'}
                    back={this._back}
                />
                <Text onPress={this._showToast.bind(this,1)} style={[{height: 40}]}>显示第一个Toast</Text>
                <Text onPress={this._showToast.bind(this,2)} style={[{height: 40}]}>显示第二个Toast</Text>
                <Text onPress={this._showToast.bind(this,3)} style={[{height: 40}]}>显示第三个Toast</Text>
            </View>
        )
    }
}
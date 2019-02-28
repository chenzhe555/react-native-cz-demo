import React from 'react';
import { View, Text } from 'react-native';
import BaseComponent from "./BaseComponent";
import NavigationView from 'react-native-cz-navigationview';
import Permission from "react-native-cz-permission";

export default class PermissionView extends BaseComponent{

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

    _onPress1 = () => {
        Permission.checkPushNotification((result) => {
            console.log(result == 1 ? '已开启' : '未开启');
        });
    }

    _onPress2 = () => {
        Permission.openPushNotification((result) => {
            console.log(result == 1 ? '可打开' : '不可打开');
        });
    }

    _onPress3 = () => {
        Permission.checkCamera((result, type) => {
            console.log(result == 1 ? '已开启' : '未开启');
            console.log('相册类型: ' + type);
        });
    }

    _onPress4 = () => {
        Permission.openCamera((result) => {
            console.log(result == 1 ? '可打开' : '不可打开');
        });
    }

    render() {
        return (
            <View>
                <NavigationView
                    title={'Permission'}
                    back={this._back}
                />
                <Text style={[{marginTop: 30}]} onPress={this._onPress1}>检验是否打开通知</Text>
                <Text style={[{marginTop: 30}]} onPress={this._onPress2}>打开通知设置页面</Text>
                <Text style={[{marginTop: 30}]} onPress={this._onPress3}>检验是否开启相机</Text>
                <Text style={[{marginTop: 30}]} onPress={this._onPress4}>打开相机设置页面</Text>
            </View>
        )
    }
}
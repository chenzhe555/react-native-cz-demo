import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import NavigationView from 'react-native-cz-navigationview';
import BaseComponent from "./BaseComponent";
import CustomAlertView from './customalertview';

export default class AlertView extends BaseComponent{

    /************************** 生命周期 **************************/
    constructor(props) {
        super(props);
    }
    /************************** 继承方法 **************************/
    /************************** 通知 **************************/
    /************************** 创建视图 **************************/
    /************************** 网络请求 **************************/
    /************************** 自定义方法 **************************/
    /************************** 子组件回调方法 **************************/
    /************************** 外部调用方法 **************************/
    /************************** List相关方法 **************************/
    /************************** Render中方法 **************************/
    _showAlert = (type) => {
        if (type == 1) {
            this.alertView.show({'type': 1});
        } else if (type == 2) {
            this.alertView.show({'type': 1, 'title': '标题', 'content': '内容', 'buttons': ['数组'], 'cancel': '取消'});
        } else if (type == 3) {
            this.alertView.show({'type': 2});
        } else if (type == 4) {
            this.alertView.show({'type': 2,'title': '标题', 'content': '内容', 'buttons': ['再想想', '确定']});
        }
    }

    _buttonClicked = (index) => {
        console.log('点击了第' + index + '按钮');
        this.alertView.hide();
    }


    render() {
        return (
            <View>
                <NavigationView
                    title={'AlertView'}
                    back={this._back}
                />
                <CustomAlertView
                    evaluateView={ (alertView) => {this.alertView = alertView}}
                    type={2}
                    title={'测试标题'}
                    content={'测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容'}
                    buttonClicked={this._buttonClicked}
                    buttons={['再想想', '确定']}
                    cancel={''}
                    defaultColor={'blue'}
                />
                <Text onPress={this._showAlert.bind(this,1)} style={[{height: 40}]}>type=1 : 不修改显示信息</Text>
                <Text onPress={this._showAlert.bind(this,2)} style={[{height: 40}]}>type=1 : 修改显示信息</Text>
                <Text onPress={this._showAlert.bind(this,3)} style={[{height: 40}]}>type=2 : 不修改显示信息</Text>
                <Text onPress={this._showAlert.bind(this,4)} style={[{height: 40}]}>type=2 : 修改显示信息</Text>
            </View>
        )
    }
}

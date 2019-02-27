import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CustomNavigationView from 'react-native-cz-navigationview';
import BaseComponent from "./BaseComponent";

export default class NavigationView extends BaseComponent{
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

    _rightButtonClicked = () => {
        this.customNavigationView.modifyTitle('');
    }
    /************************** 子组件回调方法 **************************/
    /************************** 外部调用方法 **************************/
    /************************** List相关方法 **************************/
    /************************** Render中方法 **************************/



    render() {
        let rightView = (
            <Text onPress={this._rightButtonClicked}>修改标题</Text>
        );

        return (
            <View>
                <CustomNavigationView
                    evaluateView={ (customNavigationView) => {this.customNavigationView = customNavigationView} }
                    title={'NavigationView'}
                    back={this._back}
                    backTitle={'返回'}
                    rightView={rightView}
                    topSpace={100}
                />
            </View>
        )
    }
}

import React, {Component} from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Platform } from 'react-native';
import NavigationView from 'react-native-cz-navigationview';
import BaseComponent from "./BaseComponent";

import AlertView from './alertview';

export default class AppMain extends BaseComponent{

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
            list: [
                'RN 显示日志仪表盘: react-native-cz-panel',
                'RN 图片加载默认图: react-native-cz-image-placeholder',
                'RN Toast: react-native-cz-toast',
                'RN Loading: react-native-cz-loading',
                'RN Button: react-native-cz-button',
                'RN TextInput: react-native-cz-inputtext',
                'RN 日历: react-native-cz-calendar',
                'RN 类支付宝日历: react-native-cz-alipay-calendar',
                'RN 基于FlatList的上下拉刷新组件: react-native-cz-flatlist',
                'RN 滚动/固定Tab栏: react-native-cz-scroll-tab',
                'RN 通用Modal: react-native-cz-common-modal',
                'RN 导航栏: react-native-cz-navigationview',
                'RN App权限: react-native-cz-permission',
                'RN Alert: react-native-cz-alertview',
                'RN 红点: react-native-cz-reddot',
                'JS utils: js-cz-utils'
                ]
        }
    }
    /************************** 子组件回调方法 **************************/
    /************************** 外部调用方法 **************************/
    /************************** List相关方法 **************************/
    _renderItem = (item) => {
        return (
            <TouchableOpacity onPress={this._onPress.bind(this,item.index)}>
                <View style={[{height: 40}]}>
                    <Text>{item.item}</Text>
                </View>
            </TouchableOpacity>
        )
    }


    _onPress = (index) => {
        if (index == 0) {
            this.pushVC('PanelView');
        } else if (index == 1) {
            this.pushVC('ImagePlaceholderView');
        } else if (index == 2) {
            this.pushVC('ToastView');
        } else if (index == 3) {
            this.pushVC('LoadingView');
        } else if (index == 4) {
            this.pushVC('ButtonView');
        } else if (index == 5) {
            this.pushVC('TextInputView');
        } else if (index == 6) {
            this.pushVC('CalendarView');
        } else if (index == 7) {
            this.pushVC('AlipayCalendarView');
        } else if (index == 8) {

        } else if (index == 9) {
            this.pushVC('ScrollTabView');
        } else if (index == 10) {
            this.pushVC('CommonModalView');
        } else if (index == 11) {
            this.pushVC('NavigationView');
        } else if (index == 12) {
            this.pushVC('PermissionView');
        } else if (index == 13) {
            this.pushVC('AlertView');
        } else if (index == 14) {
            this.pushVC('ReddotView');
        } else if (index == 15) {
            this.pushVC('JSUtilsView');
        }
    }
    /************************** Render中方法 **************************/


    render() {
        const { list } = this.state;

        return (
            <View style={[styles.MainView]}>
                <NavigationView
                    title={'首页'}
                    isNotBack={true}
                />
                <FlatList
                    data={list}
                    renderItem={this._renderItem}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    MainView: {
        flex: 1,
        backgroundColor: 'white'
    }
})


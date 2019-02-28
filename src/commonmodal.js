import React from 'react';
import { View, Text } from 'react-native';
import BaseComponent from "./BaseComponent";
import NavigationView from 'react-native-cz-navigationview';
import CommonModal from 'react-native-cz-common-modal';

export default class CommonModalView extends BaseComponent{

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
        CommonModal.show(
            <View style={[{backgroundColor: 'red', position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, justifyContent: 'center', alignItems: 'center'}]}>
                <Text onPress={ () => {CommonModal.hide();} }>点击隐藏</Text>
            </View>
        );
    }

    _onPress2 = () => {
        CommonModal.show(
            <View style={[{backgroundColor: 'red', position: 'absolute', top: 200, left: 0, bottom: 0, right: 0, justifyContent: 'center', alignItems: 'center'}]}>
                <Text onPress={ () => {CommonModal.hide();} }>点击隐藏</Text>
            </View>
        );
    }

    render() {
        return (
            <View>
                <NavigationView
                    title={'CommonModal'}
                    back={this._back}
                />
                <Text style={[{marginTop: 30}]} onPress={this._onPress1}>显示一个全屏视图</Text>
                <Text style={[{marginTop: 30}]} onPress={this._onPress2}>显示一个非全屏视图</Text>
            </View>
        )
    }
}
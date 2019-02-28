import React from 'react';
import { View, Text } from 'react-native';
import BaseComponent from "./BaseComponent";
import NavigationView from 'react-native-cz-navigationview';

export default class JSUtilsView extends BaseComponent{

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

    render() {
        return (
            <View>
                <NavigationView
                    title={'JSUtils'}
                    back={this._back}
                />
            </View>
        )
    }
}
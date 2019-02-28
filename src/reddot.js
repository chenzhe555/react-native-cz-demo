import React from 'react';
import { View, Text } from 'react-native';
import BaseComponent from "./BaseComponent";
import NavigationView from 'react-native-cz-navigationview';
import RedDot from "react-native-cz-reddot";

export default class ReddotView extends BaseComponent{

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
        this.redDot.modifyCount(110);
    }

    _onPress2 = () => {
        console.log('红点测试1红点实际数量为: ' + this.redDot.getCount());
    }

    render() {
        return (
            <View>
                <NavigationView
                    title={'Reddot'}
                    back={this._back}
                />
                <View style={[{marginTop: 50, width: 70, marginLeft: 50}]}>
                    <Text style={[{fontSize: 14}]}>红点测试1</Text>
                    <RedDot
                        type={1}
                        text={1}
                        evaluateView={ (redDot) => {this.redDot = redDot} }
                    />
                </View>
                <View style={[{marginTop: 50, width: 70, marginLeft: 50}]}>
                    <Text style={[{fontSize: 14}]}>红点测试2</Text>
                    <RedDot
                        type={2}
                        text={1}
                    />
                </View>
                <Text style={[{marginTop: 30}]} onPress={this._onPress1}>修改红点测试1的红点数为110</Text>
                <Text style={[{marginTop: 30}]} onPress={this._onPress2}>输出红点测试2的红点数</Text>
            </View>
        )
    }
}
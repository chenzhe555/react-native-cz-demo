import React from 'react';
import { View, Text } from 'react-native';
import BaseComponent from "./BaseComponent";
import NavigationView from 'react-native-cz-navigationview';
import Button from 'react-native-cz-button';

export default class ButtonView extends BaseComponent{

    /************************** 生命周期 **************************/
    constructor(props) {
        super(props);
        this.initializeParams();
        global.buttonCommonFunc = () => {
            console.log('所有按钮方法执行前都会执行 buttonCommonFunc ');
        };
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
        console.log('按钮1事件');
    }

    _onPress2 = () => {
        console.log('按钮1解锁');
        this.button.modifyLockOpenStatus(1);
    }

    render() {
        return (
            <View>
                <NavigationView
                    title={'Button'}
                    back={this._back}
                />
                <Button
                    mainStyle={{marginTop: 20, marginLeft: 20, marginRight: 20}}
                    evaluateView={ (button) => {this.button = button}}
                    type={1}
                    lock={true}
                    onPress={this._onPress1}
                    text={'按钮1 type=1 lock=true'}
                    textStyle={{fontSize: 20}}
                />

                <Button
                    mainStyle={{marginTop: 20, marginLeft: 20, marginRight: 20}}
                    type={2}
                    text={'按钮2 type=2 解锁按钮1'}
                    onPress={this._onPress2}
                    textStyle={{fontSize: 20}}
                />
            </View>
        )
    }
}
import React from 'react';
import { View, Text } from 'react-native';
import BaseComponent from "./BaseComponent";
import NavigationView from 'react-native-cz-navigationview';
import TextInput from 'react-native-cz-inputtext';


export default class TextInputView extends BaseComponent{

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
    _onChangeText1 = (value) => {
        console.log('TextInput1:   ' + value);
    }

    _onChangeText2 = (value) => {
        console.log('TextInput2:   ' + value);
    }

    _onPress = () => {
        this.textInput.modifyPlaceholder('修改后的默认文本信息');
    }

    render() {
        return (
            <View>
                <NavigationView
                    title={'TextInput'}
                    back={this._back}
                />
                <TextInput
                    mainStyle={{marginLeft: 20, marginRight: 20, marginTop: 20, backgroundColor: 'white'}}
                    type={1}
                    evaluateView={ (textInput) => {this.textInput = textInput} }
                    onChangeText={this._onChangeText1}
                    placeholderText={'正常模式,没有左标题'}
                />
                <TextInput
                    mainStyle={{marginLeft: 20, marginRight: 20, marginTop: 20, backgroundColor: 'white'}}
                    type={2}
                    onChangeText={this._onChangeText2}
                    placeholderText={'银行卡号,有左标题'}
                    titleInfo={{'text': '测试', 'style': {fontSize: 23, color: 'red', width: 60}}}
                />
                <Text onPress={this._onPress}>修改TextInput1 默认文本信息</Text>
            </View>
        )
    }
}
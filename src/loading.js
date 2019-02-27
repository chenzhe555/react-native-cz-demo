import React, { Component } from 'react';
import { View, Text } from 'react-native';
import NavigationView from 'react-native-cz-navigationview';
import Loading from 'react-native-cz-loading';

export default class LoadingView extends Component{

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

    _showLoading = (type) => {
        if (type == 1) {
            Loading.show('第一个Loading');
            setTimeout( () => {
                Loading.show('第二个Loading');
            }, 1000);
            setTimeout( () => {
                Loading.hide();
            }, 2000);
            setTimeout( () => {
                Loading.hide();
            }, 4000);
        } else if (type == 2) {
            Loading.show('第一个Loading');
            setTimeout( () => {
                Loading.show('第二个Loading');
            }, 1000);
            setTimeout( () => {
                Loading.hideImmediately();
            }, 3000);
        }
    }

    render() {
        return (
            <View>
                <NavigationView
                    title={'Loading'}
                    back={this._back}
                />
                <Text onPress={this._showLoading.bind(this,1)} style={[{height: 40}]}>显示Loading(显示两个，依次隐藏)</Text>
                <Text onPress={this._showLoading.bind(this,2)} style={[{height: 40}]}>显示Loading(显示两个，全部隐藏)</Text>
                <Text style={[{color: 'red'}]}>PS:项目中自行对Loading进行计数加减，以便显示多个Loading</Text>
            </View>
        )
    }
}
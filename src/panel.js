import React from 'react';
import { View, Text } from 'react-native';
import NavigationView from 'react-native-cz-navigationview';
import BaseComponent from "./BaseComponent";
import Panel from 'react-native-cz-panel';


export default class PanelView extends BaseComponent{

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

    _showPanel = (type) => {
        if(type == 1) {
            if (!this.panel) {
                this.panel = new Panel();
            }
            console.log('显示Panel');
        } else {
            console.log('key***xyz***key自定义日志')
        }
    }

    render() {
        return (
            <View>
                <NavigationView
                    title={'Toast'}
                    back={this._back}
                />
                <Text onPress={this._showPanel.bind(this,1)} style={[{height: 40}]}>显示Panel</Text>
                <Text onPress={this._showPanel.bind(this,2)} style={[{height: 40}]}>自定义日志</Text>
            </View>
        )
    }
}
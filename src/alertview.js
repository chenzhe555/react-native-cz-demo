import React, {Component} from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import NavigationView from 'react-native-cz-navigationview';
import BaseComponent from "./BaseComponent";

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


    render() {

        return (
            <View style={[styles.MainView]}>
                <NavigationView
                    title={'AlertView'}
                    back={this._back}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({

})


import React from 'react';
import { View, Text } from 'react-native';
import BaseComponent from "./BaseComponent";
import NavigationView from 'react-native-cz-navigationview';
import ScrollTab from 'react-native-cz-scroll-tab';

export default class ScrollTabView extends BaseComponent{

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
            tab1Text: 'Tab1-2',
            tab2Text: 'Tab2-1'
        }
    }
    /************************** 子组件回调方法 **************************/
    /************************** 外部调用方法 **************************/
    /************************** List相关方法 **************************/
    /************************** Render中方法 **************************/

    _selectItemAtIndex1 = (item, index) => {
        this.setState({
            tab1Text: item['name']
        });
        console.log('点击了第一个ScrollTab');
        console.log(item);
    }

    _selectItemAtIndex2 = (item, index) => {
        this.setState({
            tab2Text: item['name']
        });
        console.log('点击了第二个ScrollTab');
        console.log(item);
    }

    _onPress1 = () => {
        this.scrollTab1.modifyList([{'name': 'MTab1-1'}, {'name': 'MTab1-2', 'redCount': 10}, {'name': 'MTab1-3'}]);
    }

    _onPress2 = () => {
        this.scrollTab2.modifyIndex(1);
    }

    render() {
        const { tab1Text, tab2Text } = this.state;


        return (
            <View>
                <NavigationView
                    title={'ScrollTab'}
                    back={this._back}
                />
                <ScrollTab
                    isScroll={false}
                    style={{height: 50}}
                    currentIndex={1}
                    clickSame={true}
                    lineColor={'blue'}
                    list={[{'name': 'Tab1-1'}, {'name': 'Tab1-2', 'redCount': 22}]}
                    selectItemAtIndex={this._selectItemAtIndex1}
                    evaluateView={ (scrollTab) => {this.scrollTab1 = scrollTab}}
                />
                <Text style={[{marginTop: 30}]}>{'Tab1: ' + tab1Text}</Text>
                <ScrollTab
                    isScroll={true}
                    style={{height: 50}}
                    list={[{'name': 'Tab2-1'}, {'name': 'Tab2-2', 'redCount': 22}, {'name': 'Tab2-3', 'redCount': 10},{'name': 'Tab2-4'}, {'name': 'Tab2-5'}]}
                    normalTextStyles={{color: 'blue', fontSize: 18}}
                    selectedTextStyles={{color: 'red', fontSize: 22}}
                    selectItemAtIndex={this._selectItemAtIndex2}
                    evaluateView={ (scrollTab) => {this.scrollTab2 = scrollTab}}
                />
                <Text style={[{marginTop: 30}]}>{'Tab2: ' + tab2Text}</Text>
                <Text style={[{marginTop: 50}]} onPress={this._onPress1}>第一个Tab切换数据源</Text>
                <Text style={[{marginTop: 50}]} onPress={this._onPress2}>第二个Tab切换到第二个</Text>
            </View>
        )
    }
}
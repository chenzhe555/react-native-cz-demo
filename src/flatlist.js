import React from 'react';
import { View, Text } from 'react-native';
import BaseComponent from "./BaseComponent";
import NavigationView from 'react-native-cz-navigationview';
import FlatListView from 'react-native-cz-flatlist';

export default class CustomFlatListView extends BaseComponent{

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
        this.test1 = false;
    }
    /************************** 子组件回调方法 **************************/
    /************************** 外部调用方法 **************************/
    /************************** List相关方法 **************************/
    /************************** Render中方法 **************************/

    _renderItem = (item) => {
        return (
            <View>
                <View style={[{height: 50, justifyContent: 'center'}]}>
                    <Text style={[{color: 'red', fontSize: 18}]}>{item.item}</Text>
                </View>
                <View style={[{height: 1, backgroundColor: '#999999'}]}></View>
            </View>
        );
    }

    _refresh = (callback) => {
        setTimeout( () => {
            // callback({'list': [1,2,3,4,5,6,7,8,9,0]});
            // callback({'list': [1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]});
            // callback({'list': [1,2,3,4,5]});
            // if (this.test1) {
            //     callback({'list': [1,2,3,4,5], 'fail': 0});
            // } else {
            //     this.test1 = true;
            //     callback({'list': [1,2,3,4,5], 'fail': 1});
            // }
            callback({'list': []});
        }, 1500);
    }

    _loadMore = (callback) => {
        setTimeout( () => {
            callback({'list': [1,2,3,4,5,6]});
        }, 1500);
    }

    render() {
        return (
            <View style={[{flex: 1}]}>
                <NavigationView
                    title={'FlatListView'}
                    back={this._back}
                />
                <View style={[{flex: 1}]}>
                    <FlatListView
                        pageCount={5}
                        renderItem={this._renderItem}
                        refresh={this._refresh}
                        loadMore={this._loadMore}
                    />
                </View>
            </View>
        )
    }
}
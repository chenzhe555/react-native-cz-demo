import React from 'react';
import { View, Text } from 'react-native';
import BaseComponent from "./BaseComponent";
import NavigationView from 'react-native-cz-navigationview';
import Calendar from 'react-native-cz-calendar';

export default class CalendarView extends BaseComponent{

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
            currentDate: ''
        }
    }
    /************************** 子组件回调方法 **************************/
    /************************** 外部调用方法 **************************/
    /************************** List相关方法 **************************/
    /************************** Render中方法 **************************/

    _onPress = () => {
        this.calendar.show(this.state.currentDate);
    }

    _confirmAction = (data) => {
        this.setState({
            currentDate: data['date']
        });
    }

    render() {
        const { currentDate } = this.state;

        return (
            <View>
                <Calendar
                    evaluateView={ (calendar) => {this.calendar = calendar} }
                    confirmAction={this._confirmAction}
                    bottomSpace={100}
                />
                <NavigationView
                    title={'Calendar'}
                    back={this._back}
                />
                <Text onPress={this._onPress} style={[{marginTop: 30}]}>显示日历</Text>
                <Text style={[{marginTop: 30}]}>{'选择的日期:' + currentDate}</Text>
            </View>
        )
    }
}
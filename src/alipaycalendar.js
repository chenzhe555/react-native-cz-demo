import React from 'react';
import { View, Text } from 'react-native';
import BaseComponent from "./BaseComponent";
import NavigationView from 'react-native-cz-navigationview';
import AlipayCalendar from 'react-native-cz-alipay-calendar';

export default class AlipayCalendarView extends BaseComponent{

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
            startDate: '',
            endDate: '',
            selectType: 1
        }
    }
    /************************** 子组件回调方法 **************************/
    /************************** 外部调用方法 **************************/
    /************************** List相关方法 **************************/
    /************************** Render中方法 **************************/

    _onPress = () => {
        this.calendar.show({
            'start_date': this.state.startDate,
            'end_date': this.state.endDate,
            'type': this.state.selectType
        });
    }

    _confirm = (start, end, select) => {
        this.setState({
            startDate: start ? start['date'] : '',
            endDate: end ? end['date'] : '',
            selectType: select
        }, () => {
            this.calendar.hide();
        });
    }

    render() {
        const { startDate, endDate } = this.state;

        return (
            <View>
                <AlipayCalendar
                    selectType={2}
                    evaluateView={ (calendar) => {this.calendar = calendar} }
                    confirm={this._confirm}
                    defaultColor={'red'}
                    bottomSpace={100}
                />
                <NavigationView
                    title={'AlipayCalendar'}
                    back={this._back}
                />
                <Text onPress={this._onPress} style={[{marginTop: 30}]}>显示日历</Text>
                <Text style={[{marginTop: 30}]}>{'选择的开始日期:' + startDate}</Text>
                <Text style={[{marginTop: 30}]}>{'选择的结束日期:' + endDate}</Text>
            </View>
        )
    }
}
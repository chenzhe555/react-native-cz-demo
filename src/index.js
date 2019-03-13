import React, {Component} from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, DeviceEventEmitter } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import MainView from './main';
import AlertView from './alertview';
import NavigationView from './navigationview';
import LoadingView from './loading';
import ToastView from './toast';
import PanelView from './panel';
import ImagePlaceholderView from './imageplaceholder';
import ButtonView from './button';
import TextInputView from './textinput';
import CalendarView from './calendar';
import AlipayCalendarView from './alipaycalendar';
import CommonModalView from './commonmodal';
import ScrollTabView from './scrolltab';
import JSUtilsView from './jsutils';
import ReddotView from './reddot';
import PermissionView from './permission';
import FlatListView from './flatlist';
import StatusView from './statusview';

export default class AppIndex extends Component{

    /************************** 生命周期 **************************/
    constructor(props) {
        super(props);
        this.initializeParams();
        console.disableYellowBox = true;
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
        this.Navigator = createStackNavigator({
            MainView: {
                screen: MainView,
                navigationOptions: {
                    header: null
                }
            },
            NavigationView: {
                screen: NavigationView,
                navigationOptions: {
                    header: null
                }
            },
            LoadingView: {
                screen: LoadingView,
                navigationOptions: {
                    header: null
                }
            },
            ToastView: {
                screen: ToastView,
                navigationOptions: {
                    header: null
                }
            },
            PanelView: {
                screen: PanelView,
                navigationOptions: {
                    header: null
                }
            },
            ImagePlaceholderView: {
                screen: ImagePlaceholderView,
                navigationOptions: {
                    header: null
                }
            },
            ButtonView: {
                screen: ButtonView,
                navigationOptions: {
                    header: null
                }
            },
            TextInputView: {
                screen: TextInputView,
                navigationOptions: {
                    header: null
                }
            },
            CalendarView: {
                screen: CalendarView,
                navigationOptions: {
                    header: null
                }
            },
            ScrollTabView: {
                screen: ScrollTabView,
                navigationOptions: {
                    header: null
                }
            },
            CommonModalView: {
                screen: CommonModalView,
                navigationOptions: {
                    header: null
                }
            },
            AlipayCalendarView: {
                screen: AlipayCalendarView,
                navigationOptions: {
                    header: null
                }
            },
            AlertView: {
                screen: AlertView,
                navigationOptions: {
                    header: null
                }
            },
            JSUtilsView: {
                screen: JSUtilsView,
                navigationOptions: {
                    header: null
                }
            },
            ReddotView: {
                screen: ReddotView,
                navigationOptions: {
                    header: null
                }
            },
            PermissionView: {
                screen: PermissionView,
                navigationOptions: {
                    header: null
                }
            },
            FlatListView: {
                screen: FlatListView,
                navigationOptions: {
                    header: null
                }
            },
            StatusView: {
                screen: StatusView,
                navigationOptions: {
                    header: null
                }
            },
        });
    }
    /************************** 子组件回调方法 **************************/
    /************************** 外部调用方法 **************************/
    /************************** List相关方法 **************************/
    /************************** Render中方法 **************************/


    render() {
        const { Navigator } = this;

        return (
            <View style={[styles.MainView]}>
                <Navigator/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    MainView: {
        flex: 1,
        backgroundColor: 'white'
    }
})


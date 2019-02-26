import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AlertView from 'react-native-cz-alertview';

export default class CustomAlertview extends AlertView{


    // _buttonClicked = (index) => {
    //     if (this.props.buttonClicked) this.props.buttonClicked(index);
    // }
    //
    // /*
    // * 自定义底部按钮视图
    // * */
    // createButtonView = () => {
    //     return (
    //         <TouchableOpacity onPress={this._buttonClicked.bind(this, 101)}>
    //             <View style={[{height: 40, justifyContent: 'center', alignItems: 'center'}]}>
    //                 <Text>自定义</Text>
    //             </View>
    //         </TouchableOpacity>
    //     )
    // }
}
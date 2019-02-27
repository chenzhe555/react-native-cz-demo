import React from 'react';
import { View, Text } from 'react-native';
import BaseComponent from "./BaseComponent";
import NavigationView from 'react-native-cz-navigationview';
import ImagePlaceholder from 'react-native-cz-image-placeholder';

export default class ImagePlaceholderView extends BaseComponent{

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

    _modifyUrl = () => {
        this.imagePlaceholder.modifyImageUrl('https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1001673356,1600896727&fm=26&gp=0.jpg');
    }

    /*
    * 开始下载图片
    * */
    _onLoadStart = () => {
        console.log('_onLoadStart');
    }

    /*
    * 下载成功
    * */
    _onLoad = () => {
        console.log('_onLoad');
    }

    /*
    * 开始失败
    * */
    _onError = () => {
        console.log('_onError');
    }

    /*
    * 无论成功失败都会调用
    * */
    _onLoadEnd = () => {
        console.log('_onLoadEnd');
    }

    render() {
        return (
            <View>
                <NavigationView
                    title={'ImagePlaceholderView'}
                    back={this._back}
                />
                <ImagePlaceholder
                    evaluateView={ (imagePlaceholder) => {this.imagePlaceholder = imagePlaceholder} }
                    style={{borderRadius: 60}}
                    width={120}
                    height={120}
                    url={'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1551267347&di=722a4086bc3ec5381f0f637891560878&src=http://g.hiphotos.baidu.com/zhidao/pic/item/d439b6003af33a87c7e21cfac05c10385243b546.jpg'}
                    defaultSource={require('./images/default_image_pikaqiu.png')}
                    onLoadStart={this._onLoadStart}
                    onLoad={this._onLoad}
                    onError={this._onError}
                    onLoadEnd={this._onLoadEnd}
                />
                <Text onPress={this._modifyUrl.bind(this,1)} style={[{height: 40}]}>修改图片地址</Text>
            </View>
        )
    }
}
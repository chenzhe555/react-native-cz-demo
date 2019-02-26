import React from 'react';

export default class BaseComponent extends React.Component{

    /************************** 生命周期 **************************/
    constructor(props) {
        super(props);
        this.initializeParams();
    }
    /************************** 继承方法 **************************/
    _back = () => {
        console.log('---------- log start ------');
        console.log('back');
        console.log('---------- log end ------');
        this.props.navigation.pop();
    }
    /************************** 通知 **************************/
    /************************** 创建视图 **************************/
    /************************** 网络请求 **************************/
    /************************** 自定义方法 **************************/
    /*
    * 初始化参数
    * */
    initializeParams() {

    }

    pushVC = (vc = '', data = {}) => {
        this.props.navigation.push(vc,data);
    }
    /************************** 子组件回调方法 **************************/
    /************************** 外部调用方法 **************************/
    /************************** List相关方法 **************************/
    /************************** Render中方法 **************************/
}
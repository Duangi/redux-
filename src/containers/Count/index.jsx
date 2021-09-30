/**
 * 容器组件
 */
import { connect } from 'react-redux'
import {createDecrementAction, createIncrementAction} from '../../redux/count_action'
import React,{Component} from "react";

class Count extends Component{

    render(){
        return (
            <div>
                <h1>当前求和为：{this.props.count}</h1>
                <select ref={c=>this.selectNumber = c} >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                </select>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>
                <button onClick={this.incrementAsync}>异步加</button>
            </div>
        )
    }
    increment = () =>{
        const {value} = this.selectNumber
        this.props.increase(value*1);
    }
    decrement = () =>{
        const {value} = this.selectNumber
        this.props.decrease(value*1);
    }
    incrementIfOdd = () =>{
        // const {value} = this.selectNumber
    }
    incrementAsync = () =>{
        // const {value} = this.selectNumber
    }
}
// 创建并暴露一个container组件
export default connect(
    state=>({count:state}),
    {
        increase:createIncrementAction,
        decrease:createDecrementAction
    }
)(Count)
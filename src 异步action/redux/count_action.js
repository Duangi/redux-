/**
 * 存储Count组件的action对象
 * 对象形式的是同步action
 * 函数形式的是异步action
 */
import {INCREMENT,DECREMENT} from './constant'
// import store from './store'
export const createIncrementAction=(data)=>{
    return {type:INCREMENT,data}
}

export const createIncrementAsyncAction = (data,time)=>{
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(createIncrementAction(data))
        },time)
    }
}

export const createDecrementAction=(data)=>{
    return {type:DECREMENT,data}
}
/**
 * reducer就是一个函数
 * 输入是 previousState,action
 * 输出是 newState
 */
// 组件初始化状态
const initState = 0
export default function countReducer(preState=initState,action){
    const {type, data} = action
    
    switch (type) {
        case 'increment':
            return preState + data
        case 'decrement':
            return preState - data
        // 初始化的时候 type = default
        default:
            return preState
    }
}
const initState = 50
export default function testReducer(preState=initState,action={type:'increament'}){
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
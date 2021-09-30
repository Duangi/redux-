/**
 * 容器组件
 */
import CountUI from '../../components/Count'

import { connect } from 'react-redux'
import {createDecrementAction, createIncrementAction} from '../../redux/count_action'
function mapStateToProps(state){
    return {count:state}
} 
function mapDispatchToProps(dispatch){
    return {
        increase:(number)=>{
            // 通知redux执行加法
            dispatch(createIncrementAction(number)); 
        },
        decrease: number=>dispatch(createDecrementAction(number))
    }
}
// 创建并暴露一个container组件
export default connect(mapStateToProps,mapDispatchToProps)(CountUI)
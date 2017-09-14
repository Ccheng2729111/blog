import { Layout ,Icon} from 'antd'
import React,{Component} from 'react'
import { connect } from 'react-redux'
import { toogleFn } from '../action/toogle'

const { Header } = Layout

class HeaderCom extends Component{
    render(){
        return(
            <Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                    className="trigger"
                    type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.props.toogle}
                />
            </Header>
        )
    }
}

function mapStateToProps(state){
    return{
        collapsed:state.toogleState.collapsed
    }
}

function mapDispatchToProps(dispatch){
    return{
        toogle:()=>{
            dispatch(toogleFn())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HeaderCom)
import { Layout, Menu ,Icon} from 'antd'
import React,{Component} from 'react'
import { connect } from 'react-redux'

const { Sider } = Layout;
const SubMenu = Menu.SubMenu

class LayoutCom extends Component{
    render(){
        return(
            <Sider  collapsible
                    trigger={null}
                    collapsed={this.props.collapsed}>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                        <Icon type="book" />
                        <span>主页</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="bulb" />
                        <span>博客技术</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="notification" />
                        <span>自我介绍</span>
                    </Menu.Item>
                    <SubMenu
                        key="sub2"
                        title={<span><Icon type="team" /><span>技术分享</span></span>}
                    >
                        <Menu.Item key="4">Team 1</Menu.Item>
                        <Menu.Item key="5">Team 2</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        )
    }
}

function mapStateToProps(state){
    return{
        collapsed:state.toogleState.collapsed
    }
}

export default connect(mapStateToProps,{})(LayoutCom)
